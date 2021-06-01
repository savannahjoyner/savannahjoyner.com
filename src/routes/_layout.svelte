<script>
  
	import Navbar from '../components/Navbar.svelte';
  import data from "../data/data.js";
	let scrolled = false

	const onScroll = ({ target: { documentElement, body } }) => {
		if (body.scrollTop > 0 || documentElement.scrollTop > 0) {
			scrolled = true
		} else {
			scrolled = false
		}
	}
</script>
<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
</svelte:head>
<Navbar {scrolled} navlists={data.NAVBAR_DATA} header={data.HEADER} />

<main>
	<slot></slot>
</main>
<svelte:window on:scroll={onScroll} />