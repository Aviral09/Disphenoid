<script>
    import videos from "./sample.json";
</script>

<style type="text/scss">
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

<section style="padding:10px;display:flex;flex-wrap:wrap;">
    {#each videos.items as vid}
        <div class="recom">
            <img src={vid.snippet.thumbnails.medium.url} alt="" />
            <div class="name">
                {@html vid.snippet.title.slice(0, 60)}{vid.snippet.title.length > 20 ? '...' : ''}
            </div>
            <div class="channel">{vid.snippet.channelTitle}</div>
        </div>
    {/each}
</section>
