

<svelte:head>
	<title>About</title>
</svelte:head>

<script>
   import AboutSection from "../components/AboutSection.svelte"
   import Social from "../components/Social.svelte";
  import DATA from "../DATA/data.js";
</script>

<AboutSection />
<Social socialData={DATA.SOCIAL_DATA} />