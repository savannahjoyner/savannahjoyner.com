<script>
  let sq1 = "https://blush.design/api/download?shareUri=H2pSVTNDv&w=800&h=800&fm=png";
  import Saos from 'saos';
</script>
<svelte:head> <link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
  rel="stylesheet"
/>
</svelte:head>
<style>
 * {
  box-sizing: border-box;
}
.description {
  display: inline;
    margin-top: 0px;
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    line-height: 36px;
    font-weight: 350;
    color: #1a1b1f;
}
img {
  width: 100%; /* need to overwrite inline dimensions */
  height: auto;
}
.grid-container {
  display: grid;
  /* grid-template-columns: auto auto ; */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2em;
  padding-top: 2em;
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

.description {
  display: inline;
    margin-top: 0px;
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    line-height: 36px;
    font-weight: 350;
    color: #1a1b1f;
}
.project-detail {
    margin: 0px 300px;
    padding-top: 60px;
    padding-bottom: 60px;
    font-family: "Nunito", sans-serif;
    font-size: 14px;
  }

.heading{
  padding-top: 100px;
}
.header {
  display: inline-block;
    margin-top: 40px;
    margin-bottom: 0px;
    
    padding-top: 0px;
    font-family: "Lato", sans-serif;
    color: #1a1b1d;
    font-size: 24px;
    line-height: 56px;
    font-weight: 600;
    text-align: left;
    text-transform: none;
}

h1 {
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 500;
 font-size: 25px;
 font-kerning: unset;
 }
 
 /* h3 {
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 500;
 font-size: 40px;
 font-kerning: unset;
 margin-top: 100px;
 margin-bottom: 20px;
 letter-spacing: 2px;
 text-align: left;
 } */

.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  justify-content: center;
  margin: 0% 10% ;
  padding: 5px;
}
@media screen and (max-width: 991px) {
    .grid-12 {
      margin-top: 40px;
      margin-right: 40px;
      margin-left: 40px;
      grid-column-gap: 60px;
    }
    .header {
      margin-top: 60px;
      margin-right: 40px;
      margin-left: 40px;
      font-size: 18px;
      line-height: 40px;
    }
    .project-detail {
      margin-right: 40px;
      margin-left: 40px;
    }
  }
  @media screen and (max-width: 767px) {
    .grid-12 {
      margin-top: 10px;
      margin-right: 20px;
      margin-left: 20px;
      grid-column-gap: 30px;
    }
    .header {
      margin-top: 40px;
      margin-right: 20px;
      margin-left: 20px;
      font-size: 16px;
      line-height: 40px;
    }
    .section-header {
      font-size: 24px;
      line-height: 42px;
    }
    .project-detail {
      margin-right: 15%;
      margin-left: 15%;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .list {
      padding-left: 20px;
    }
  }
  @media screen and (max-width: 479px) {
    p {
      font-size: 14px;
      line-height: 36px;
    }
    .text-block {
      font-size: 14px;
      line-height: 36px;
    }
    .heading-small {
      font-size: 12px;
    }
    .grid-12 {
      margin-top: 0px;
      grid-column-gap: 20px;
    }
    .header {
      font-size:18px;
      line-height: 15px;
    }
    .section-header {
      font-size: 24px;
      line-height: 30px;
    }
    .project-detail {
      margin-right: 20px;
      margin-left: 20px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .list {
      padding-left: 20px;
      font-size: 14px;
    }
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
    <!-- <img style="width:5%; height:10%" src="https://blush.design/api/download?shareUri=g-36HS_ao&w=800&h=800&fm=png" alt=""/> -->
    <h1 class="header">Experience</h1>
    <!-- <img style="width:5%; height:10%" src="https://blush.design/api/download?shareUri=g-36HS_ao&w=800&h=800&fm=png" alt=""/> -->
  </div>
  
<!-- Photo Grid -->
<Saos
 animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
 top={250}>
 <div class="child-page-listing">

  <div class="grid-container">

    <article id="3685" class="location-listing">
      <a class="location-title" style=" background: rgba(37, 31, 71, 0.4)" href="https://bitsofgood.org/">
       Bits of Good: Front End Developer</a>
    

      <div class="location-image">
        <a href=healthcare>
            <img width="300" height="169" src=" /images/bog.png" alt= "">    </a>
      </div>

    </article>

    <article id="3688" class="location-listing">

      <a class="location-title" style= " background: rgba(213, 87, 56, 0.4);"  href="https://www.neboagency.com/">
        Nebo: User Experience Intern</a>

      <div class="location-image">
        <a href=fooddata>
            <img width="300" height="169" src="/images/nebo.png" alt= "">    </a>
      </div>

    </article>
  </div>  
</div>
<div class="project-detail">
  <h3 class="description">In the Fall of 2019, <b>I held a full time internship as a UX Designer/Researcher</b> for Nebo, a digital marketing agency. In this role,  I learned how to collaborate with a professional interaction design team 
    and refine my skills in design thinking, prototyping, user testing and iterative design. With Nebo’s unique User Experience 
    Optimization team, I had the opportunity to facilitate A/B testing, session recording, and track various analytics on established 
    client sites. From my findings, I made data-informed suggestions to optimize customer journeys and attended key stakeholder 
    meetings where my site mock-ups were pitched and executed. I was fortunate enough to work with Nebo’s various clients 
    on projects in every stage of the design process including brainstorming, site mapping, prototyping, development, Q&A, and 
    send-off. </h3>
  <br>
  <br>
  <h3 class="description"> Since early January 2020, I have been able to unite my interdisciplinary pursuits as a <b> front end developer for Bits of Goods</b>. This GT 
    chapter of Hack4Impact, is devoted to doing good by building sophisticated websites and apps for nonprofits across the 
    country. In this role, I attended a semester-long boot camp covering the essentials of client-side development including CSS, 
    HTML, Javascript, and React. For the last year, I’ve worked alongside designers and developers to build high impact websites 
    using JS frameworks React and Svelte. Here, in the midst of the pandemic, I honed my development/design skills and learned 
    the importance of self-motivation, team unity, and cherishing human connection</h3>
  </div>
</Saos>
</section>