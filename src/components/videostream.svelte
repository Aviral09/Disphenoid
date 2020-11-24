<script>
    export let videos, vidoer;
</script>

<style type="text/scss">
    section {
        padding: 50px 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .recom {
        display: flex;
        flex-direction: column;
        margin: 10px;
        font-size: 0.9em;
        width: calc(20% - 20px);
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            margin-bottom: 5px;
        }
        .name {
            height: 2.2em;
        }
        .channel {
            font-size: 0.8em;
            color: #aaa;
            padding: 10px 0;
        }
    }
</style>

<section id="search">
    {#each videos.items as vid}
        <div class="recom" on:click={vidoer} id={vid.id.videoId}>
            <img src={vid.snippet.thumbnails.medium.url} alt="" />
            <div class="name">
                {@html vid.snippet.title.slice(0, 60)}{vid.snippet.title.length > 20 ? '...' : ''}
            </div>
            <div class="channel">{vid.snippet.channelTitle}</div>
            <div class="channel">{vid.snippet.publishedAt}</div>
        </div>
    {/each}
</section>
