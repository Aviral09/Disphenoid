<script>
    export let id;

    const clear = (() => {
        const defined = (v) => v !== null && v !== undefined;
        const timeout = setInterval(() => {
            const ad = [...document.querySelectorAll(".ad-showing")][0];
            if (defined(ad)) {
                const video = document.querySelector("video");
                if (defined(video)) video.currentTime = video.duration;
            }
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    })();
</script>

<style>
    #main {
        width: 100%;
        height: 99.75vh;
        border: 0;
        background: #111;
    }
</style>

<div>
    <iframe
        id="main"
        title="video"
        modestbranding="1"
        src="https://www.youtube-nocookie.com/embed/{id}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
</div>
