<script>
    import logo from '$lib/images/logo.webp';
    import logoBackup from '$lib/images/logo.png';
    import {base} from '$app/paths';
</script>

<svelte:head>
    <title>Setting</title>
    <meta name="description" content="UKnoWhere" />
</svelte:head>

<div class="hero mt-10">
    <div class="hero-content flex-col lg:flex-row text-center lg:text-left">
        <picture>
            <source srcset={logo} type="image/webp" />
            <img src={logoBackup} alt="Logo" />
        </picture>
        <div>
            <h1 class="text-5xl font-bold">UKnoWHere</h1>
            <h2 class="text-2xl font-semibold py-6">Here and Where</h2>
            <a href="{base}/app" class="btn btn-primary">to your new<br />Adventure</a>
        </div>
    </div>
</div>

<style>
    .hero-content img {
        width: 400px;
    }
</style>
