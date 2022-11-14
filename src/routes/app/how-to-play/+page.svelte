<script>
    import step1 from '$lib/images/Step1.png';
    import step2 from '$lib/images/Step2.png';
    import step3 from '$lib/images/Step3.png';
    import step4 from '$lib/images/Step4.png';
</script>

<div class="text-column m-10">
    <h1 class="text-2xl font-bold my-2">How to play uKnoWHere</h1>
    <ul class="steps steps-vertical">
        <li class="step step-error step-1">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <div>
                        To play, allow the app to access your current location. If geolocation is not enabled, game will start from Google Asia Pacific, Singapore.
                        <picture>
                            <source srcset={step1} type="image/png" />
                            <img src={step1} alt="Step1" />
                        </picture>
                        First choose any location on the map by dragging and dropping the <p class="font-bold text-error inline">RED</p> marker from the loaded location.
                    </div>
                </div>
            </div>
        </li>
        <li class="step step-warning step-2">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <div>
                        A <p class="font-bold text-warning inline">YELLOW</p> marker with the letter tiles will appear as the nearby place to guess. The letters <b>R S T L N E</b> are shown as part of
                        the game to make it easier to guess.
                        <picture>
                            <source srcset={step2} type="image/png" />
                            <img src={step2} alt="Step2" />
                        </picture>
                        The objective of the game is to guess nearby places from the chosen marker location by entering a <b>Place Name</b> correctly.
                        Each correct guess will add up to the Total Score. Game is over after either <b>10</b> correct or incorrect guesses.
                    </div>
                </div>
            </div>
        </li>
        <li class="step step-success">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <div>
                        Use the <b>!RSTLNE0</b> on-screen keyboard to solve the <b>Place Name</b> puzzle. Press "ENTER" to submit your answer and press "BACK" to key in the letters again.
                        <picture>
                            <source srcset={step3} type="image/png" />
                            <img src={step3} alt="Step3" />
                        </picture>
                        Incorrect submission will add to the <p class="font-bold text-error inline">RED</p> score
                        <button name="key" disabled>
                            <div class="text-error">0</div>
                        </button>
                        on the LEFT. Correct submission will add to the
                        <p class="font-bold text-success inline">GREEN</p> score
                        <button name="key" disabled>
                            <div class="text-success">0</div>
                        </button>
                        on the RIGHT. If you are unable to solve the current <b>Place Name</b> puzzle, you may toggle
                        <button name="key" disabled>&#60;</button>
                        or
                        <button name="key" disabled>&#62;</button>
                        arrows to skip
                        to the next <b>Place Name</b> puzzle with no penalty.
                        You may also drag and drop the <p class="font-bold text-error inline">RED</p> marker to a new location where you feel you are more confident to score.
                    </div>
                </div>
            </div>
        </li>
        <li class="step step-info">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <div>
                        Enter the <b>Place Name</b>. For example:
                    </div>
                    <div class="example">
                        <kbd class="kbd bg-white exact">H</kbd>
                        <kbd class="kbd bg-white exact">O</kbd>
                        <kbd class="kbd bg-success-content text-white">R</kbd>
                        <kbd class="kbd bg-success-content text-white">T</kbd>
                        <kbd class="kbd bg-white close">F</kbd>
                        <kbd class="kbd bg-white close">O</kbd>
                        <kbd class="kbd bg-success-content text-white">R</kbd>
                        <kbd class="kbd bg-white close">D</kbd>
                    </div>
                    <div>
                        The <kbd class="kbd bg-white exact">H</kbd> and <kbd class="kbd bg-white exact">O</kbd> are the right letters. <kbd class="kbd bg-white close">F</kbd>,
                        <kbd class="kbd bg-white close">O</kbd> and <kbd class="kbd bg-white close">D</kbd> are the wrong letters. Oh no, you made an incorrect guess.
                        <button name="key" disabled>
                            <div class="text-error">1</div>
                        </button>
                    </div>
                    <hr />
                    <div>
                        Let's make another attempt:
                    </div>
                    <div class="example">
                        <kbd class="kbd bg-white exact">H</kbd>
                        <kbd class="kbd bg-white exact">O</kbd>
                        <kbd class="kbd bg-success-content text-white">R</kbd>
                        <kbd class="kbd bg-success-content text-white">T</kbd>
                        <kbd class="kbd bg-white exact">P</kbd>
                        <kbd class="kbd bg-white exact">A</kbd>
                        <kbd class="kbd bg-success-content text-white">R</kbd>
                        <kbd class="kbd bg-white exact">K</kbd>
                    </div>
                    <div>
                        Bingo! You score a point
                        <button name="key" disabled>
                            <div>1</div>
                        </button>
                        and now you can guess your next <b>Place Name</b>
                    </div>
                </div>
            </div>
        </li>
        <li class="step step-info">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <div class="my-2">
                        If you are feeling stuck, you can make use of Google Maps functionalities such as Zoom and Street View to look for hints to solve the puzzle. Sometimes, the
                        answers can be found directly from the labels on the map. In this case, "HortPark" is on the map! Again, the main objective is to have fun solo or as a group during your
                        free time. During the fun, you will discover amazing places and the breadth of capabilities Google Maps Platform has to offer.
                        <picture>
                            <source srcset={step4} type="image/png" />
                            <img src={step4} alt="Step4" />
                        </picture>
                        Enjoy~ and try to win the game!
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

<style>
    .card {
        width: 100%;
    }

    .step img {
        width: 480px;
        margin: 15px 0;
    }

    .steps .step:after {
        content: '';
    }

    .steps .step-info + .step:before {
        background-color: hsl(var(--in) / var(--tw-bg-opacity));
    }

    .steps .step-warning + .step:before {
        background-color: hsl(var(--wa) / var(--tw-bg-opacity));
    }

    .steps .step-error + .step:before {
        background-color: hsl(var(--er) / var(--tw-bg-opacity));
    }

    .steps .step-success + .step:before {
        background-color: hsl(var(--su) / var(--tw-bg-opacity));
    }

    /*span {*/
    /*    display: inline-flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    font-size: 0.8em;*/
    /*    width: 2.4em;*/
    /*    height: 2.4em;*/
    /*    background-color: white;*/
    /*    box-sizing: border-box;*/
    /*    border-radius: 2px;*/
    /*    border-width: 2px;*/
    /*    color: rgba(0, 0, 0, 0.7);*/
    /*}*/

    /*.missing {*/
    /*    background: rgba(255, 255, 255, 0.5);*/
    /*    color: rgba(0, 0, 0, 0.5);*/
    /*}*/

    .close {
        border-style: solid;
        border-color: var(--color-theme-2);
    }

    .exact {
        background: var(--color-theme-2);
        color: white;
    }

    .example {
        display: flex;
        justify-content: flex-start;
        margin: 0.5rem 0;
        gap: 0.2rem;
    }

    /*.example span {*/
    /*    font-size: 1.4rem;*/
    /*}*/

    /*p span {*/
    /*    position: relative;*/
    /*    border-width: 1px;*/
    /*    border-radius: 1px;*/
    /*    font-size: 0.4em;*/
    /*    transform: scale(2) translate(0, -10%);*/
    /*    margin: 0 1em;*/
    /*}*/

    button:disabled {
        --size: min(10vw, 6vh, 60px);
        background: var(--color-theme-3);
        color: black;
        width: var(--size);
        border: none;
        border-radius: 2px;
        font-size: calc(var(--size) * 0.5);
        margin: 1px;
        opacity: 0.5;
        font-weight: 500;
    }

    .kbd {
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
        margin: 8px 0;
    }

    .kbd.exact {
        border: 2px solid var(--color-theme-2);
        background: #F1FAEE;
        color: #000;
    }

    .kbd.close {
        border: 2px solid #FF595E;
    }
</style>
