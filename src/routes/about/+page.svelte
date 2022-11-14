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
        <b>uKnoWHere</b>. You KnoWHere. You Know Here. Do you really know Here and Where?
    </p>
    <p class="my-4">
        This app <b>challenges/helps</b> you to
        <i>know</i> here, <i>know</i> where, <i>know</i> your location, <i>know</i> your surroundings,
        <i>know</i> where you are, <i>know</i> where you can go,
        <i>know</i> your places of interest, <i>know</i> your "anywhere everywhere",
        <b>goddamn well</b> at the end of playing too much.
    </p>
    <p class="my-4">
        Let's <a class="underline font-semibold" href="{base}/app/">Play now</a> or learn <a class="underline font-semibold" href="{base}/app/how-to-play/">How to play</a> first!
    </p>
    <h1 class="text-2xl font-bold my-2 mt-14">Why I spent some time building this app</h1>
    <p class="my-4">
        I have always been passionate about applying technology to maps and solving everyday problems. The problem I am trying to solve here is that people do not know their "here and where" well
        enough to be able to use it to their advantage to optimise their lives.
    </p>
    <p class="my-4">
        <b>uKnoWHere</b> can be played solo or in groups. While playing, players can use Google Maps functionalities such as Zoom and Street View to look for hints to solve the puzzle. Sometimes, the
        answers can be found directly from the labels on the map. I hope this app can train players to be well-versed in their "here and where" and in discovering the breadth of capabilities Google
        Maps Platform has to offer through the use of gamification. At the same time, I hope this can be a starting point to help Google Maps Team improve the accuracy and usefulness of the Place API.
    </p>
    <p class="my-4">
        Players can use existing Google Maps "Report a map error" to report puzzles that are unsolvable, indirectly enhancing the validity of the Place API and helping it stay current and useful. For
        future enhancement, analytics of players' gameplay can help us understand whether the existing Place APIs' output is useful and valid.
    </p>
    <p class="my-4">
        I am using some of the latest web technologies stated in the footer to build this app. You may view the source code
        <a class="underline font-semibold" target="_blank" rel="noreferrer" href="https://github.com/cytey/uknowhere">here</a>
    </p>
    <h1 class="text-2xl font-bold my-2 mt-14">Unique user experience</h1>
    <p class="my-4">
        <b>uKnoWHere</b> feature an unique keyboard layout during gameplay. Inspired from Wheel of Fortune, I called this keyboard layout with score system: <b>!RSTLNE0</b>. In Wheel of Fortune,
        the letters R S T L N E are always given to the players for the final puzzle. Hence, there is no need for these keys in the keyboard. You may look out the reason why
        <a class="underline font-semibold" target="_blank" rel="noreferrer" href="https://www.quora.com/What-prompted-Wheel-of-Fortune-to-use-the-letters-R-S-T-L-N-and-E-in-the-bonus-round">here</a>.
    </p>
    <p class="my-4">
        <b>uKnoWHere</b> also feature an unique responsive minimalist layout with on-screen keyboard. Elements are placed strategically both on/off the map canvas. On-screen keyboard ensures that
        players can use the default Google Maps keyboard shortcuts for map explorations with off-screen keyboard instead, giving an alternate option for better controls.
    </p>
    <p class="my-4">
        I hope that <b>!RSTLNE0</b> keyboard layout and this responsive minimalist layout with on-screen keyboard will give rise to better unique idea and map experience.
    </p>
    <h1 class="text-2xl font-bold my-2 mt-14">Google Maps APIs used</h1>
    <p class="my-4">
        <b>Maps JavaScript API</b> - used to load the map and set the draggable marker
    </p>
    <p class="my-4">
        <b>Geocoding API</b> - used to reverse geocode the location of the marker
    </p>
    <p class="my-4">
        <b>Places APT</b> - used to curate the list of places based on the location of the marker
    </p>
</div>
