<script>
    import {base} from '$app/paths';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column m-10 text-justify lg:text-left">
    <h1 class="text-2xl font-bold my-4">About this app</h1>
    <p class="my-4">
        uKnoWHere. You KnoWHere. You Know Here. Do you really know Here and Where?
    </p>
    <p class="my-4">
        This app <b>challenges/helps</b> you to
        <i>know</i> here, <i>know</i> where, <i>know</i> your location, <i>know</i> your surroundings,
        <i>know</i> where you are, <i>know</i> where you can go,
        <i>know</i> your places of interest, <i>know</i> your "anywhere everywhere",
        <b>goddamn well</b> at the end of playing too much.
    </p>
    <p class="my-4">
        Let's <a class="underline font-semibold" href="{base}/app/">Play now</a> or view <a class="underline font-semibold" href="{base}/app/how-to-play/">How to play</a> first!
    </p>
    <h1 class="text-2xl font-bold my-2 mt-14">Why I spent some time building this app</h1>
    <p class="my-4">
        I have always been passionate about applying technology to maps and solving everyday problems. The problem I am trying to solve here is that people do not know their "here and where" well
        enough to be able to use it to their advantage to optimise their lives.
    </p>
    <p class="my-4">
        While playing, users can use Google Map functionalities to look for hints to solve the puzzle. Sometimes, the answers can be found directly from the labels on the map. I hope this app can
        train users to be well-versed in their "here and where" and in using the awesome functionalities of Google Maps through the use of gamification. At the same time, I hope this can be a starting
        point to help Google Map Team improve the accuracy and usefulness of the Place API.
    </p>
    <p class="my-4">
        For future enhancement, analytics of users' gameplay can help us understand whether the existing Place APIs' output is useful and valid. Features can also be introduced to allow users to use
        this avenue to report puzzles that they can’t solve or skip, indirectly enhancing the validity of the Place API and helping it stay current and useful.
    </p>
    <p class="my-4">
        I am using some of the latest web technologies stated in the footer to build this app. You may view the source code
        <a class="underline font-semibold" target="_blank" rel="noreferrer" href="https://github.com/cytey/uknowhere">here</a>
    </p>
    <h1 class="text-2xl font-bold my-2 mt-14">Google Map APIs used</h1>
    <p class="my-4">
        <b>Maps JavaScript API</b> - used to load the map and draggable marker
    </p>
    <p class="my-4">
        <b>Geocoding API</b> - used to reverse geocode the location of the marker
    </p>
    <p class="my-4">
        <b>Places APT</b> - used to curate the list of places based on the location of the marker
    </p>
</div>
