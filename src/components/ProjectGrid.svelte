<script>
  let sq1 = "https://blush.design/api/download?shareUri=H2pSVTNDv&w=800&h=800&fm=png";
  import Saos from 'saos';
</script>
<style>
img {
  width: 100%; /* need to overwrite inline dimensions */
  height: auto;
}

.grid-container {
  display: grid;
  /* grid-template-columns: auto auto ; */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2em;
  padding-left: 20%;
  padding-right: 20%;
}


/* hover styles */
.location-listing {
  position: relative;
}

.location-image {
  line-height: 0;
  overflow: hidden;
}

.location-image img {
  filter: blur(0px);
  transition: filter 0.3s ease-in;
  transform: scale(1.1);
}

.location-title {
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  text-align:center;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 20px;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  font-family:'Proza Libre', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: white;
  
  /* position the text in t’ middle*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-listing:hover .location-title {
  opacity: 1;
}

.location-listing:hover .location-image img {
  filter: blur(2px);
}


/* for touch screen devices */
@media (hover: none) { 
  .location-title {
    opacity: 1;
  }
  .location-image img {
    filter: blur(2px);
  }
}
 * {
  box-sizing: border-box;
}


/* slide animation */
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
</style>

<!-- <section class="heading" id="projects"> -->
  <!-- <div class="row">
    <img style="width:5% " src="https://blush.design/api/download?shareUri=M5LfaMscZ&w=800&h=800&fm=png" alt=""/>
    <h1 class="header"> Recent Work</h1>
    <img style="width:5%" src="https://blush.design/api/download?shareUri=M5LfaMscZ&w=800&h=800&fm=png" alt=""/>
  </div> -->
<!-- Photo Grid -->
<!-- <Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 top={250}>
<div class="row"> 
  <div class="column">
    <div class="container">
      <img src="/images/cfm_mock.png" alt= "" style="width:100%" />
      <a class="overlay" href=cfm>
        <div class="text">
          <h3 class="padding box">CFM Sustainability</h3>
          <h4 class="margin-bottom padding"> 
           How Community Farmers Market can promote and increase their sustainable practices.
          </h4>
          <a class="effect1" href="cfm">
           VIEW CASE STUDY
           <span class="bg"></span>
         </a>
        </div>
      </a>
    </div>
    <div class="container">
      <img src="/images/dataviz_mock.png" alt= "" style="width:100% ">
      <a class="overlay" href=cfm>
        <div class="text">
          <h3 class="padding box">Food Facts</h3>
          <h4 class="margin-bottom padding"> 
            Addressing food insecurity with compelling data visualizations.
          </h4>
          
          <a class="effect1" href="cfm">
           VIEW CASE STUDY
           <span class="bg"></span>
         </a>
        </div>
      </a>
    </div>
  </div>
  <div class="column">
    <div class="container">
      <img src="/images/healthcare_mock.png" alt= "" style="width:100%">
      <a class="overlay" href=healthcare>
        <div class="text">
          <h3 class="padding box">Healthcare Abroad</h3>
          <h4 class="margin-bottom padding"> 
            For students seeking healthcare while in a foreign country.
          </h4>
          
          <a class="effect1" href="cfm">
           VIEW CASE STUDY
           <span class="bg"></span>
         </a>
        </div>
      </a>
    </div>
    <div class="container">
      <img src="/images/vote_mock.png" alt= "" style="width:100%">
      <a class="overlay" href=vote>
        <div class="text">
          <h3 class="padding box">Atlanta Votes</h3>
          <h4 class="margin-bottom padding"> 
            How Atlanta can change politics (Spoiler, we did it).
          </h4>
          
          <a class="effect1" href="cfm">
           VIEW CASE STUDY
           <span class="bg"></span>
         </a>
        </div>
      </a>
    </div>
  </div>  
</div>
</Saos>
</section> -->

<Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 top={250}>
<div class="child-page-listing">

  <div class="grid-container">

    <article id="3685" class="location-listing">
      <a class="location-title" style=" background: rgba(37, 31, 71, 0.4)" href=healthcare>
        For students seeking healthcare while in a foreign country.</a>
    

      <div class="location-image">
        <a href=healthcare>
            <img width="300" height="169" src=" /images/healthcare_mock.png" alt= "">    </a>
      </div>

    </article>

    <article id="3688" class="location-listing">

      <a class="location-title" style= " background: rgba(213, 87, 56, 0.4);" href=fooddes>
        Addressing food insecurity with compelling data visualizations.          </a>

      <div class="location-image">
        <a href=fooddata>
            <img width="300" height="169" src="/images/dataviz_mock.png" alt= "">    </a>
      </div>

    </article>

    <article id="3691" class="location-listing">

      <a class="location-title" style= " background: rgba(19, 111, 99, 0.4);" href=cfm>
        How Community Farmers Market can promote and increase their sustainable practices.          </a>

      <div class="location-image">
        <a href=cfm>
            <img width="300" height="169" style="height: 100%" src="/images/cfm_mock.png" alt= "">    </a>
      </div>

    </article>

    <article id="3694" class="location-listing">

      <a class="location-title" style="background: rgba(71, 49, 152, 0.4)" href=vote>
        How Atlanta can change politics (Spoiler, we did it).         </a>

      <div class="location-image">
        <a href=cfm>
            <img width="300" height="169" src="/images/vote_mock.png" alt= "">    </a>
      </div>

    </article>

    <article id="3697" class="location-listing">

      <a class="location-title" href=cfm>
        My Personal Porfolio          </a>

      <div class="location-image">
        <a href=cfm>
            <img width="300" height="169" src="/images/cfm_mock.png" alt= "">    </a>
      </div>

    </article>
  </div>
  <!-- end grid container -->

</div>
</Saos>