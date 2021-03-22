
<script>
 export let socialData = {};
 const { IMAGES_LIST, HEADING } = socialData;
</script>

<section id="social-media" class="section light-color">
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
 </div>
</section>

<style>
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
</style>