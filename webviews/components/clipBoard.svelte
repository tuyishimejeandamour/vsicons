<script>
	import { onMount } from 'svelte';
	
	export let currentsvg;

	let textarea;
	
	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={currentsvg} bind:this={textarea}></textarea>