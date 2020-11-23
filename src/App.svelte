<script>
	import Bar from "./components/bar.svelte";
	import Player from "./components/player.svelte";
	import Stream from "./components/videostream.svelte";

	import { search } from "./core/api";

	const videos = 2;

	const searcher = (e) => {
		console.log("hi");
		// console.log(e.target.childNodes[0].value);
		// if (srch) search(srch).then((r) => console.log(r));
	};
</script>

<style>
</style>

<Bar {searcher} />
<!-- <Player id="wieRZoJSVtw" /> -->
<Stream />
