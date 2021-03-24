
<script>
  import Saos from "saos";
  
 export let socialData = {};
 const { IMAGES_LIST, HEADING } = socialData;

</script>

<style>
section {
 padding-top: 5%;
 padding-bottom: 5%;
 }
 .container {
   padding-top: 25%;
 }
 .image {
  outline:4px solid #050505;
  outline-offset:-80px;
  border-radius: 10px;
  border: 50px solid transparent;
  border-width:150px 50px 50px 150px;
  margin:-75px 0 0 -75px;
  height: 600px;
  display:flex;
  justify-content: center;

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
 font-family: 'Proza Libre', sans-serif;
 color: #000;
 font-weight: 400;
 font-size: 40px;
 font-kerning: unset;
 text-transform: none;
 margin-top: 40px;
 }
 
 h3 {
  padding-left: 30px;
  font-family: 'Open Sans', sans-serif;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  text-transform: none;
 }

 p {
  
  font-family: 'Open Sans', sans-serif;
  color: #000;
 font-size: 17px;
 font-weight: 400;
 text-transform: none;
 }

section a {
 text-decoration: none;
 }


*, *:before, *:after {
  box-sizing: inherit;
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
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 10px;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Open Sans', sans-serif;
  border-style: solid;
  border-color: #D55738;
  border-width: 5px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 400;
  text-transform: none;
  cursor: pointer;

}
.card:hover {
  background-color:#D55738;
}

.link{
  color: #86BBBD;
  padding: none;
}

.link:hover{
  cursor: pointer;
  color: #473198;
}

.heading {
    font-family: 'Proza Libre', sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 20px;
  }
 .social-icons img {
 width: 75px;
 transition: 0.5s;
 }
 .social-icons a:hover img {
 transform: translateY(-10px);
 }

a:hover {
  text-decoration: none;
}

.profile-img{
  border-radius: 50%;
  border-style: solid;
  border-width: 20px;
  border-color: #86BBBD;;
  width:100%;
}
@media screen and (max-width: 650px) {
  h1 {
			font-size: 10vw;
		}

		p {
      margin: auto;
			font-size: 1.1em;
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
</style>

  


  
<Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}> 
<div id= "about" >&nbsp</div>
  <section>
    <div class="row">
      <div class="column">
        <img src="images/sav.png" alt="Savannah" class="image">
      </div>
      <div class= "column">
        <div class="container">
          <h1>Hi, I'm Savannah but my friends call me Sav!</h1>
          <h3>I'm a 5th year Interaction Design student at Georgia Tech with developed leadership skills seeking full time employment for May 2021 in UX Design/Research or Product Design for high impact, human centered initiatives.</h3>
          <a class="link" href="SavannahJoyner_Resume.pdf" download>
            <h3 class="link">
              Resume
            </h3>
          </a>
        </div>
      </div>
    </div>
  </section>
  </Saos>




  <div class="row">
    <img style="width:5% " src="https://blush.design/api/download?shareUri=MjwBxVv0h&w=800&h=800&fm=png" alt=""/>
    <h1 class="header">Background</h1>
    <img style="width:5%" src="https://blush.design/api/download?shareUri=MjwBxVv0h&w=800&h=800&fm=png" alt=""/>
  </div>
  <Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
<div class="row">
    <div class="col-md-4">
      <p>Uniting technology with design in the spirit of social impact is my goal as a professional and I have crafted my experience to place myself in environments lending themselves to these interdisciplinary passions.
         In the Fall of 2019, <b>I held a full time internship as a UX Designer/Researcher</b> for Nebo, a digital marketing agency. In this role, I was able to create low fidelity prototypes and wireframes on platforms such as Figma and InVision as well as conduct various forms of user testing and research in order to identify areas of improvement on already established client sites.
        </p>
    </div>
    <div class="col-md-4">
      <p>Since early January 2020, I have worked as a <b>Front End Dev for Bits of Good</b>. Bits of Good, the GT chapter of Hack4Impact, is devoted to doing good by building sophisticated websites and apps for nonprofits across the country. 
        In this role, I have attended a semester long web dev bootcamp and worked alongside designers and developers to build high impact websites. I have also acquired a minor in Leadership Studies and Spanish during my time at Georgia Tech.
      </p>
    </div>
</div>
</Saos>

 
 