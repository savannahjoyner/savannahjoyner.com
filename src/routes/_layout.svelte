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

<Navbar {scrolled} navlists={data.NAVBAR_DATA} header={data.HEADER} />

<main>
	<slot></slot>
</main>
<svelte:window on:scroll={onScroll} />