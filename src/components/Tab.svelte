<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>
<svelte:head> 
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Proza+Libre:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Cormorant+Garamond:wght@300;400&family=Crimson+Text&family=EB+Garamond&family=Raleway:wght@100;200;300;400&display=swap" rel="stylesheet"> 
</svelte:head>
<style>
	button {
    outline: none;
		background: none;
    align-items: center;
  
		border: none;
		border-bottom: 2px solid white;
		border-radius: 0;
		margin: 10px;
		color: #ccc;
    font-family:'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 500;
	}
	
	.selected {
    outline: none;
    border: none;
		border-bottom: 7px solid teal;
		color: teal;
    border-top: 0px;
 
    font-family:'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 500;
    margin: 20px
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>