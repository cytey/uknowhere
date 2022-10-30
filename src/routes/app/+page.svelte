<script lang="ts">
    import {confetti} from '@neoconfetti/svelte';
    import {applyAction, enhance} from '$app/forms';
    // import type {PageData, ActionData} from './$types';
    import {invalidateAll} from '$app/navigation';
    import {onMount, onDestroy} from "svelte";
    import {dataStore} from "/src/stores/data";

    // export let data: PageData;

    // export let form: ActionData;

    /** Whether or not the user has won */
    // $: won = data.answers.at(-1) === 'xxxxx';

    /** The index of the current guess */
    // $: i = won ? -1 : data.answers.length;

    /** Whether the current guess can be submitted */
    // $: submittable = data.guesses[i]?.length === 5;
    $: submittable = !guesslah.includes('_');

    /**
     * A map of classnames for all letters that have been guessed,
     * used for styling the keyboard
     */
    let classnames: Record<string, 'exact' | 'close' | 'missing'>;

    $: {
        classnames = {};

        // data.answers.forEach((answer, i) => {
        //     const guess = data.guesses[i];
        //
        //     for (let i = 0; i < 5; i += 1) {
        //         const letter = guess[i];
        //
        //         if (answer[i] === 'x') {
        //             classnames[letter] = 'exact';
        //         } else if (!classnames[letter]) {
        //             classnames[letter] = answer[i] === 'c' ? 'close' : 'missing';
        //         }
        //     }
        // });
    }

    /**
     * Modify the game state without making a trip to the server,
     * if client-side JavaScript is enabled
     */
    function update(event: MouseEvent) {
        // const guess = data.guesses[i];
        let guess = guesslah;
        const key = (event.target as HTMLButtonElement).getAttribute(
            'data-key'
        );
        if (key === 'backspace') {
            // data.guesses[i] = guess.slice(0, -1);
            if (underscoreIndex > 0) {
                underscoreIndex--;
                guess[underscoreArray[underscoreIndex]] = '_';
            }
            // if (form?.badGuess) form.badGuess = false;
        } else {
            // data.guesses[i] += key;
            if (underscoreArray[underscoreIndex] < guess.length) {
                guess[underscoreArray[underscoreIndex]] = key.toUpperCase();
                underscoreIndex++;
            }
        }
        guesslah = guess;
    }

    function enter(event: MouseEvent) {
        let guess = guesslah.join('');
        if (guess === places[placeIndex].toUpperCase()) {
            score++;
            if (placeIndex < places.length - 1) {
                placeIndex++;
                initGuess();
            } else {
                console.log('gameover');
            }
        } else {
            tries++;
        }
    }

    /**
     * Trigger form logic in response to a keydown event, so that
     * desktop users can use the keyboard to play the game
     */
    /*
    function keydown(event: KeyboardEvent) {
        if (event.metaKey) return;

        document
            .querySelector(`[data-key="${event.key}" i]`)
            ?.dispatchEvent(new MouseEvent('click', {cancelable: true}));
    }
    */

    onMount(() => {
        $dataStore.addressFlag = true;
        const googleAPAC = {lat: 1.276473557498751, lng: 103.79921450710519};
        const map = initMap(googleAPAC);
        const marker = new google.maps.Marker({
            position: googleAPAC,
            draggable: true,
            map: map
        });
        const geocoder = new google.maps.Geocoder();
        let lat, lng, address;
        let service = new google.maps.places.PlacesService(map);
        google.maps.event.addListener(marker, 'dragend', function (marker) {
            var latLng = marker.latLng;
            lat = latLng.lat();
            lng = latLng.lng();
            setTimeout(() => {
                map.setCenter(new google.maps.LatLng(lat, lng));
                map.setZoom(16);
            }, 100);
            geocoder.geocode({'latLng': latLng}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    address = results[0].formatted_address;
                    $dataStore.address = address;
                    $dataStore.placePointer = 0;
                }
            });
            let request = {
                location: latLng,
                radius: 500,
                // type: []
            };
            service.nearbySearch(request, callbackPlaces);
        });
    })

    const initGuess = () => {
        underscoreIndex = 0;
        let guess = [];
        let underscores = [];
        if (places.length) {
            for (var i = 0; i < places[placeIndex].length; i++) {
                if (rstlne.includes(places[placeIndex][i])) {
                    guess.push(places[placeIndex][i]);
                } else if (places[placeIndex][i] !== ' ') {
                    underscores.push(i);
                    guess.push('_');
                } else {
                    guess.push(' ');
                }
            }
        }
        underscoreArray = underscores;
        answerlah = guesslah = guess;
    }

    const wantedTypes = [
        'airport',
        'amusement_park',
        'aquarium',
        'bar',
        'bus_station',
        'cafe',
        'department_store',
        'fire_station',
        'hospital',
        'park',
        'restaurant',
        'school',
        'shopping_mall',
        'tourist_attraction',
        'train_station',
        'transit_station',
        'university',
        'zoo',
        'point_of_interest',
        'establishment'
    ];

    const rstlne = [
        'R',
        'S',
        'T',
        'L',
        'N',
        'E'
    ]

    $: places = [];
    $: guesslah = [];
    $: answerlah = [];
    $: underscoreArray = [];
    $: underscoreIndex = 0;
    $: score = 0;
    $: tries = 0;
    let placeIndex = 0;

    const callbackPlaces = (results, status) => {
        places = [];
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            let filteredResults = results.filter(val => wantedTypes.some(filter => val.types.includes(filter)))
            filteredResults = filteredResults.filter(val => /^[A-Za-z\s]*$/.test(val.name))
            // TODO: filter answered too
            for (var i = 0; i < filteredResults.length; i++) {
                var place = filteredResults[i];
                places.push(place.name.toUpperCase());
            }
        }
        initGuess();
    }

    onDestroy(() => {
        $dataStore.addressFlag = false;
    })
</script>

<!--
<svelte:window on:keydown={keydown} />
-->

<div class="hero">
    <div id="map"></div>
    <div class="hero-overlay bg-opacity-60">
        <div id="map-info" class="text-center my-1 w-full">
            {#if places && places.length && guesslah.length}
                {#each places[placeIndex].toString().split('') as letter, column}
                    {#if rstlne.includes(letter)}
                        <kbd class="kbd bg-success-content text-white">{letter}</kbd>
                    {:else if letter !== ' '}
                        <kbd class="kbd bg-white">{guesslah[column]}</kbd>
                    {:else}
                        <kbd class="kbd invisible">A</kbd>
                    {/if}
                {/each}
            {:else}
                <div class="bg-white inline-block p-2 px-4 google-map-box-shadow">
                    Drag and Drop the marker to a location <br /> with nearby places to play
                </div>
            {/if}
        </div>
    </div>
</div>

<form
    method="POST"
    action="?/enter"
    use:enhance={() => {
		// prevent default callback from resetting the form
		return async ({ result }) => {
			if (result.type === 'success') {
				await invalidateAll();
			}
			await applyAction(result);
		};
	}}
>
    <!--
    <div class="grid" class:playing={!won} class:bad-guess={form?.badGuess}>
        {#each Array(6) as _, row}
            {@const current = row === i}
            <div class="row" class:current>
                {#each Array(5) as _, column}
                    {@const answer = data.answers[row]?.[column]}

                    <input
                        name="guess"
                        disabled={!current}
                        readonly
                        class:exact={answer === 'x'}
                        class:close={answer === 'c'}
                        aria-selected={current && column === data.guesses[row].length}
                        value={data.guesses[row]?.[column] ?? ''}
                    />
                {/each}
            </div>
        {/each}
    </div>
    -->

    <div class="controls">
        <!--{#if won || data.answers.length >= 6}-->
        <!--    {#if !won && data.answer}-->
        <!--        <p>the answer was "{data.answer}"</p>-->
        <!--    {/if}-->
        <!--    <button data-key="enter" aria-selected="true" class="restart" formaction="?/restart">-->
        <!--        {won ? 'you won :)' : `game over :(`} play again?-->
        <!--    </button>-->
        <!--{:else}-->
            <div class="keyboard">
                <button
                    on:click|preventDefault={enter}
                    data-key="enter"
                    aria-selected={submittable}
                    disabled={!submittable}
                >
                    enter
                </button>

                <button
                    on:click|preventDefault={update}
                    data-key="backspace"
                    formaction="?/update"
                    name="key"
                    value="backspace"
                >
                    back
                </button>

                <button
                    data-key="tries"
                    disabled
                >
                    {tries}
                </button>

                <button
                    data-key="score"
                    disabled
                >
                    {score}
                </button>

                {#each ['<qwertyuiop>', 'asdfghjkl', 'zxcvbnm'] as row}
                    <div class="row">
                        {#each row as letter}
                            <button
                                on:click|preventDefault={update}
                                data-key={letter}
                                class={classnames[letter]}
                                formaction="?/update"
                                name="key"
                                value={letter}
                            >
                                {letter}
                            </button>
                        {/each}
                    </div>
                {/each}
            </div>
        <!--{/if}-->
    </div>
</form>

<!--{#if won}-->
<!--    <div-->
<!--        style="position: absolute; left: 50%; top: 30%"-->
<!--        use:confetti={{-->
<!--			force: 0.7,-->
<!--			stageWidth: window.innerWidth,-->
<!--			stageHeight: window.innerHeight,-->
<!--			colors: ['#ff3e00', '#40b3ff', '#676778'] // Google logo colors-->
<!--		}}-->
<!--    />-->
<!--{/if}-->

<style>
    #map-info {
        position: fixed;
        top: 120px;
        z-index: 999;
    }

    .kbd {
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
        margin: 3px 0;
    }

    .google-map-box-shadow {
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
    }

    .hero {
        place-items: inherit;
        height: calc(100vh - 170px);
    }

    #map {
        width: 100%;
        height: 100%;
        position: fixed;
    }

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex: 1;
    }

    .controls {
        text-align: center;
        justify-content: center;
        height: min(18vh, 10rem);
    }

    .keyboard {
        --gap: 0.2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        height: 100%;
    }

    .keyboard .row {
        display: flex;
        justify-content: center;
        gap: 0.2rem;
        flex: 1;
    }

    .keyboard button,
    .keyboard button:disabled {
        --size: min(7vw, 4vh, 40px);
        background-color: white;
        color: black;
        width: var(--size);
        border: none;
        border-radius: 2px;
        font-size: calc(var(--size) * 0.5);
        margin: 0;
    }

    .keyboard button.exact {
        background: var(--color-theme-2);
        color: white;
    }

    .keyboard button.missing {
        opacity: 0.5;
    }

    .keyboard button.close {
        border: 2px solid var(--color-theme-2);
    }

    .keyboard button:focus {
        background: var(--color-theme-1);
        color: white;
        outline: none;
    }

    .keyboard button[data-key='enter'],
    .keyboard button[data-key='backspace'],
    .keyboard button[data-key='tries'],
    .keyboard button[data-key='score'] {
        position: absolute;
        bottom: calc(1 / 3 * (100% - 2 * var(--gap)) + 0.18rem);
        width: calc(1.5 * var(--size));
        height: calc(1 / 3 * (100% - 2 * var(--gap)));
        text-transform: uppercase;
        font-size: calc(0.3 * var(--size));
        padding-top: calc(0.15 * var(--size));
    }

    .keyboard button[data-key='enter'], .keyboard button[data-key='tries'] {
        right: calc(50% + 4.68 * var(--size) + 0.8rem);
    }

    .keyboard button[data-key='backspace'], .keyboard button[data-key='score'] {
        left: calc(50% + 4.68 * var(--size) + 0.8rem);
    }

    .keyboard button[data-key='tries'], .keyboard button[data-key='score'] {
        font-size: calc(1 * var(--size));
        padding: 0;
        bottom: 0;
    }

    .keyboard button[data-key='enter']:disabled, .keyboard button[data-key='tries']:disabled, .keyboard button[data-key='score']:disabled {
        opacity: 0.5;
    }

    .restart {
        width: 100%;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 2px;
        border: none;
    }

    .restart:focus,
    .restart:hover {
        background: var(--color-theme-1);
        color: white;
        outline: none;
    }

    @keyframes wiggle {
        0% {
            transform: translateX(0);
        }
        10% {
            transform: translateX(-2px);
        }
        30% {
            transform: translateX(4px);
        }
        50% {
            transform: translateX(-6px);
        }
        70% {
            transform: translateX(+4px);
        }
        90% {
            transform: translateX(-2px);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>
