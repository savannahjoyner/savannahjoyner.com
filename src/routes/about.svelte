

<svelte:head>
	<title>About</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />

</svelte:head>

<script>
   import AboutSection from "../components/AboutSection.svelte"
   import ExperienceGrid from "../components/ExperienceGrid.svelte"
   import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<AboutSection />
<ExperienceGrid/>
<Social socialData={data.SOCIAL_DATA} />