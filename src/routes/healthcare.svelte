<script>
  import Saos from "saos";
  import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<svelte:head>
  <title>Healthcare Abroad</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>



<header>
  <div style="background-color:#bfc8ff">
    <img
      class="page-cover-image"
      src="../images/healthcare_mock.jpg"
      alt=""
      style="width:45%; object-position:center 27.810000000000002%"
    />
  </div>
</header>

<h1 class="header" style="">Seeking Healthcare Abroad</h1>
<div class="detail-grid grid-12" style="">
  <h1 class="heading-small">OVERVIEW</h1>
  <h1 class="heading-small">ROLE</h1>
  <div class="text-block">
    This project was the outcome of a semester long project within the course
    User Interface Design. While creating this project, my team
    utilized formal interaction design processes to brainstorm, map, create, iterate upon and
    test our product. 
    <br />
    <br />
    This project was very research and process heavy in an effort to fully assess user needs and experience.
     Much of the semester was spent refining our goals and tweaking our designs and assumptions about the applications uses. 
     This process allowed us to identify a need that has not been previously addressed by any technologies. 
  </div>
  <div class="text-block">
    <p><strong>UX Researcher</strong></p>
    <br />
    User Research, User Testing
    <br />
    <br />
    <br />
    <h1 class="heading-small">TOOLS USED</h1>
    Figma, Miro, Indesign, Qualtrics
  </div>
</div>
<div class="grid-12" style="padding-bottom: 100px;">
  <h1 class="heading-small">CHALLENGE</h1>
  <p class="text-block">
    Study abroad students are generally unprepared to handle sudden
    medical emergencies. At the time of need, finding a local hospital, clinic, or pharmacy,
    especially for students with chronic and frequent health issues can be difficult. In most cases, extensive research is required but in the case of
    emergency there is little time for this research. Some pressure could be taken off student with a resource
    that consolidates information about local healthcare facilities,
    insurance info, medical history info, common
    diseases/symptoms, etc.
  </p>
</div>
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Discovery Phase</h1>
    <br>
    <p><strong>Task Analysis-Storyboarding<br/></strong></p>
    <p> We created visual storyboards corresponding to 3 tasks performed by the user, that we felt was unsupported by technology. </p>
      <figure class="image">
        <a href="../images/scenario1.png"
          ><img
            style="width:512px"
            src="../images/scenario1.png"
            alt=""
          />
        </a>
        <figcaption> Scenario 1: The user does independent research before leaving for their trip, and they get sick</figcaption>
      </figure>
      <figure class="image">
        <a href="../images/scenario2.png"
          ><img
            style="width:512px"
            src="../images/scenario2.png"
            alt=""
          />
        </a>
        <figcaption>  Scenario 2: Program provides some information about medical care in a handout, and the user
          reads it without doing further research.</figcaption>
      </figure>
      <figure class="image">
        <a href="../images/scenario3.png"
          ><img
            style="width:512px"
            src="../images/scenario3.png"
            alt=""
          />
        </a>
        <figcaption>  Scenario 3: The user does no prior research and attempts to find healthcare in the midst of an
          emergency.</figcaption>
      </figure>
 
    
    <br>
  <br>
    <p><strong>Thinking About the Big Picture<br/></strong></p>
    <p>At this stage we assessed existing systems, media, and research/literature available to learn about solutions that already exist in the world.
      From this research we found that any information or resources for students were spread across many sources and medium. There did not exist any app or website 
      that focused helping users with this issue. 
      Any prior knowledge on healthcare access prior to travelling would have to come from extensive individual research.
    </p>
    <br>
    <br>
    <p><strong>User Reasearch<br/></strong></p>
    <p>We conducted a large qualtrics survey as well as individual interviews in order to fully empathize with and understand users.
    </p>
    <br>
    <figure class="image">
      <a href="../images/healthcaresurvey.png"
      ><img
        style="width:512px"
        src="../images/healthcaresurvey.png"
        alt=""
      />
      </a>
    </figure>
    <figure class="image">
      <a href="../images/qualtrics.png"
        ><img
          style="width:512px"
          src="../images/qualtrics.png"
          alt=""
        />
      </a>
      <figcaption> Qualtrics Survey Method</figcaption>
    </figure>
    <figure class="image">
      <a href="../images/interviews.png"
      ><img
        style="width:512px"
        src="../images/interviews.png"
        alt=""
      />
      </a>
      <figcaption> Interview Method</figcaption>
    </figure>
  <br>
  <br>
    <p><strong>Affinity Mapping<br/></strong></p>
    <p>We reviewed all data as a team and participated in an affinity diagramming exercise. By categorizing these notes, we were able to identify challenges our users face which provided design implications.
      The affinity diagram provided visibility into trends among all key user groups.
    </p><br>
    <br>
    <p>View Miro Board here:</p>
    <a
      class="link"
      href=" https://miro.com/app/board/o9J_krV46jg=/"
      download
    >
      <p class="link"> https://miro.com/app/board/o9J_krV46jg=/</p>
    </a>
  <br>
  <br>
    <p><strong>Brainstorming Solutions<br/></strong></p>
    <p>Using Walt Disney’s Creative Strategy our team took on the roles Dreamer, 
      Realist and then Critic in order to brainstorm innovative but realistic ideas.<br></p>
      <figure class="image">
        <a href="../images/disneycreative.png"
        ><img
          style="width:512px"
          src="../images/disneycreative.png"
          alt=""
        />
        </a>
      </figure>
    <br>
    <p>View Miro Board here:</p>
    <a
      class="link"
      href="https://miro.com/app/board/o9J_kqQX_cw=/"
      download
    >
      <p class="link">https://miro.com/app/board/o9J_kqQX_cw=/</p>
    </a>
    <br>
  </div>
</div>

    



<div class="project-detail ">
  <h1 class="section-header">Low Fidelity Prototypes</h1>
  <p> From our affinity mapping, we found 3 potential solutions for our application. We created low fidelity prototypes
     for each of these solutions in order to better predict and refine their uses.
  <br />
  <br />
  <p><strong>One Stop Shop Healthcare <br /></strong></p>
  <p class="text-block">
    After looking back on our research we realized that the problems our
    respondents had while studying abroad were varied, ranging from finding medicine in
    their local area to trying to figure out how where the hospitals were. The one stop shop
    attempts to cover all bases by providing users a quick and easy way to locate general
    healthcare information in their area. Important information for clinics such as phone
    number and location can quickly be located. Symptoms and treatments of local diseases
    can be easily learned.
  </p>
  <br>
  <br>
  <p>View Prototype here:</p>
  <a
    class="link"
    href=" https://xd.adobe.com/view/ef16ed8c-acc9-43d8-bb6f-99bc8765f294-ba45/
    "
    download
  >
    <p class="link"> https://xd.adobe.com/view/ef16ed8c-acc9-43d8-bb6f-99bc8765f294-ba45/
    </p>
  </a>
  <br>
  <br>
  <p><strong>Medicine Finder<br /></strong></p>
  <p class="text-block">
    During our research, we found that many people had a common struggle when
it came to finding medicine while in a foreign country. Some issues that kept users from
successfully acquiring medicine included difficult navigation to a pharmacy, difference in
types of medicine provided, and language barriers in medicine names. This app makes it
easier for users to locate medicine and pharmacies based on their location and symptoms.
It also gives common english equivalents so that the user can feel comfortable taking
something they recognize.

  </p>
  <br>
  <br>
  <p>View Prototype here:</p>
  <a
    class="link"
    href="  https://xd.adobe.com/view/56213f6e-3850-433c-9ae6-d4548a7fd6b4-0372/

    "
    download
  >
    <p class="link">  https://xd.adobe.com/view/56213f6e-3850-433c-9ae6-d4548a7fd6b4-0372/

    </p>
  </a>
  <br>
  <br>
  <p><strong>Yelp for Healthcare<br /></strong></p>
  <p class="text-block">
      We concluded through our research that students who study abroad are
  generally very unprepared when it comes to dealing with health care and emergency
  issues abroad. Especially when abroad, it is even more difficult to find and locate health
  care services/providers that are best fit for you and closest in proximity. This ‘Yelp’ style
  app makes it easy for the user to simply input their current location and be provided with
  a list of facilities near them with the best reviews and ratings. The user can write their
  own review as well, describing their own experience so future users can also have access
  to this information.
  </p>
  <br>
  <br>
  <p>View Prototype here:</p>
  <a
    class="link"
    href="https://xd.adobe.com/view/83444dae-6e9b-4160-99cd-16817c379f17-d617/screen/4ad1c5ec-118d-4ab3-9055-2f38e5653f3c"
    download
  >
    <p class="link">  https://xd.adobe.com/view/83444dae-6e9b-4160-99cd-16817c379f17-d617/screen/4ad1c5ec-118d-4ab3-9055-2f38e5653f3c

    </p>
  </a> 

 

  </div>

 

<br />
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Implementation and Evaluation</h1>
    <br /> 
    <p><strong> Solution<br /></strong></p>
    <p class="text-block">
     Through an in class feedback session, we were able to recieve tips and suggestions on each of our prototypes. 
     After recieving feedback we found that 70% of students selected One Stop Shop as their prefered app.
     We decided to refine and expand our One Stop Shop application design for our final product. 
    </p>
    <br>
    <br>
    <p><strong> "Within Team" Summative Evaluation<br /></strong></p>
    <p class="text-block">
      Upon the completion of our prototype we conducted a summative evalution in order to find any bugs.
      For our summative evaluation, we conducted a cognitive walkthrough. In order to do this
      we all joined a zoom call. The facilitator (Savannah) provided the other team members with a list
      of tasks they were to emulate while using the prototype. The overarching scenario was that of a
      study abroad student in need of some sort of medical/healthcare information. Several of the tasks
      involved the user being sick and needing to find either a clinic, hospital or pharmacy for medical
      attention. In other tasks, users were looking to plan ahead and find clinics in areas they would be
      travelling or update their information in case of emergency. More simple tasks consisted of basic
      app functionality such as “easily navigate the main menu” or “check and see if insurance
      information is up to date”.
    </p>
    <br>
    <br />
    <figure class="image">
      <a href="../images/walkthrough.png"
      ><img
        style="width:512px"
        src="../images/walkthrough.png"
        alt=""
      />
      </a>
    </figure>
    <br>
    <br>
    <p><strong> Top 5 Changes:</strong></p>
    <ul role="list" class="list">
      <li>Add a feature so that the user can save clinics/hospitals/pharmacies to their profile to
        view later. This would allow for the user to reduce the number of searches that they make
        for a clinic/hospital/pharmacy location.</li>
      <li>
        Add a pharmacy navigation similar to hospitals and clinics. By adding in pharmacies, the
        user is able to access more health information that they might need.
      </li>
      <li>Add more info on clinics (website, rating, etc). By adding in more clinic information, this
        gives users a wider range of options, and it allows for the user to not blindly choose a
        place to receive medical attention.</li>
      <li>Rework main menu language and layout for user clarity (specifically info vs profile
        sections)</li>
      <li>Add more info within the insurance section in case the user needs to access it. By adding
        in more information about insurance, this saves the user time in their searches. The user
        is able to find the information they need in one place.
        </li>
    </ul>
    <br />
</div>
</div>
    

  <div class="project-detail">
    <h1 class="section-header">Final Prototype</h1>
    <p> Link to Prototype: </p>
    <a
      class="link"
      href="https://xd.adobe.com/view/e3979a79-7b84-4e8c-8542-6ad683989da1-b6c4/"
      download
    >
      <p class="link">https://xd.adobe.com/view/e3979a79-7b84-4e8c-8542-6ad683989da1-b6c4/</p>
    </a>
    <br>
    <br>
    <p> Link to Prototype Video: </p>
    <a
      class="link"
      href="https://www.youtube.com/watch?v=OFW4WF1saqo"
      download
    >
      <p class="link">https://www.youtube.com/watch?v=OFW4WF1saqo</p>
    </a>
    <br>
    <div class="column-list">
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/Home (1).png"
            ><img
              style="width:512px"
              src="../images/Home (1).png"
              alt=""
            /></a
          >
          <figcaption>Home Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/info.png"
            ><img
              style="width:512px"
              src="../images/info.png"
              alt=""
            /></a
          >
          <figcaption>Info Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/clinics.png"
            ><img
              style="width:512px"
              src="../images/clinics.png"
              alt=""
            /></a
          >
          <figcaption>Clinics Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/hospitals.png"
            ><img
              style="width:512px"
              src="../images/hospitals.png"
              alt=""
            /></a
          >
          <figcaption>Hospital Screen</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/pharmacies - selection.png"
            ><img
              style="width:512px"
              src="../images/pharmacies - selection.png"
              alt=""
            /></a
          >
          <figcaption>This is the popup after selecting a clinic, hospital, or pharmacy</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/Drawer (from Home).png"
            ><img
              style="width:512px"
              src="../images/Drawer (from Home).png"
              alt=""
            /></a
          >
          <figcaption>The profile drawer can be accessed through any of the five main screens
            The clinics, hospitals, and pharmacies here are the ones the users saved previously</figcaption>
        </figure>
      </div>
    </div>
  </div>

<br />


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
