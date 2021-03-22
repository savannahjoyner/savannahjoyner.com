<script>
  export let technologies = [];
  export let code = "";
  export let title = "There was no Title";
  export let description = "There was no Description";
  export let link = "";
  export let image = "";
  let hovered = false;
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const shadow = tweened(0, { duration: 500, easing: cubicOut });
  function handleClick() {
    window.location = link;
  }
  function handleMouseEnter() {
    shadow.set(1);
    hovered = true;
  }
  function handleMouseLeave() {
    shadow.set(0);
    hovered = false;
  }
  function typewriter(node, { speed = 50 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;
    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }
    const text = node.textContent;
    const duration = text.length * speed;
    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
  let mounted = false;
  onMount(() => (mounted = true));
</script>

<style>
  .site {
    background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  }
  .title {
    flex: 0;
    font-family: "Fira Sans";
    font-weight: 400;
    padding-bottom: 2rem;
  }
  .title a {
    color: black;
  }
  .description {
    padding-top: 2rem;
    flex: 1;
    padding: 1rem;
  }
  img {
    max-height: 200px;
    max-width: 100%;
  }
  .code {
    flex: 1;
    font-family: "Fira Code";
  }
</style>

{#if mounted}
  <div
    on:click={handleClick}
    on:mouseenter={handleMouseEnter}
    on:touchstart={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:touchend={handleMouseLeave}
    transition:slide={{ delay: 200}}
    style="box-shadow: {$shadow * 10}px {$shadow * 5}px #669966, {$shadow * 15}px
    {$shadow * 8}px #fff, {$shadow * 20}px {$shadow * 10}px #669966;"
    class="site">
    <h2
      class="title"
      transition:fade={{ delay: 250 }}>
    </h2>
    <img src={image} alt="A screenshot of {title}" />
    <div
      class="description"
      transition:fade={{ delay: 500 }}>
      {description}
    </div>
  </div>
{/if}