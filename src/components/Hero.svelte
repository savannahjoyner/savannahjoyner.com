<script>

  import Card from '../components/Card.svelte';
  import ProjectGrid from "../components/ProjectGrid.svelte";
</script>

<style>
	section {
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.wrapper {
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	h1 {
		color: #000;
	font-size: 44px;
	margin-top: 40px;
	text-align: left;
	}

	.alternate {
		background-color: #fff;
		color: #000;
	}

	p {
		font-size: 1.3em;
	}

	.placeholder {
		height: 60vh;
		width: 20vw;
    border-radius: 1 rem;
		background: #C4C4C4;
		filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
	}

	.buffer {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		h1 {
			font-size: 10vw;
		}

		p {
			font-size: 1.1em;
		}

		.wrapper {
			width: 90%;
			flex-direction: column-reverse;
			align-items: space-between;
		}

		div {
			width: 90%;
		}

		.placeholder {
			height: 70vh;
			width: 70vw;
       border-radius: 1 rem;
			background: #C4C4C4;
		}

		.alternate {
			background-color: #fff;
			color: #000;
		}

		.buffer {
			display: block;
			padding: 3vh;
		}

		.main-disc {
			width: 90%;
			padding-top: 2vh;
			align-items: center;
			justify-content: center;
		}
	}

  /*Vertical Sliding*/
  .slidingVertical{
    display: inline;
    text-indent: 8px;
  }
  .slidingVertical span{
    animation: topToBottom 15.0s linear infinite 0s;
    -ms-animation: topToBottom 15.0s linear infinite 0s;
    -webkit-animation: topToBottom 15.0s linear infinite 0s;
    color: #669966;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  .slidingVertical span:nth-child(2){
    animation-delay: 2.5s;
    -ms-animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
  }
  .slidingVertical span:nth-child(3){
    animation-delay: 5s;
    -ms-animation-delay: 5s;
    -webkit-animation-delay: 5s;
  }
  .slidingVertical span:nth-child(4){
    animation-delay: 7.5s;
    -ms-animation-delay: 7.5s;
    -webkit-animation-delay: 7.5s;
  }
  .slidingVertical span:nth-child(5){
    animation-delay: 10s;
    -ms-animation-delay: 10s;
    -webkit-animation-delay: 10s;
  }
  .slidingVertical span:nth-child(6){
    animation-delay: 12.5s;
    -ms-animation-delay: 12.5s;
    -webkit-animation-delay: 12.5s;
  }

  /*topToBottom Animation*/
  @-moz-keyframes topToBottom{
    0% { opacity: 0; }
    5% { opacity: 0; -moz-transform: translateY(-50px); }
    10% { opacity: 1; -moz-transform: translateY(0px); }
    25% { opacity: 1; -moz-transform: translateY(0px); }
    30% { opacity: 0; -moz-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
  }
  @-webkit-keyframes topToBottom{
    0% { opacity: 0; }
    5% { opacity: 0; -webkit-transform: translateY(-50px); }
    10% { opacity: 1; -webkit-transform: translateY(0px); }
    25% { opacity: 1; -webkit-transform: translateY(0px); }
    30% { opacity: 0; -webkit-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
  }
  @-ms-keyframes topToBottom{
    0% { opacity: 0; }
    5% { opacity: 0; -ms-transform: translateY(-50px); }
    10% { opacity: 1; -ms-transform: translateY(0px); }
    25% { opacity: 1; -ms-transform: translateY(0px); }
    30% { opacity: 0; -ms-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
  }
</style>

	<section class=alternate>
			<div class="wrapper">
				<div>
					<h1>Savannah Joyner</h1>
					<h2 class="sentence"> 
            <div class="slidingVertical">
              <span>UX Designer</span>
              <span>Amatuer Kickboxer</span>
              <span>UX Researcher</span>
              <span>Goofball</span>
              <span>Front End Developer</span>
              <span>Bagel Connoisseur</span>
            </div>
					</h2>
				</div>
				<div class="buffer">&nbsp</div>
				<img class="placeholder" src="/heroimage.png" alt="Savannah Joyner"/>
			</div>
		</section>