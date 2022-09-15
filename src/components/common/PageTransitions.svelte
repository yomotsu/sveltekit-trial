<script lang="ts">
  import { fly } from 'svelte/transition';
  export let pathname = '';
</script>

{#key pathname}
  <div
    in:fly="{{ y: -50, duration: 250, delay: 300 }}"
    out:fly="{{ y: -50, duration: 250 }}"
    >
    <slot/>
  </div>
{/key}
