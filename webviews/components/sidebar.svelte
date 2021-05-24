<script lang="ts">

</script>
 <style lang="scss">
     div{
         background-color: aliceblue;
     }
 </style>
<div>
    <input />
    <button on:click={()=>{
       tsvscode.postMessage({type:"onInfo",value:'info message'})
    }}>click message</button>
    <button on:click={()=>{
        tsvscode.postMessage({type:"onError",value:'error message'})
    }}>click for error</button>
</div>