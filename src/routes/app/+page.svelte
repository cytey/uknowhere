<script lang="ts">
    import {confetti} from '@neoconfetti/svelte';
    import {applyAction, enhance} from '$app/forms';
    // import type {PageData, ActionData} from './$types';
    import {invalidateAll} from '$app/navigation';
    import {onMount, onDestroy} from "svelte";
    import {dataStore} from "/src/stores/data";
    import homeMarkerIcon from '$lib/images/homeMarker.png';
    import placeMarkerIcon from '$lib/images/placeMarker.png';
    import passedMarkerIcon from '$lib/images/passedMarker.png';

    // export let data: PageData;

    // export let form: ActionData;

    /** Whether or not the user has won */
    // $: won = data.answers.at(-1) === 'xxxxx';

    /** The index of the current guess */
    // $: i = won ? -1 : data.answers.length;
    $: won = false;
    $: lost = false;

    /** Whether the current guess can be submitted */
    // $: submittable = data.guesses[i]?.length === 5;
    $: submittable = !guesslah.includes('_');

    /**
     * A map of classnames for all letters that have been guessed,
     * used for styling the keyboard
     */
    let classnames: Record<string, 'exact' | 'close' | 'missing'>;

    let map, homeMarker, homeMarkerLatLng, placeMarker, placeLatLng;
    let placeMarkers = [];

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
        switch (key) {
            case 'backspace':
                // data.guesses[i] = guess.slice(0, -1);
                if (underscoreIndex > 0) {
                    underscoreIndex--;
                    guess[underscoreArray[underscoreIndex]] = '_';
                }
                // if (form?.badGuess) form.badGuess = false;
                guesslah = guess;
                break;
            case '<':
                placeIndex--;
                if (placeIndex < 0) {
                    placeIndex = placeNames.length - 1;
                }
                if (placeMarker) {
                    placeMarker.setMap(null);
                    placeMarkers.pop();
                }
                initGuess();
                break;
            case '>':
                placeIndex++;
                if (placeIndex >= placeNames.length) {
                    placeIndex = 0;
                }
                if (placeMarker) {
                    placeMarker.setMap(null);
                    placeMarkers.pop();
                }
                initGuess();
                break;
            default:
                // data.guesses[i] += key;
                if (underscoreArray[underscoreIndex] < guess.length) {
                    guess[underscoreArray[underscoreIndex]] = key.toUpperCase();
                    underscoreIndex++;
                }
                guesslah = guess;
                break;
        }
    }

    function enter(event: MouseEvent) {
        if (won || lost) {
            placeIndex = 0;
            for (let i in placeMarkers) {
                if (placeMarkers[i]) {
                    placeMarkers[i].setMap(null);
                }
            }
            placeMarkers = [];
            places = [];
            placeNames = [];
            guesslah = [];
            underscoreArray = [];
            underscoreIndex = 0;
            tries = 0;
            score = 0;
            won = false;
            lost = false;

            homeMarker.setAnimation(null);
            homeMarker.setLabel(null);
        } else {
            let guess = guesslah.join('');
            if (guess === placeNames[placeIndex].toUpperCase()) {
                score++;
                placeMarker = new google.maps.Marker({
                    position: placeLatLng,
                    icon: {
                        url: passedMarkerIcon,
                        labelOrigin: new google.maps.Point(20, 45)
                    },
                    map: map,
                    label: {
                        text: guess,
                        color: '#457B9D',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }
                });
                placeMarkers.push(placeMarker);
                if (score > 0) {
                    won = true;
                    const lat = homeMarkerLatLng.lat();
                    const lng = homeMarkerLatLng.lng();
                    map.setCenter(new google.maps.LatLng(lat, lng));
                    map.setZoom(16);
                    homeMarker.setAnimation(google.maps.Animation.BOUNCE);
                    homeMarker.setIcon({
                        url: homeMarkerIcon,
                        labelOrigin: new google.maps.Point(20, -40)
                    });
                    homeMarker.setLabel({
                        text: "You WON",
                        color: '#1D3557',
                        fontSize: '24px',
                        fontWeight: 'bold',
                    });
                } else {
                    if (placeIndex < placeNames.length - 1) {
                        const tempPlaceNames = placeNames;
                        tempPlaceNames.splice(placeIndex, 1);
                        placeNames = tempPlaceNames;
                        const tempPlaces = places;
                        tempPlaces.splice(placeIndex, 1);
                        places = tempPlaces;
                        // placeIndex++;
                        initGuess();
                    }
                }
            } else {
                tries++;
                console.log(guesslah);
                let answer = placeNames[placeIndex].toUpperCase().split('');
                for (let i = 0; i < guesslah.length; i++) {
                    const letter = guesslah[i];
                    console.log(answer[i], letter);
                    if (answer[i] === letter) {
                        answerlah[i] = 'x';
                        classnames[letter.toLowerCase()] = 'exact';
                    } else {
                        answerlah[i] = answer[i] !== letter ? 'c' : 'm';
                        classnames[letter] = answer[i] !== letter ? 'close' : 'missing';
                    }
                }
                if (tries > 1) {
                    lost = true;
                    const lat = homeMarkerLatLng.lat();
                    const lng = homeMarkerLatLng.lng();
                    map.setCenter(new google.maps.LatLng(lat, lng));
                    map.setZoom(16);
                    homeMarker.setAnimation(google.maps.Animation.BOUNCE);
                    homeMarker.setIcon({
                        url: homeMarkerIcon,
                        labelOrigin: new google.maps.Point(20, -40)
                    });
                    homeMarker.setLabel({
                        text: "You LOST",
                        color: '#E63946',
                        fontSize: '24px',
                        fontWeight: 'bold',
                    });
                }
            }
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

    const locate = () => {
        map = initMap(homeMarkerLatLng);
        homeMarker = new google.maps.Marker({
            position: homeMarkerLatLng,
            draggable: true,
            icon: {
                url: homeMarkerIcon
            },
            map: map,
            zIndex: 9
        });
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': homeMarkerLatLng}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                address = results[0].formatted_address;
                $dataStore.address = address;
                $dataStore.placePointer = 0;
            }
        });

        let lat, lng, address;
        let service = new google.maps.places.PlacesService(map);
        google.maps.event.addListener(homeMarker, 'dragend', function (marker) {
            homeMarkerLatLng = marker.latLng;
            lat = homeMarkerLatLng.lat();
            lng = homeMarkerLatLng.lng();
            setTimeout(() => {
                map.setCenter(new google.maps.LatLng(lat, lng));
                map.setZoom(16);
            }, 100);
            geocoder.geocode({'latLng': homeMarkerLatLng}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    address = results[0].formatted_address;
                    $dataStore.address = address;
                    $dataStore.placePointer = 0;
                }
            });
            let request = {
                location: homeMarkerLatLng,
                radius: 500,
                // type: []
            };
            service.nearbySearch(request, callbackPlaces);
        });

        map.addListener('tilesloaded', function () {
            $dataStore.loading = false;
        });
    }

    onMount(() => {
        $dataStore.addressFlag = true;
        homeMarkerLatLng = {lat: 1.276473557498751, lng: 103.79921450710519};
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                homeMarkerLatLng = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                locate();
            }, () => {
                locate();
            });
        } else {
            locate();
        }
    })

    const initGuess = () => {
        underscoreIndex = 0;
        let guess = [];
        let underscores = [];
        if (placeNames.length) {
            for (var i = 0; i < placeNames[placeIndex].length; i++) {
                if (rstlne.includes(placeNames[placeIndex][i])) {
                    guess.push(placeNames[placeIndex][i]);
                } else if (placeNames[placeIndex][i] !== ' ') {
                    underscores.push(i);
                    guess.push('_');
                } else {
                    guess.push(' ');
                }
            }
        }
        placeLatLng = places[placeIndex].geometry.location;
        placeMarker = new google.maps.Marker({
            position: placeLatLng,
            icon: placeMarkerIcon,
            map: map
        });
        placeMarkers.push(placeMarker);
        map.panTo(placeLatLng);
        underscoreArray = underscores;
        guesslah = guess;
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
    $: placeNames = [];
    $: guesslah = [];
    $: answerlah = [];
    $: underscoreArray = [];
    $: underscoreIndex = 0;
    $: score = 0;
    $: tries = 0;
    let placeIndex = 0;

    const callbackPlaces = (results, status) => {
        placeNames = [];
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            let filteredResults = results.filter(val => wantedTypes.some(filter => val.types.includes(filter)))
            places = filteredResults.filter(val => /^[A-Za-z\s]*$/.test(val.name))
            // TODO: filter answered too
            for (var i = 0; i < places.length; i++) {
                var place = places[i];
                placeNames.push(place.name.toUpperCase());
            }
        }
        if (placeMarker) {
            placeMarker.setMap(null);
            placeMarkers.pop();
        }
        initGuess();
    }

    onDestroy(() => {
        $dataStore.loading = true;
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
            {#if !won }
                {#if guesslah && placeNames.length && guesslah.length}
                    {#each placeNames[placeIndex].toString().split('') as letter, column}
                        {#if rstlne.includes(letter)}
                            <kbd class="kbd bg-success-content text-white">{letter}</kbd>
                        {:else if letter !== ' '}
                            {@const answer = answerlah[column]}
                            <kbd class="kbd bg-white"
                                 class:exact={answer === 'x'}
                                 class:close={answer === 'c'}
                            >
                                {guesslah[column]}
                            </kbd>
                        {:else}
                            <kbd class="kbd invisible">A</kbd>
                        {/if}
                    {/each}
                {:else}
                    <div class="bg-white inline-block p-2 px-4 google-map-box-shadow">
                        Drag and Drop the <span class="font-bold text-error">RED</span> marker to a location <br /> with nearby places to play
                    </div>
                {/if}
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
                disabled={!submittable || !places.length}
                class:selected="{won || lost}"
            >
                {(won || lost) ? 'replay' : 'enter'}
            </button>

            <button
                on:click|preventDefault={update}
                data-key="backspace"
                formaction="?/update"
                name="key"
                value="backspace"
                disabled={!places.length || won || lost}
            >
                back
            </button>

            <button
                data-key="tries"
                disabled
            >
                <span class="text-error">
                    {tries}
                </span>
            </button>

            <button
                data-key="score"
                disabled
                class="text-success"
            >
                <span class="text-success">
                    {score}
                </span>
            </button>

            {#each ['<qwyuiop>', 'adfghjk', 'zxcvbm'] as row}
                <div class="row">
                    {#each row as letter}
                        <button
                            on:click|preventDefault={update}
                            data-key={letter}
                            class={classnames[letter]}
                            formaction="?/update"
                            name="key"
                            value={letter}
                            disabled={!places.length || won || lost}
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

{#if won}
    <div
        style="position: absolute; left: 50%; top: 30%"
        use:confetti={{
			force: 0.7,
			stageWidth: window.innerWidth,
			stageHeight: window.innerHeight,
			colors: ['#FF595E', '#FFCA3A', '#8AC926'] // Google logo colors
		}}
    />
{/if}

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

    .kbd.exact {
        border: 2px solid var(--color-theme-2);
        background: var(--color-theme-3);
        color: #000;
    }

    .kbd.close {
        border: 2px solid #FF595E;
    }

    .google-map-box-shadow {
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
    }

    .hero {
        place-items: inherit;
        height: calc(100vh - 240px);
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

    .keyboard button.selected {
        background: var(--color-theme-3);
        color: var(--color-text);
        font-weight: bold;
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

    .keyboard button:disabled {
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

    @media only screen and (max-width: 480px) {
        .hero {
            height: calc(100vh - 270px);
        }

        .kbd {
            min-height: 1.8em;
            min-width: 1.8em;
        }
    }
</style>
