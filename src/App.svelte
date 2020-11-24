<script>
	import Bar from "./components/bar.svelte";
	import Player from "./components/player.svelte";
	import Stream from "./components/videostream.svelte";

	import { search } from "./core/api";
	import videos from "./components/sample.json";

	let base = videos;
	let id = "wieRZoJSVtw";

	const searcher = (e) => {
		search(e.target.childNodes[0].value).then((r) => (base = r));
		window.location.href = "#search";
	};
	const vidoer = (e) => {
		id = e.target.parentElement.id;
		window.location.href = "#main";
		document.getElementById("main").focus();
	};
</script>

<style>
</style>

<Bar {searcher} />
<Player {id} />
<Stream videos={base} {vidoer} />
