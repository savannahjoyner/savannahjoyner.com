
<script> 
 export let bannerData = {};
 const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>
<svelte:head> <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Cormorant+Garamond:wght@300;400&family=Crimson+Text&family=EB+Garamond&family=Raleway:wght@100;200;300;400&display=swap" rel="stylesheet"> 
</svelte:head>
<section class= "main-bgcolor light-color" id= "banner">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <h1>{HEADING}</h1>
        <!-- <p>{DECRIPTION}</p> -->
        <h2> 
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
      <div class= "col-md-6">
        <!-- <img src= "images/unnamed.jpg" alt="" class="img-fluid" /> --> 
      </div>
    </div>
  </div>
  <img src= "images/wave1.png" alt="" class="wave-img" />
</section>

<style>
 section {
 padding-top: 5%;
 }
 h1 {
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 400;
 font-size: 70px;
 font-kerning: unset;
 margin-top: 100px;
 }
 h2 {
font-family: 'Open Sans', sans-serif;
 font-size: 17px;
 font-weight: 500;
 text-transform: uppercase;
 }

.watch-btn {
 margin: auto 20px;
 position: relative;
 top: 8px;
 }
section a {
 text-decoration: none;
 }
.wave-img {
 width: 100%;
 height: auto;
 margin-top: 300px;
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
    color: #000;
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
 
    5% { opacity: 0; -moz-transform: translateY(-20px); }
    10% { opacity: 1; -moz-transform: translateY(0px); }
    25% { opacity: 0; -moz-transform: translateY(0px); }
    
    
  }
  @-webkit-keyframes topToBottom{
    
    5% { opacity: 0; -webkit-transform: translateY(-20px); }
    10% { opacity: 1; -webkit-transform: translateY(0px); }
    25% { opacity: 0; -webkit-transform: translateY(0px); }
    
    
  }
  @-ms-keyframes topToBottom{
   
    5% { opacity: 0; -ms-transform: translateY(-20px); }
    10% { opacity: 1; -ms-transform: translateY(0px); }
    25% { opacity: 0; -ms-transform: translateY(0px); }
    
   
  }
</style>