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

<style type="text/scss">
    #wrapper {
        width: 100%;
        height: 99.75vh;
        .main {
            width: 100%;
            height: 100%;
            border: 0;
            background: #111;
        }
    }
</style>

<div id="wrapper">
    <iframe
        id="main"
        class="main"
        title="video"
        src="https://www.youtube-nocookie.com/embed/{id}"
        allow="accelerometer;clipboard-write;encrypted-media;picture-in-picture"
        allowfullscreen />
</div>
