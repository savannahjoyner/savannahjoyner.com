<script>
 

  export let projectData = {};
  const { HEADING, ALL_PROJECTS, PROJECT_LIST } = projectData;
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
    flex: 1 1 450px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    background-image: linear-gradient(
      353deg,
      hsl(190, 23.1%, 94.9%) 43%,
      hsl(180, 30.8%, 94.9%) 92%
    );
    margin: 1rem;
    padding: 1rem;
    min-width: 250px;
    max-width: 450px;
    height: 450px;
    position: relative;
    cursor: pointer;
    justify-content: space-around;
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
  ul {
    padding-bottom: 3px;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
  li {
    display: inline-block;
  }
  li + li {
    padding-left: 1rem;
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
    transition:slide={{ delay: 200 }}
    style="box-shadow: {$shadow * 5}px {$shadow * 5}px #669966;"
    class="site">
    <img src={list.URL} alt={list.LABEL} class="project-img" />
    <h4>{list.LABEL}</h4>
    <p>{list.DESCRIPTION}</p>
    <h2
      class="title"
      transition:fade={{ delay: 300 }}>
      {title}
    </h2>
    <img src={image} alt="A screenshot of {title}" />
    <div
      class="description"
      transition:fade={{ delay: 500 }}>
      {description}
    </div>
    <div class="code">
      <ul>
        {#each technologies as technology}
          <li in:typewriter={{ speed: 150 }}>{technology}</li>
        {/each}
      </ul>
      {#if code != ''}<a href={code}>Source Code</a>{/if}
    </div>
  </div>
{/if}