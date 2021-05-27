<script lang="ts">
    import { onMount } from "svelte";
    import clipBoard from "./clipBoard.svelte";
    import { icons } from "./icons/buildings";
    import Model from "./Model.svelte";
    import {HsvPicker} from 'svelte-color-picker';
    let modal: any;
    let iconsarray = icons;
    let currentsvg: {name:string,content:string};
    onMount(() => {
        window.addEventListener("message", (event) => {
            const message = event.data;
            switch (message.type) {
                case "all": {
                    iconsarray = message.value;
                    break;
                }
            }
        });
    });

    function shortentext(str: string) {
        if (str.length > 15) {
            const res = str.slice(0, 12).concat("...");
            return res;
        } else {
            return str;
        }
    }
    let name = "world";

    const copy = () => {
        const app = new clipBoard({
            target: document.getElementById("clipboard"),
            props: { name },
        });
        app.$destroy();
    };
   
function colorCallback(rgba:any) {
	console.log(rgba.detail)
}
</script>

<div>
    <div class="wholeicon">
        {#each iconsarray as category}
            <div class="iconcategory_title">
                <p class="icon-type-name">{category.name}</p>
            </div>
            <div class="fileiconcontainer">
                {#each category.iconsvg as icon}
                    <div
                        class="icon-item"
                        on:click={() => {
                            modal.show();
                            currentsvg = icon;
                        }}
                    >
                        <div class="centerization">
                            <i class="add-btn" />
                            <div class="icon-info">
                                {@html icon.content}
                                <p>{shortentext(icon.name)}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <Model bind:this={modal}>
        <div class="card">
            <div class="img-avatar">
                <textarea
                    bind:value={currentsvg.content}
                    type="text"
                    id="mysvg"
                    style="display:none"
                />
                {@html currentsvg.content}
            </div>
            <div class="card-text">
                <div class="portada" />
                <div class="title-total">
                    <div class="title">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z" fill="rgba(255,255,255,1)"/></svg>
                        <span>add collection</span>
                    </div>
                    <h2>{currentsvg.name}</h2>

                    <div class="desc">
                        <HsvPicker on:colorChange={colorCallback} startColor={"#FBFBFB"}/>
                    </div>
                    <div class="actions">
                        <button
                            title="Download PNG Format"
                            class="button"
                            on:click={copy}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm2-2h8v4H8V2z"
                                    fill="rgba(255,255,255,1)"
                                /></svg
                            >
                            <span>Copy Svg</span>
                        </button>
                        <!-- svelte-ignore missing-declaration -->
                        <button
                        style="margin-left: 10px;"
                            title="Download PNG Format"
                            class="button"
                            on:click={() => {
                                tsvscode.postMessage({
                                    type: "insert",
                                    value: currentsvg,
                                });
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                                    fill="rgba(255,255,255,1)"
                                /></svg
                            >
                            <span>Insert</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button on:click={() => modal.hide()}>Close</button> -->
    </Model>
</div>

<style lang="scss">
    .wholeicon {
        display: block;
        width: 100%;
        height: auto;
    }
    .fileiconcontainer {
        display: flex;
        flex-wrap: wrap;
        padding-left: 30px;
        width: calc(100% - 30px);
        flex-wrap: wrap;
        height: auto;
        box-shadow: -1px 6px 5px -3px rgba(0,0,0,0.75);

    }
    .icon-item {
        position: relative;
        width: 90px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
        border-radius: 2px;
        transition: all 0.2s cubic-bezier(0.4, 0.6, 0.5, 1.32);
        vertical-align: middle;
        border: 1px solid transparent;
        border-radius: 2px;

        .centerization {
            margin: 0 auto;
        }
        &:hover {
            border: 1px solid #0080ff;
            .add-btn {
                opacity: 1;
            }
        }
        .add-btn {
            position: absolute;
            top: -1px;
            right: -1px;
            width: 18px;
            height: 18px;
            background: #0080ff;
            border-radius: 0 2px 0 2px;
            font-size: 24px;
            opacity: 0;
            transition: all 0.2s ease-in-out;
            background-image: url(../../media/images/add.svg);

            &:before {
                content: "";
                position: absolute;
                width: 18px;
                height: 18px;
                left: 0;
            }
        }

        p {
            margin-top: 4px;
            color: #909eb0;
        }
    }
    .card {
        background: rgb(15, 15, 15);
        //border-radius: 4px;
        box-shadow: 0px 14px 80px rgba(18, 18, 31, 0.5);
        width: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .card h2 {
        margin: 0;
        padding: 0 1rem;
    }
    .card .title {
        display: flex;
        //width: 100%;
        position: relative;
        right: 10px;
        padding: 1rem;
        text-align: right;
        color: green;
        font-weight: bold;
        font-size: 12px;
       
    }
    .card .desc {
        padding: 0.5rem 1rem;
        font-size: 12px;
    }
    .card .actions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        padding: 0.5rem 1rem;
    }
    .card .img-avatar svg {
        width: 85px;
        height: 85px;
        margin: 0 auto;
    }

    .img-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 5px;
        border: 4px solid white;
        background-image: transparent;
        top: 30%;
        left: 8%;
    }

    .card-text {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .title-total {
        padding: 2.5em 1.5em 1.5em 1.5em;
    }

    // path {
    //     fill: white;
    // }

    // .img-portada {
    //   width: 100%;
    // }

    .portada {
        width: 100%;
        height: 100%;
        background-image: url("./../../media/images/backgound.png");
        background-position: bottom center;
        background-size: cover;
    }


    .button {
        display: flex;
        margin-left: 6px;
        padding: 0 16px 0 4px;
        line-height: 40px;
        //transition: all 0.2s ease-in-out;
        border-radius: 2px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .button svg {
        width: 24px;
        height: 24px;
        margin-right: 6px;
    }
    .button span {
        white-space: nowrap;
        color: #f4f8fd;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
    }
    .icon-type-name {
        display: block;
        
        font-size: 18px;
        font-weight: 600;
        color: #eff2f7;
        margin: 20px 0 18px;
        margin-left: 30px;
        &::before {
            content: "";
            width: 12px;
            height: 2px;
            display: inline-block;
            vertical-align: middle;
            margin: 0 8px 0 1px;
            background-color: #006aff;
        }
    }
</style>
