<script>
	import Navbar from '../components/Navbar.svelte';
  import DATA from "../DATA/data.js";
	let scrolled = false

	const onScroll = ({ target: { documentElement, body } }) => {
		if (body.scrollTop > 0 || documentElement.scrollTop > 0) {
			scrolled = true
		} else {
			scrolled = false
		}
	}
</script>

<Navbar {scrolled} navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />

<main>
	<slot></slot>
</main>
<svelte:window on:scroll={onScroll} />