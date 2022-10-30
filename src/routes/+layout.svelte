<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import "../app.css";
    import './styles.css';
</script>

<svelte:head>
    <script defer async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBU3H6lIvnp1fJxtMSm6qCbyyuvernVrsc&callback=initMap&libraries=places">
    </script>

    <script>
        window.initMap = (position) => {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                center: position,
            });
            return map;
        }
    </script>
</svelte:head>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 0 1rem;
        width: 100%;
        /*max-width: 64rem;*/
        margin: auto;
        box-sizing: border-box;
    }
</style>
