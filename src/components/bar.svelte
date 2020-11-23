<script>
    let bar, searcher;

    setInterval(() => {
        bar.style.opacity = document.activeElement.id === "srcBox" ? "1" : "0";
    }, 4000);
    addEventListener("mouseover", () => {
        bar.style.opacity = "1";
    });
</script>

<style type="text/scss">
    section {
        width: calc(100% - 10px);
        display: flex;
        position: fixed;
        top: 0;
        justify-content: space-between;
        background: #111;
        transition: all 0.3s ease;
        align-items: center;
        padding: 10px 5px;
        input {
            padding: 5px 10px;
            background: #080808;
            font-size: 1em;
            color: #fff;
            border: 0;
            margin: 0;
            outline: none;
            &::placeholder {
                color: #ddd;
            }
        }
    }
</style>

<section bind:this={bar}>
    <span>
        <svg
            width="32"
            height="auto"
            viewBox="0 0 1024 721"
            style="position:relative;top:5px;">
            <path d="M407 493l276-143L407 206V493z" fill="#FFF" />
            <path
                d="M1013 156c0 0-10-70-41-101C934 14 890 14 870 12 727 1 513 1 513 1h0c0 0-214 0-357 10C135 14 91 14 53 55 22 86 12 156 12 156S2 239 2 322v78C2 482 12 564 12 564s10 70 41 101c39 41 90 39 113 44 82 8 347 10 347 10s215 0 358-11c20-2 64-3 102-43 31-31 41-101 41-101s10-83 10-165v-77C1023 239 1013 156 1013 156zM407 493V206l276 144L407 493z"
                fill="#E52D27" />
        </svg>
        Maxwell
    </span>

    <form on:submit|preventDefault={searcher} style="border: 1px solid #4448;">
        <input id="srcBox" size="40" placeholder="Search" />
        <input type="submit" value="go" style="background:#222" />
    </form>

    <div>RHS Me bohot saara stuff</div>
</section>
