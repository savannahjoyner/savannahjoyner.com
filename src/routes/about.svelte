

<svelte:head>
	<title>About</title>
</svelte:head>

<script>
   import AboutSection from "../components/AboutSection.svelte"
   import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<AboutSection />
<Social socialData={data.SOCIAL_DATA} />