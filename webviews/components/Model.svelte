<script>
    let shown = false;
    export function show() {
        shown = true;
    }
    export function hide() {
        shown = false;
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.keyCode == 27) {
            hide();
        }
    }}
/>

{#if shown}
    <div class="modal-wrapper"
    >
        <div class="modal">
            <span class="modal_title">
                <span>priview icon</span>
            </span>
            <span class="close" on:click={() => hide()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(0,0,0,1)"/></svg>
            </span>
            <slot />
        </div>
    </div>
{/if}

<style lang="scss">
    .modal-wrapper {
       display: flex;
       justify-content: center;
       align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .modal {
        background-color: white;
        box-shadow: 0px 14px 80px rgba(0, 0, 0, 0.945);
        max-width: 60vw;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
         /* padding: 1rem; */
        //margin: 15% auto;
    }
    .close {
        margin-right: 10px;
        float: right;
        cursor: pointer;
    }
    .modal_title{
        position: relative;
        font-weight: 500;
        font-family: var(--vscode-font-family);
        font-size: var(--vscode-editor-font-size);
        display: inline-block;
        margin-left: 30px;
        color: rgba(5, 5, 5, 0.932);
        span{
            line-height: 27px;
        }
    }
    .close:hover {
        background-color: rgb(245, 43, 43);
        font-weight: bold;
        svg{
          fill:white;
        }
    }
</style>
