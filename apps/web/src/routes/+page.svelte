<script lang="ts">
  import { MyCounterButton } from 'ui';

  export let data;
</script>

<h1>Web</h1>
<MyCounterButton />

{#if data && data.data}
  {#each Object.entries(data.data) as [key, value], index (index)}
    <p>{key}: {value}</p>
  {/each}
{/if}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
