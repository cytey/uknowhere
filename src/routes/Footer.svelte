<script>
    import github from '$lib/images/GitHub-Mark-120px-plus.png';
    import leaderboard from '$lib/images/world.png';
    import {base} from '$app/paths';
</script>

<footer class="flex items-center">
    <div class="corner corner-left">
        <!--
        <a target="_blank" rel="noreferrer" href="https://github.com/cytey/uknowhere">
            <img src={github} alt="GitHub" />
        </a>
        -->
    </div>

    <p class="w-full text-center text-xs">
        Powered by
        <a target="_blank" rel="noreferrer" href="https://mapsplatform.google.com/">Google Maps Platform</a> |
        <a target="_blank" rel="noreferrer" href="https://kit.svelte.dev/">SvelteKit</a> | <br />
        <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a> |
        <a target="_blank" rel="noreferrer" href="https://daisyui.com/">DaisyUI</a> |
        <a target="_blank" rel="noreferrer" href="https://pages.github.com/">GitHub Pages</a> <br />
        <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-icons/map">Map icons created by kmg design - Flaticon</a>
    </p>

    <div class="corner corner-right">
        <!--
        <a href="{base}/app/leaderboard">
            <img src={leaderboard} alt="Leaderboard" />
        </a>
        -->
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
    }

    .corner {
        width: 3em;
        height: 3em;
        position: fixed;
        bottom: -10px;
    }

    .corner-left {
        left: 10px;
    }

    .corner-right {
        right: -10px;
    }

    /*.corner img {*/
    /*    width: 2em;*/
    /*    height: 2em;*/
    /*    object-fit: contain;*/
    /*}*/

    p a {
        font-weight: 700;
    }

    a:hover {
        color: var(--color-theme-1);
    }


    @media only screen and (max-width: 480px) {
        p {
            font-size: 10px;
        }
    }
</style>
