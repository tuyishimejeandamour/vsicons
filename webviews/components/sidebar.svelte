<script lang="ts">
</script>

<div>
  <input type="text" />
  <div class="items-body">
    <div class="items-body-content active" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons'})
          }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>all</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Builings'})
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Builings</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Business'})
       }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Business</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Communication'})
       }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Communication</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Design'})
       }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Design</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Development'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Development</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Device'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Device</span>
    </div>

    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Editor'})
        }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Editor</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Document'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Document</span>
    </div>
  
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Finance'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Finance</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Health'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Health & Medical</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Logos'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Logos</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Map'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Map</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Media'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Media</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/System'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>System</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/User'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>User & Faces</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Weather'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Weather</span>
    </div>
    <div class="items-body-content" on:click={()=>{
      tsvscode.postMessage({type:"all",value:'media/icons/Others'})
   }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          fill="rgba(255,255,255,1)"
        /></svg
      >
      <span>Others</span>
    </div>
  </div>
  <!-- <button on:click={()=>{
       tsvscode.postMessage({type:"onInfo",value:'info message'})
    }}>click message</button>
    <button on:click={()=>{
        tsvscode.postMessage({type:"onError",value:'error message'})
    }}>click for error</button> -->
</div>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  input {
    margin-left: 20px;
    width: calc(100% - 30px);
    margin-bottom: 10px;
  }

  .items-body {
    width: 100%;
    height: auto;
  }
  .items-body-content {
    position: relative;
    margin-left: 20px;
    width: calc(100% - 20px);
    height: 25px;
    display: flex;
    border: 1px solid transparent;
    cursor: pointer;
    align-items: center;
    justify-content: left;
    &:hover {
      cursor: pointer;
    }
    &::after {
      position: absolute;
      width: 100%;
      height: 25px;
      border: 1px solid #0080ff;
    }
    &.active svg {
      align-self: center;
      font-size: 15px;
      font-weight: bold;
      animation: icon 1.5s infinite forwards;
    }
    span {
      display: block;
      margin-left: 5px;
    }
  }
  @keyframes icon {
    0%,
    100% {
      transform: translate(0px);
    }
    50% {
      transform: translate(3px);
    }
  }
</style>
