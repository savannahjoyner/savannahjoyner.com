<script>
  import Saos from "saos";
  import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<svelte:head>
  <title>Fitness Village</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>



<header>
  <div style="background-color: #afd2e7">
    <img
      class="page-cover-image"
      src="../images/fitness_cover.png"
      alt=""
      style="width:75%; object-position:center 27.810000000000002%"
    />
  </div>
</header>

<h1 class="header" style="">Fitness Village</h1>
<div class="detail-grid grid-12" style="">
  <h1 class="heading-small">OVERVIEW</h1>
  <h1 class="heading-small">ROLE</h1>
  <div class="text-block">
    This prototype was the outcome of a semester long project within the course
    Education Technology. While creating this project, my team
    utilized research and design processes to brainstorm, create, and
    test a learning interaction guided by our SWBAT(Students will be able to) learning goals. I led Product Design while my teammates handled
    Research and Testing.
  </div>
  <div class="text-block">
    <p><strong>Product Designer</strong></p>
    <br />
    UI Design, UX Design, Prototyping, User Testing
    <br />
    <br />
    <br />
    <h1 class="heading-small">TOOLS USED</h1>
    Figma, Miro, Microsoft Teams
  </div>
</div>
<div class="grid-12" style="padding-bottom: 100px;">
  <h1 class="heading-small">CHALLENGE</h1>
  <p class="text-block">We were to create an learning app that met the following requirements. Our team was focused on keeping children physically active, while their lives had suddenly required most of their time to be spent inside on their devices.<br>
  </p>
  <img
    
      src="../images/fitnesschallenge.png"
      alt=""
      style="width:45%; "
    />
   
   
</div>

<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Discovery Phase</h1>
    <p><strong>Reviewing Literature and Existing Technology<br/></strong></p>
    <p> <a href="../images/FitnessVillage_LitReview.pdf"><p class="link"> Download Literature Review</p></a></p>
    <br>
    <br>
    <p class="text-block">
      We conducted a literature review of relevant articles as well as comparable educational technologies. Through
this review, we strengthened our understanding of the learning environment, the target learners, and the ways to
promote transfer. We synthesized several positive elements to include and negative elements to avoid in our own
educational technology.

<br></p>
    
    <br /><div class="column-list">
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/sworkit.png"
            ><img
              style="width:512px"
              src="../images/sworkit.png"
              alt=""
            /></a
          >
          <figcaption>Sworkit Kids</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/fitbit.png"
            ><img
              style="width:512px"
              src="../images/fitbit.png"
              alt=""
            /></a
          >
          <figcaption>Fitbit Coach</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/GoNoodle.png"
            ><img
              style="width:512px"
              src="../images/GoNoodle.png"
              alt=""
            /></a
          >
          <figcaption>GoNoodle</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/habitz.png"
            ><img
              style="width:512px"
              src="../images/habitz.png"
              alt=""
            /></a
          >
          <figcaption>Habitz</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/sweatdeck.jpg"
            ><img
              style="width:512px"
              src="../images/sweatdeck.jpg"
              alt=""
            /></a
          >
          <figcaption>Sweat Deck</figcaption>
        </figure>
      </div>
    </div>
    <br>
  <p><strong> Top Takeaways:</strong></p>
<ul role="list" class="list">
  <li>We will strive to create a platform that is customizable. Allowing creativity makes the platform more enjoyable, and 
therefore, make the user more inclined to use it.</li>
  <li>
    Our app will include feedback. Feedback is defined as any “informative or evaluative” description of the user’s behavior, and it has been shown 
    to increase user self-efficacy, motivation, and learning. 
  </li>
  <li>Integration of parent and children's interactions into one platform could create more effective learning as children will need support outside of technology to maintain healthy lifestyles.</li>
  <li> Users may feel more supported and encouraged if they are able to engage in a 
    broader community or keep up with other children.   </li>

</ul>
  </div>
</div>

<div class="project-detail ">
  <h1 class="section-header">Our Solution</h1>
  <p class="text-block">
    In 2020, Covid-19 is a global pandemic that has uprooted and rewritten most parts of our lives. Our team is looking to offer
an alternative solution to fill the gap in children’s physical education. Within this project, we will design an app
that addresses the issue of online learning and hopefully provide interesting and engaging ways to combat
sedentary behavior in children even after schools return to normal. In this context, we seek to create an online platform to enable children to stay physically and mentally healthy. 
This will take the form of a phone app geared toward elementary school children in grades two through five.  The app will create an immersive, virtual community, modeled after a small village or environment, in which AIs and potentially real-life users of the app are represented visually as customizable human avatars. Upon opening the app, the user will enter their age, height, and weight and customize their own avatar. 
They can then explore the village community and chat with the NPCs by tapping around the screen to move their avatar. 
While completing the activities, the phone’s front-facing camera activates in order to record the child’s movements, and the avatar onscreen reflects the child’s motions.
  </p>
  <br />
  <br />
  <p><strong>SWBAT Goals<br /></strong></p>
  <p class="text-block">Students will be able to...</p>
  <ul role="list" class="list" style="margin-top:0px">
    <li>
      Describe the importance of physical activity in creating healthy practices
    </li>
    <li>Accurately move their body according to instruction</li>
    <li>
      Demonstrate spatial awareness
    </li>
    <li>
      Describe the importance of emotional health in creating healthy practices
    </li>
    <li>
      Regulate their emotional state more easily
    </li>
  </ul>
  <br>
  <br>
  <p><strong>App Activities<br /></strong></p>
  <a href="../images/fitness_activities.png"
  ><img
    style="width:auto"
    src="../images/fitness_activities.png"
    alt=""
  /></a
>


  <br />
</div>

<br />
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Prototyping and Peer Feedback</h1>
    <br />
    <p class="text-block">
     We used Figma for our prototyping. After completing our initial version of our prototype we created a video in order to get feedback from our peers.
    </p>
    <br>
    <br>
    <p> Watch Prototype Video: </p>
    <a
      class="link"
      href="https://youtu.be/CPorVIw3ov4"
      download
    >
      <p class="link">https://youtu.be/CPorVIw3ov4</p>
    </a>
    <br />
    <br />
    <p><strong>Feedback Driven Improvements:</strong></p>
    <ul role="list" class="list">
      <li>
        Delete sign-up/log-in procedure as it may be too complicated for young children and not necessarily required for our purposes. Now users can simply download the app, create their avatar, and start playing.   
      </li>
      <li>
        Create additional screen before the game warning the user to clear the space around them in order to move around adequately during the activities. This will ensure proper use and safety.
  
      </li>
      <li>
        Add interactive villagers to the village map. Players can interact with these villagers by talking to them, which would prompt the child to pick an activity they haven’t in a while, or by gifting them an item in their inventory, which would change their appearance on the map.
        This adds additional incentivization to earning gold coins.
      </li>
    </ul>
    <br />
    <br />
    <br />
  </div>
</div>
<div class="project-detail">
  <h1 class="section-header">User Testing</h1>
  <p class="text-block">
    With a WOZ style approach, we were able to have our website evaluated from
    the actual users' point of views while also curating the intended interactions as the
    wizard.
  </p>
  <br />
  <br />
  <p><strong>Process</strong></p>
  <br />
  <p class="text-block">
    (12 participants)<br />
    We tested our prototype with elementary school children. Some of these participants were family members or connections through family members. 
    The rest were children known from babysitting.
    The sessions were done entirely virtually on a Zoom call using a Wizard of Oz style of testing, usually with a parent supervising in the background. 
  </p>
  <br />
  <br />
  <p><strong>Implementation Plan</strong></p>
  <br>
  <a href="../images/fitnessplan.png"
  ><img
    style="width:50%"
    src="../images/fitnessplan.png"
    alt=""
  /></a>
  <br />
  <br />
  <p><strong>Rationale</strong></p>
  <br />
  <p class="text-block">
    Due to the limitations of our prototype and having to conduct the testing over Zoom, 
    this approach allowed us to control interactions behind the scenes while still presenting a fluid user experience.
  </p>
  <br />
  <br />
  
  <p><strong>See Testing Report Here:</strong></p>
  <a href="../images/FinalReport.pdf"><p>TestingReport.pdf</p></a>
  <br />

 
</div>
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Final Prototype</h1>
    <p class="text-block">
      I created this prototype using Figma. As with any prototyping platform,
      there are some limitiations in interactions.
    </p>
    <br />
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzHxyFpjyyGg2lg4gQIBGdL%2FGITPhysical%3Fnode-id%3D0%253A1" allowfullscreen title="Fitness Village Prototype"></iframe>
   <br>
    <a
      class="link"
      href="https://www.figma.com/file/zHxyFpjyyGg2lg4gQIBGdL/GITPhysical?node-id=0%3A1"
      download
    >
      <p class="link">https://www.figma.com/file/zHxyFpjyyGg2lg4gQIBGdL/GITPhysical?node-id=0%3A1</p>
    </a>
    <div class="column-list">
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/userinfo.png"
            ><img
              style="width:512px"
              src="../images/userinfo.png"
              alt=""
            /></a
          >
          <figcaption>User Info Input Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/AvatarDesign.png"
            ><img
              style="width:512px"
              src="../images/AvatarDesign.png"
              alt=""
            /></a
          >
          <figcaption>Avatar Creation Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/landing.png"
            ><img
              style="width:512px"
              src="../images/landing.png"
              alt=""
            /></a
          >
          <figcaption>User Home Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/VillageCenter.png"
            ><img
              style="width:512px"
              src="../images/VillageCenter.png"
              alt=""
            /></a
          >
          <figcaption>Village Map Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/LogGame.png"
            ><img
              style="width:512px"
              src="../images/LogGame.png"
              alt=""
            /></a
          >
          <figcaption>Log Jump Game Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/Shop.png"
            ><img
              style="width:512px"
              src="../images/Shop.png"
              alt=""
            /></a
          >
          <figcaption>In App Store Screen</figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>
<br />
<div class="project-detail">
  <h1 class="section-header">Reflection</h1>
  <p class="text-block">
   This project was really fun to create. As I am usually the UX designer rather than a graphic designer in most of my projects, it was nice to flex that muscle and I am proud of the results.
   The graphics of the avatar and the idea of navigating a village are the strongest points of our design. The idea of
immersion in “another world” was a source of excitement to all of our participants.
<br>
<br> If this app were to be built, the biggest challenge we may
face is coming up with enough different activities to keep students engaged while exercising. After all, there are only
so many different real-life scenarios in which legitimate exercise movements, such as a squat or lunge, might occur.
Our other weakness is in the actual mechanics of seeing the user’s movements — it is unclear whether a phone’s frontfacing camera would be sufficient or if a wearable device may be necessary, which would unfortunately create a
barrier to entry and limit our audience.
<br>
<br>
    <span class="highlight-full"
      >Overall, I enjoyed creating a concept that could be helpful in the midst of the pandemic. This course was entirely online, so as we created, we often felt the pains of this sedentary work. Our passions for fitness allowed us to create this innovative concept in hopes of helping children live more active lifestyles </span
    > 
  </p>
  <p class="" />
  <br />
  <br />
</div>

<Social socialData={data.SOCIAL_DATA} />

<style>
  b,
  strong {
    font-family: "Lato", sans-serif;
    font-weight: bolder;
    font-size: 16px;
    line-height: 36px;
    font-weight: 800;
  }
  .list {
    margin-top: 20px;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    line-height: 36px;
    font-weight: 350;
  }

  ul {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 40px;
    list-style-type: disc;
  }
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  li {
    margin-bottom: 10px;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .section-header {
    margin: 0px 0px 10px;
    font-family: "Source Serif Pro", serif;
    font-size: 36px;
    line-height: 62px;
    font-weight: 600;
    margin: 0.67em 0;
    color: #1a1b1f;
  }
  .project-detail {
    margin: 0px 300px;
    padding-top: 60px;
    padding-bottom: 60px;
    font-family: "Nunito", sans-serif;
    font-size: 14px;
  }
  .project-detail a {
    font-size: 0.8rem;
  }

  .project-detail img {
    width: 100%;
  }

  .project-detail img {
    margin: 1em 0;
  }
  .link {
    color: #473198;
    padding: none;
    text-align: center;
    font-size: 16px;
  }

  .link:hover {
    cursor: pointer;
    color: #86bbbd;
  }
  .alt-bgcolor {
    background-color: #dfebed;
  }
  p {
    display: inline;
    margin-top: 0px;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    line-height: 36px;
    font-weight: 350;
  }
  .text-block {
    display: inline;
    margin-top: 0px;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    line-height: 36px;
    font-weight: 350;
    color: #1a1b1f;
  }
  .heading-small {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 0px;
    font-family: "Lato", sans-serif;
    color: #757678;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    font-weight: 300;
  }
  .detail-grid {
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  }
  .grid-12 {
    margin-top: 60px;
    margin-right: 300px;
    margin-left: 300px;
    grid-column-gap: 120px;
    grid-row-gap: 0px;
    -ms-grid-columns: 1.5fr 1fr;
    grid-template-columns: 1.5fr 1fr;
  }
  .row {
    display: -ms-flexbox; /* IE 10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE 10 */
    flex-wrap: wrap;
    justify-content: left;
    margin: 0% 10%;
    padding: 5px;
  }
  .column {
    -ms-flex: 50%; /* IE 10 */
    flex: 50%;
    padding: 0 10px;
    justify-content: center;
  }
  .header {
    display: inline-block;
    margin-top: 40px;
    margin-bottom: 0px;
    margin-left: 300px;
    padding-top: 0px;
    font-family: "Lato", sans-serif;
    color: #1a1b1d;
    font-size: 48px;
    line-height: 56px;
    font-weight: 600;
    text-align: left;
    text-transform: none;
  }

  h1 {
    font-family: "Proza Libre", sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 5% 0%;
  }

  .callout {
    border-radius: 3px;
    padding: 1rem;
  }

  figure {
    margin: 1.25em 0;
    page-break-inside: avoid;
  }

  figcaption {
    color: black;
    opacity: 0.5;
    font-size: 85%;
    margin-top: 0.5em;
  }

  img {
    max-width: 100%;
  }

  .column-list {
    display: flex;
    justify-content: space-between;
  }

  .column:first-child {
    padding-left: 0;
  }

  .column:last-child {
    padding-right: 0;
  }
  .page-cover-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }

  .image {
    border: none;
    margin: 1.5em 0;
    padding: 0;
    border-radius: 0;
    text-align: center;
  }

  img {
    width: 100%; /* need to overwrite inline dimensions */
    height: auto;
  }

  .highlight-full {
    background: #c8e0e2;

    padding: 0.2em;
    color: #222;
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
      font-size: 48px;
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
      font-size: 28px;
      line-height: 64px;
    }
    .section-header {
      font-size: 24px;
      line-height: 42px;
    }
    .project-detail {
      margin-right: 20px;
      margin-left: 20px;
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
      font-size: 24px;
      line-height: 30px;
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
</style>
