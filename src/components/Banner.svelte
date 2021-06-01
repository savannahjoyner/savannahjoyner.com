
<script> 
let bgImage = "https://blush.design/api/download?shareUri=kOETpr29vTqBQsp0&w=800&h=800&fm=png";
let bggImage = 'https://blush.design/api/download?shareUri=HMhuBUOBW&c=Skin_0%7Ef7d3bb&w=800&h=800&fm=png';
let squ = "https://blush.design/api/download?shareUri=I2R3x9gr7&w=800&h=800&fm=png";
 export let bannerData = {};
 const { HEADING, INTRO, DESCRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>
<svelte:head> <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Cormorant+Garamond:wght@300;400&family=Crimson+Text&family=EB+Garamond&family=Raleway:wght@100;200;300;400&display=swap" rel="stylesheet"> 
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section class="main-bgcolor" id= "banner">
  <div class="container" style="margin-top: 10%; margin-bottom:17%;">
    
      <div class="text-align-center" style="margin-top:30px">
        <h1 style=""> Hello! I'm Savannah Joyner. &nbsp;
          <div class="slidingVertical">
            <span> I'm a UX Designer.</span>
            <span> I'm an Amatuer Kickboxer.</span>
            <span> I'm a UX Researcher.</span>
            <span> I'm a Goofball.</span>
            <span> I'm a Front End Developer.</span>
            <span> I'm a Bagel Connoisseur.</span>
          </div>
         </h1>
      
        <!-- <p>{DECRIPTION}</p> -->
        <!-- <h1 > 
          <div class="slidingVertical">
            <span>UX Designer</span>
            <span>Amatuer Kickboxer</span>
            <span>UX Researcher</span>
            <span>Goofball</span>
            <span>Front End Developer</span>
            <span>Bagel Connoisseur</span>
          </div>
        </h1> -->
        <!-- <h3>{INTRO} </h3> -->
      </div>
     
    </div>
 
  <!-- <img src= "images/wave1.png" alt="" class="wave-img" /> -->
</section>

<style>
  
 section {
 /* background-image: url("images/yellow.jpg"); */
 /* padding: 8% 10% 0% 10% ; */
 }
 .image {
  outline:4px solid #050505;
  outline-offset:-80px;
  border: 50px solid transparent;
  border-width:150px 50px 50px 150px;
  margin:-75px 0 0 -75px;
  height: 600px;
  display:flex;
  justify-content: center;

}
 h1 {
  font-family: "Nunito", sans-serif;
  font-size: 36px;
 color: #000;
 font-weight: 500;
 line-height: 2;
 font-kerning: unset;
 margin-left: 10%;
 /* margin-left:10%; */
 text-align: auto;
 }
 h2 {
font-family: 'Open Sans', sans-serif;
 font-size: 20px;
 font-weight: 500;
 text-indent: 2px;
 text-transform: none;
 }
  h3 {
font-family: 'Open Sans', sans-serif;
 font-size: 15px;
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
 margin-top: 30px;
 }
 img {
     width: 100%;
    }
 
  /*Vertical Sliding*/
  .slidingVertical{
    display: inline;
    text-indent: 0px;
    padding-top: 5px;
  }
  .slidingVertical span{
    animation: topToBottom 15.0s linear infinite 0s;
    -ms-animation: topToBottom 15.0s linear infinite 0s;
    -webkit-animation: topToBottom 15.0s linear infinite 0s;
    color: #000;
    background-color: #B3DADC;
    opacity: 0;
    padding-right:6px;
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
  @media screen and (max-width: 991px) {
    h1 {
      font-family: "Nunito", sans-serif;
    font-size: 30px;
    color: #000;
    font-weight: 500;
    line-height: auto;
    font-kerning: unset;
    margin-left: 5%;
    /* margin-left:10%; */
    text-align: auto;
    }
 }

  
  @media screen and (max-width: 767px) {
    h1 {
      font-family: "Nunito", sans-serif;
    font-size: 24px;
    color: #000;
    font-weight: 500;
    line-height: auto;
    font-kerning: unset;
    margin-left: 5%;
    /* margin-left:10%; */
    text-align: auto;
    }
  }
  @media screen and (max-width: 479px) {
    h1 {
      font-family: "Nunito", sans-serif;
    font-size: 20px;
    color: #000;
    font-weight: 500;
    line-height: auto;
    font-kerning: unset;
    margin-left: 5%;
    /* margin-left:10%; */
    text-align: auto;
    }
  }
</style>