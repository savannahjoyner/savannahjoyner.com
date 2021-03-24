<script>
  let sq1 = "https://blush.design/api/download?shareUri=H2pSVTNDv&w=800&h=800&fm=png";
  import Saos from 'saos';
</script>
<svelte:head> <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Cormorant+Garamond:wght@300;400&family=Crimson+Text&family=EB+Garamond&family=Raleway:wght@100;200;300;400&display=swap" rel="stylesheet"> 
</svelte:head>
<style>
 * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.heading{
  padding-top: 100px;
}
.header {
  text-align: center;
  padding: 10px;
}

h1 {
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 500;
 font-size: 25px;
 font-kerning: unset;
 }
 h2 {
font-family: 'Open Sans', sans-serif;
 font-size: 18px;
 font-weight: 700;
 text-transform: none;
 }
 h3 {
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 500;
 font-size: 40px;
 font-kerning: unset;
 margin-top: 100px;
 margin-bottom: 20px;
 text-align: left;
 }
 h4 {
 font-family: 'Proza Libre', sans-serif;
 font-size: 12px;
 font-weight: 400;
 text-align: left;
 text-transform: none;
 }
 
 .margin-bottom {
    margin-bottom: 5%;
  }

.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  justify-content: center;
  margin: 0% 10% ;
  padding: 5px;
}


/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 10px;
}

.column img {
  margin-top: 20px;
  vertical-align: middle;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
/* Hover effects */
.container {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #FBFBFF;

}

.container:hover .overlay {
  opacity: 100%;
}

.text {
  color: #000;
  font-size: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* button animation */

.effect1 {
  color: #222;
  text-decoration: none;
  justify-content: left;
  font-family:'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: none;
  position: relative;
  padding: 10px 50px 10px 10px;

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
  color: #000;
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

<section class="heading" id="experience">
  <div class="row">
    <img style="width:5% " src="https://blush.design/api/download?shareUri=g-36HS_ao&w=800&h=800&fm=png" alt=""/>
    <h1 class="header">Experience</h1>
    <img style="width:5%" src="https://blush.design/api/download?shareUri=g-36HS_ao&w=800&h=800&fm=png" alt=""/>
  </div>
<!-- Photo Grid -->
<Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
 top={250}
 bottom={250}>
<div class="row"> 
  <div class="column">
    <div class="container">
      <img src="/images/bog.png" alt= "" style="width:100%">
      <a class="overlay" href=cfm>
        <div class="text">
          <h3 class="padding box">Bits of Good</h3>
          <h4 class="margin-bottom padding"> 
           Front End Developer
          </h4>
          <a class="effect1" href="https://bitsofgood.org/">
           GO TO SITE
           <span class="bg"></span>
         </a>
        </div>
      </a>
    </div>
  </div>
  <div class="column">
    <div class="container">
      <img src="/images/nebo.png" alt= "" style="width:100%">
      <a class="overlay" href=healthcare>
        <div class="text">
          <h3 class="padding box">Nebo</h3>
          <h4 class="margin-bottom padding"> 
           User Experience Intern
          </h4>
          <a class="effect1" href="https://www.neboagency.com/">
           GO TO SITE
           <span class="bg"></span>
         </a>
        </div>
      </a>
    </div>
  </div>  
</div>
</Saos>
</section>