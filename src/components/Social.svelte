
<script>
 export let socialData = {};
 const { IMAGES_LIST, HEADING } = socialData;
</script>

<section id="social-media" class="section" style="background-color: #B3DADC; margin-top: 100px">
 
 <div class="container text-center">
 <h2 class="heading">{HEADING}</h2>
 <div class="social-icons section-body">
 {#each IMAGES_LIST as list}
 <a href= {list.URL}
 target=" _blank ">
 <img src={list.IMAGE} alt="Social media" />
 </a>
 {/each}
 </div> 
 <a class="link" href="SavannahJoyner_Resume.pdf" download>
    <h3 class="link">
     Download Resume
    </h3>
  </a>
 </div>
</section>

<style>
  .link {
  color: #000;
  padding: none;
  text-align: center;
  font-size: 15px;
}

.link:hover{
  cursor: pointer;
  color: #473198;
}
  .heading {
    font-family: 'Proza Libre', sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 15px;
    margin-top: 30px;
  }
 .social-icons img {
 width: 30px;
 margin: 10px 20px 10px 20px;
 transition: 0.5s;
 }
 .social-icons a:hover img {
 transform: translateY(-10px);
 }
 a:hover {
 text-decoration: none;
 }
</style>