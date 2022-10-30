<script>
    import logo from '$lib/images/logo.webp';
    import logoBackup from '$lib/images/logo.png';
</script>

<div class="text-column m-10">
    <h1 class="text-2xl font-bold my-2">How to play UKnoWHere</h1>
    <ul class="steps steps-vertical">
        <li class="step step-info step-1">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <p>
                        To play, first choose any location on the map by dropping the marker:
                        <picture>
                            <source srcset={logo} type="image/webp" />
                            <img src={logoBackup} alt="Logo" />
                        </picture>
                        The objective of the game is to guess as many nearby places from the chosen marker location by entering a <b>Place Name</b> correctly.
                    </p>
                    <p>
                        Each correct guess will add up to the Total Score. Game is over after <b>10</b> incorrect guesses.
                    </p>
                </div>
            </div>
        </li>
        <li class="step step-error">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <p>
                        Enter the <b>Place Name</b>. For example:
                    </p>
                    <div class="example">
                        <span class="close">r</span>
                        <span class="missing">i</span>
                        <span class="close">t</span>
                        <span class="missing">z</span>
                        <span class="exact">y</span>
                    </div>
                    <p>
                        The <span class="exact">y</span> is in the right place. <span class="close">r</span> and
                        <span class="close">t</span>
                        are the right letters, but in the wrong position. The other letters are wrong, and can be discarded.
                    </p>
                </div>
            </div>
        </li>
        <li class="step step-success">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <p>
                        Let's make another attempt:
                    </p>
                    <div class="example">
                        <span class="exact">p</span>
                        <span class="exact">a</span>
                        <span class="exact">r</span>
                        <span class="exact">t</span>
                        <span class="exact">y</span>
                    </div>
                    <p>
                        Bingo! You score a point and now you can guess your next <b>Place Name</b>
                    </p>
                </div>
            </div>
        </li>
        <li class="step step-warning">
            <div class="card bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <p class="my-2">
                        There will be several rows of <b>Nearest Road Name</b> if the location is connected to more than 1 road.
                        By entering a <b>Nearest Road Name</b> of your choice, Google Map will bring you to that location to continue the game.
                    </p>
                    <div class="example">
                        <span class="exact">p</span>
                        <span class="exact">a</span>
                        <span class="exact">r</span>
                        <span class="exact">t</span>
                        <span class="exact">y</span>
                    </div>
                    <div class="example">
                        <span class="exact">p</span>
                        <span class="exact">a</span>
                        <span class="exact">r</span>
                        <span class="exact">t</span>
                        <span class="exact">y</span>
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

    .step-1 img {
        width: 150px;
        margin: 15px;
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

    span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8em;
        width: 2.4em;
        height: 2.4em;
        background-color: white;
        box-sizing: border-box;
        border-radius: 2px;
        border-width: 2px;
        color: rgba(0, 0, 0, 0.7);
    }

    .missing {
        background: rgba(255, 255, 255, 0.5);
        color: rgba(0, 0, 0, 0.5);
    }

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

    .example span {
        font-size: 1.4rem;
    }

    p span {
        position: relative;
        border-width: 1px;
        border-radius: 1px;
        font-size: 0.4em;
        transform: scale(2) translate(0, -10%);
        margin: 0 1em;
    }
</style>
