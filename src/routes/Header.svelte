<script>
    import {page} from '$app/stores';
    import logo from '$lib/images/logo.webp';
    import help from '$lib/images/warning.png';
    import {dataStore} from "/src/stores/data";
    import {base} from '$app/paths';
</script>

<header>
    <div class="corner">
        <a href="{base}/">
            <img src={logo} alt="Home" />
        </a>
    </div>

    <nav>

        <div class="tabs tabs-boxed">
            {#if $dataStore.addressFlag && $dataStore.address && $page.url.pathname.startsWith('/app')}
                <a href="{base}/app" class="tab tab-active">{$dataStore.address}</a>
            {:else}
                <a href="{base}/" class="tab" class:tab-active={$page.url.pathname === '/'}>Home</a>
                <a href="{base}/about" class="tab" class:tab-active={$page.url.pathname === '/about'}>About</a>
                <a href="{base}/app" class="tab" class:tab-active={$page.url.pathname.startsWith('/app')}>UKnoWHere</a>
            {/if}
        </div>
    </nav>

    <div class="corner">
        <a href="{base}/app/how-to-play">
            <img src={help} alt="Help" />
        </a>
    </div>
</header>

<style>
    .tabs-boxed {
        background-color: #fff;
    }

    .tabs-boxed .tab-active {
        background-color: #f1faee;
    }

    header {
        display: flex;
        justify-content: space-between;
    }

    .corner {
        width: 3em;
        height: 3em;
        min-width: 48px;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
        max-height: 48px;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        /*text-transform: uppercase;*/
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
        line-height: 0.8rem;
    }

    a:hover {
        color: var(--color-theme-1);
    }

    @media only screen and (max-width: 480px) {
        nav a {
            padding: 0 0.3rem;
            font-size: 0.7rem;
            letter-spacing: 0em;
        }
    }
</style>
