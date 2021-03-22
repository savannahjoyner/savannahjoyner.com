
<script>
  import Saos from 'saos';
 export let projectData = {};
 const { HEADING, ALL_PROJECTS, PROJECT_LIST } = projectData;


</script>

 
 <div id= "projects" class="padding">&nbsp</div>
 <Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
 top={250}
 bottom={250}>
 <section>
   <div class="wrapper">
     <div>
       <h1 class= "padding">Food Facts</h1>
       <h2 class="margin-bottom padding"> 
        Addressing food insecurity with compelling data visualizations.
       </h2>
       <a class="effect1" href="fooddes">
        VIEW CASE STUDY
        <span class="bg"></span>
      </a>
     </div>
     <div class="buffer">&nbsp</div>
     <img class="placeholder" src=images/dataviz_mock.png alt="Data Viz Mockup"/>
     
   </div>
 </section>
 </Saos>
 <Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
 top={250}
 bottom={250}>
 <section class="alternate">
   <div class="wrapper reverse">
     <div>
       <h1 class="padding">Atlanta Votes</h1>
       <h2 class="margin-bottom padding"> 
        How Atlanta can change politics (Spoiler, we did it).
       </h2>
       <a class="effect1" href="vote">
        VIEW CASE STUDY
        <span class="bg"></span>
      </a>
     </div>
     <div class="buffer">&nbsp</div>
     <img class="placeholder" src=images/vote_mock.png alt="project mockup"/>
   </div>
 </section>
 </Saos>
 <Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
 top={250}
 bottom={250}>
 <section>
   <div class="wrapper">
     <div>
       <h1 class="padding">Healthcare Abroad</h1>
       <h2 class="margin-bottom padding"> 
        For students seeking healthcare while in a foreign country.
       </h2>
       <a class="effect1" href="healthcare">
        VIEW CASE STUDY
        <span class="bg"></span>
      </a>
     </div>
     <div class="buffer">&nbsp</div>
     
     <img class="placeholder" src=images/healthcare_mock.png alt="Healthcare Mockup"/>
    
   </div>
 </section>
 </Saos>
 <Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
 top={250}
 bottom={250}>
 <section class="alternate">
   <div class="wrapper reverse">
     <div>
       <h1 class="padding">CFM Sustainablity</h1>
       <h2 class="margin-bottom padding"> 
        How Community Farmer's Market promote and increase their sustianable practices.
       </h2>
       
       <a class="effect1" href="cfm">
        VIEW CASE STUDY
        <span class="bg"></span>
      </a>

     </div>
     <div class="buffer">&nbsp</div>
     <img class="placeholder" src=images/cfm_mock.png alt="Georgia Food Deserts"/>
   </div>
 </section>
 </Saos>




<style>

.effect1 {
  color: #222;
  text-decoration: none;
  font-family:'Open Sans', sans-serif;
 font-size: 12px;
 font-weight: 400;
 text-transform: none;
  position: relative;
  padding: 20px 60px 20px 20px;

  -webkit-transition: all 0.3s;

  -o-transition: all 0.3s;

  transition: all 0.3s;

  -webkit-transform: scale(3);

      -ms-transform: scale(3);

          transform: scale(3); /*change scale(3) to scale(1)*/
}

.effect1 .bg {
  background: #EBDDD0;
  width: 30px;
  height: 2px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1px;
  z-index: -1;

  -webkit-transition: all 0.3s;

  -o-transition: all 0.3s;

  transition: all 0.3s;
}

.effect1:hover {
  padding-right: 20px;
  color: #fff;
}

.effect1:hover .bg {
  height: 100%;
  width: 100%;
  -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
          transform: translate(0, -50%);
}

.effect1 .bg:before, .effect1 .bg:after {
  content: '';
  height: 2px;
  width: 10px;
  background: #EBDDD0;
  position: absolute;
  right: -2px;      
  -webkit-transition: all 0.3s;      
  -o-transition: all 0.3s;      
  transition: all 0.3s;
}

.effect1 .bg:before {
  bottom: 3px;
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
}
.effect1 .bg:after{
  top: 3px;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.effect1:hover .bg:before,
.effect1:hover .bg:after{
  right: 0;
}

.effect1:hover .bg:before{
  bottom: 6px;
}

.effect1:hover .bg:after{
  top: 6px;
} 
.padding {
  padding-right: 20px;
  padding-left:20px;
}

  .title {
    font-family: 'Proza Libre', sans-serif;
    display: flex;
    margin-top: 40px;
    justify-content: center;
  }

	section {
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bg-image {
		background-image: url("/homepage-hero-1.png");
		background-repeat: no-repeat;
		background-position: right;
	}

	.wrapper {
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	div {
		width: 30vw;
	}

	.alternate-text {
		color: #226dff;
	}

	.alternate {
		background-color: #fafafa;
		color: #000;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	p {
    font-family: sans-serif;
		font-size: 1.3em;
	}

	.placeholder {
		height: 45vh;
		width: 30vw;
		background: #C4C4C4;
		filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
	}

	.main-disc {
		width: 65%;
		min-height: 85vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
	}

	.buffer {
		display: none;
	}

	.card-container {
		display: flex;
	}

	.normal {
		width: 100%;
	}
  .margin-bottom {
    margin-bottom: 70px;
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
			height: 30vh;
			width: 70vw;
			background: #C4C4C4;
		}

		.alternate {
			background-color: rgb(238, 208, 208);
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

		.card-container {
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}

		.bg-image {
			background: none;
		}
	}
  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: .5;
    }
    100% {
      transform: scale(.65);
      opacity: 1;
    }
  }
  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes -global-slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }

  a:hover {
  text-decoration: none;
  }
  a.projects {
    width: 400px;
    margin: auto;
    border-color: black;
    border-width: 5px;
    font-weight: unset;
    display: flex;
    flex-direction: column;
  }
  .img-container {
    width: 340px;
    height: 243px;
    overflow: hidden;
  }
  a.projects:hover img {
    transform: scale(1.2);
  }
  img {
    width: inherit;
    height: inherit;
    transition: transform 0.2s;
  }
  h1 {
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 400;
 font-size: 40px;
 font-kerning: unset;
 margin-top: 100px;
 }
 h2 {
  font-family: 'Proza Libre', sans-serif;
 font-size: 16px;
 font-weight: 400;
 text-transform: none;
 }
  h1,
  a.projects:hover h1 {
    color: black;
  }
  p {
    max-width: 350px;
    margin-bottom: 30px;
    color: black;
  }
</style>