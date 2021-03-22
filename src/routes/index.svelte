
<script>

  import Card from '../components/Card.svelte';
  import Hero from '../components/Hero.svelte';
  import ProjectGrid from "../components/ProjectGrid.svelte";
  import Project from "../components/Project.svelte";
  import InfoSection from "../components/InfoSection.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Banner from "../components/Banner.svelte";
  import Projects from "../components/Projects.svelte";
  import AboutSection from "../components/AboutSection.svelte";
  import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<style>
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Proza+Libre:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet">
	<title>Savannah Joyner</title>
</svelte:head>



<Banner bannerData={data.BANNER_DATA} />

<Projects projectData={data.PROJECT_DATA} />

<Social socialData={data.SOCIAL_DATA} />
