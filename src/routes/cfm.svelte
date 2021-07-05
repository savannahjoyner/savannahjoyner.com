<script>
  import Saos from "saos";
  import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<svelte:head>
  <title>CFM</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>



<header>
  <div style="background-color: #fff7af">
    <img
      class="page-cover-image"
      src="../images/cfm_mock3.jpg"
      alt=""
      style="width:55%; object-position:center 27.810000000000002%"
    />
  </div>
</header>

<h1 class="header" style="">Community Farmers Market<br> Sustainable Initiative</h1>
<div class="detail-grid grid-12" style="">
  <h1 class="heading-small">OVERVIEW</h1>
  <h1 class="heading-small">ROLE</h1>
  <div class="text-block">
    This project was the outcome of a semester long project within the course
    Principles of Interaction Design. While creating this project, my team
    utilized formal interaction design processes to brainstorm, map, create, and
    test our product. I led UX Design and Research while my teammate handled
    Graphic Design.
    <br />
    <br />
    This was my first project using a formal design process, and though the outcome
    is not my best work, I am proud of what this project taught me and how it has
    shaped my goals and hopes in college and my career.
  </div>
  <div class="text-block">
    <p><strong>UX Designer/Researcher</strong></p>
    <br />
    User Research, Interaction, Prototyping, User Testing
    <br />
    <br />
    <br />
    <h1 class="heading-small">TOOLS USED</h1>
    Balsamiq, Adobe XD, Indesign
  </div>
</div>
<div class="grid-12" style="padding-bottom: 100px;">
  <h1 class="heading-small">CHALLENGE</h1>
  <p class="text-block">
    Community Farmers Market was looking for a way to better market it’s large
    product life cycle. With its extensive reach, it supplies items from farm
    products to vendor prepared goods. Each week these items could be purchased
    at weekend markets, sent to MARTA markets where they are sold for discounted
    prices, or be moved back to compost and returned to farms. Some vendors care
    deeply about sustainable packaging and practices while others aren’t as
    knowledgeable. Our goal was to build an interactive tool to help explain and
    educate about the market from a holistic perspective.
  </p>
</div>

<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">The Process</h1>
    <p class="text-block">
      Using Don Norman's Design Thinking method, our process helped us to more
      fully empathize with and understand our users.
    </p>
    <br />
    <br />
    <img
      src="../images/designprocess.jpg"
      alt=""
      style="object-position:center 27.810000000000002%"
    />
  </div>
</div>

<div class="project-detail ">
  <h1 class="section-header">Empathize and Define</h1>
  <p class="text-block">
    This phase included client conversations, user analysis, persona creation,
    identifying user goals, and brainstorming.
  </p>
  <br />
  <br />
  <p><strong>Personas<br /></strong></p>
  <p class="text-block">
    CFM is looking to communicate to vendors and customers how the market and
    the larger product lifecycle operate while better encouraging vendors to
    commit to certified organic food, locally grown produce, compostable
    packaging, and decreasing food miles.
  </p>

  <div class="row">
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/cfm/persona1.jpg"
          ><img
            style="width:512px"
            src="../images/cfm/persona1.jpg"
            alt=""
          /></a
        >
      </figure>
    </div>
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/cfm/persona2.jpg"
          ><img
            style="width:512px"
            src="../images/cfm/persona2.jpg"
            alt=""
          /></a
        >
      </figure>
    </div>
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/cfm/persona3.jpg"
          ><img
            style="width:512px"
            src="../images/cfm/persona3.jpg"
            alt=""
          /></a
        >
      </figure>
    </div>
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/cfm/persona4.jpg"
          ><img
            style="width:512px"
            src="../images/cfm/persona4.jpg"
            alt=""
          /></a
        >
      </figure>
    </div>
  </div>

  <p><strong> User Goals <br /></strong></p>
  <p class="text-block">
    Identified through storyboarding as well as conversations with client
  </p>
  <br />
  <p class="text-block">Consumer</p>
  <ul role="list" class="list" style="margin-top:0px">
    <li>
      To clearly identify which businesses operate with sustainable practices
    </li>
    <li>To see more transparency from vendors throughout the market</li>
    <li>
      To have a consolidated source to learn about the sustainable practices
      each vendor implements
    </li>
  </ul>
  <p class="text-block">Vendor</p>
  <ul role="list" class="list" style="margin-top:0px">
    <li>
      To celebrate and display their own achievements within sustainability
    </li>
    <li>
      To learn more about how to implement new and better sustainable practices
    </li>
    <li>
      To create a network of vendors committing to sustainability for sharing
      ideas, products, and support
    </li>
  </ul>

  <br />
  <p><strong> Solution<br /></strong></p>
  <p class="text-block">
    We decided to create a resource to engage and educate vendors, consumers,
    and members of the community about sustainability. Our goal was to celebrate
    and award the vendors who have demonstrated sustainable practices based on
    the product life cycle.
  </p>
</div>

<br />
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Ideate and Prototype</h1>
    <br />
    <p><strong>Wireframes/Lo-fi Prototyping:</strong></p>
    <br />
    <p class="text-block">
      We evaluated 6 different execution concepts through various wireframing
      and prototyping tools. Below is the first iteration of what eventually
      become our final product. This prototype centered around the idea of
      utilizing an app to engage the vendors and award them with badges.
    </p>
    <p class="text-block">
      Using Don Norman's Design Thinking method, our process helped us to more
      fully empathize with and understand our users.
    </p>
    <br />
    <br />
    <a href="../images/cfm/cfm_sketch.jpg">
      <img src="../images/cfm/cfm_sketch.jpg" alt="" style="width:auto" />
    </a>
    <br />
    <br />
    <p><strong>⚠️ Speed Bump ⚠️</strong></p>
    <br />
    <p class="text-block">
      After discussing this concept, our client loved the idea of rewarding
      vendors but was reluctant to use technology to do so. We had to divert our
      app&#x27;s focus from a vendor portal towards a more consumer focused
      educational platform to satisfy our client and meet the technological
      requirements of the course.
    </p>
    <br />
    <br />
    <br />
    <p><strong>Medium Fidelity Prototyping</strong></p>
    <br />
    <p class="text-block">
      Our app shifted more towards an educational/informative consumer and
      vendor facing webpage.
    </p>
    <div class="row">
      <div class="column" style="width:auto">
        <figure class="image">
          <a href="../images/cfm/cfm_lofihome.jpg">
            <img
              style="width:auto"
              src="../images/cfm/cfm_lofihome.jpg"
              alt=""
            />
          </a>
        </figure>
      </div>
      <div class="column" style="width:auto">
        <figure class="image">
          <a href="../images/cfm/cfm_lofi2.jpg"
            ><img
              style="width:auto"
              src="../images/cfm/cfm_lofi2.jpg"
              alt=""
            /></a
          >
        </figure>
      </div>
      <div class="column" style="width:auto">
        <figure class="image">
          <a href="../images/cfm/cfm_lofi.jpg"
            ><img
              style="width:auto"
              src="../images/cfm/cfm_lofi.jpg"
              alt=""
            /></a
          >
        </figure>
      </div>
    </div>
  </div>
</div>
<div class="project-detail">
  <h1 class="section-header">Test: Wizard of Oz Method</h1>
  <p class="text-block">
    With a WOZ style approach, we were able to have our website evaluated from
    different vendor and consumer point of views (each participant acting as a
    different persona) while also curating the intended interactions as the
    wizard.
  </p>
  <br />
  <br />
  <p><strong>Process</strong></p>
  <br />
  <p class="text-block">
    (4 student evaluators)<br />
    Design and Computational Media students were paired with one of the above personas.
    They were asked to familiarize themselves with the characteristics, motivations,
    goals, and frustrations of their assigned persona, and were asked to think from
    those perspectives as they were walked through our prototype. Evaluators then
    explained their thought processes, likes/dislikes, and any confusion they may
    have had during the prototype walkthrough.
  </p>
  <br />
  <br />
  <p><strong>Rationale</strong></p>
  <br />
  <p class="text-block">
    We selected this method to discover how our prototype may suit the different
    personas and address their specific goals.
    <br />
    Since the prototype was not fully operational, WOZ testing also allowed us to
    guide the users through the prototype to ensure the most realistic experience
  </p>
  <br />
  <br />
  <p><strong>Key Weaknesses Discovered:</strong></p>
  <ul role="list" class="list">
    <li>Lack of “call to action” or participation element for non-vendors</li>
    <li>
      No troubleshooting, FAQ, help section, or contact information for our less
      tech savvy users
    </li>
    <li>Interactions felt disjointed and non intuitive on certain pages</li>
  </ul>
  <br />

  <p><strong>Improvements to make:</strong></p>
  <ul role="list" class="list">
    <li>
      Implement consistent design elements in terms of color scheme, typography,
      and graphics
    </li>
    <li>
      Re-design the flow of information to intuitively guide users through the
      education process
    </li>
    <li>
      Incorporate a “call to action” or way for the community members to feel
      more engaged in the website and initiative
    </li>
  </ul>
</div>
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Final Prototype</h1>
    <p class="text-block">
      I created this prototype using Adobe XD. As with any prototyping platform,
      there are some limitiations in interactions.
    </p>
    <br />
    <p> Link to view: </p>
    <a
      class="link"
      href="https://xd.adobe.com/view/64e32d98-260a-4e77-acf6-67fdf272d368-31b0/"
      download
    >
      <p class="link">https://xd.adobe.com/view/64e32d98-260a-4e77-acf6-67fdf272d368-31b0/</p>
    </a>
    <div class="column-list">
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/cfm/cfm_icon1.png"
            ><img
              style="width:512px"
              src="../images/cfm/cfm_icon1.png"
              alt=""
            /></a
          >
          <figcaption>Ocean Friendly- Plastic Free</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/cfm/cfm_icon2.png"
            ><img
              style="width:512px"
              src="../images/cfm/cfm_icon2.png"
              alt=""
            /></a
          >
          <figcaption>CFM Sharing</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/cfm/cfm_icon3.png"
            ><img
              style="width:512px"
              src="../images/cfm/cfm_icon3.png"
              alt=""
            /></a
          >
          <figcaption>Fair Trade</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/cfm/cfm_icon4.png"
            ><img
              style="width:512px"
              src="../images/cfm/cfm_icon4.png"
              alt=""
            /></a
          >
          <figcaption>Organic</figcaption>
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/cfm/cfm_icon5.png"
            ><img
              style="width:512px"
              src="../images/cfm/cfm_icon5.png"
              alt=""
            /></a
          >
          <figcaption>Sustainably Farmed Meats</figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>
<br />
<div class="project-detail">
  <h1 class="section-header">Reflection</h1>
  <p class="text-block">
    <span class="highlight-full"
      >My main regret with this project is shifting our design from a vendor
      portal to an educational website.</span
    >
    We made this change after our client advised us against creating technology dependent
    on vendor interaction. In a professional environment, we likely would have had
    access to conversation with vendors and also a much larger time frame. In that
    case,
    <span class="highlight-full"
      >upon receiving pushback from our client, I would have conducted user
      testing to truly assess the vendors&#x27; receptiveness to an interactive
      app.</span
    > Because that was not a possibility within the confines of a semester-long course,
    we trusted our clients&#x27; knowledge of vendors and rerouted the project. Looking
    back I&#x27;m hesitant about whether we made the right change. The switch stifled
    interaction. In the end, we created not much more than an interactive PowerPoint.
  </p>
  <p class="" />
  <br />
  <br />
  <p class="text-block">
    This is one of those projects where I look at the final outcome and feel a
    bit disappointed. Nevertheless, I wanted it in my portfolio because I am
    proud of the research and design process that went into it. <span
      class="highlight-full"
      >This was one of the first formal design processes I got to be a part of
      and I distinctly remember experiencing the feeling of &#x27;wow, this is
      where I&#x27;m supposed to be&#x27;</span
    >. So even though I don&#x27;t claim this as my best work, I&#x27;m proud of
    what it taught me and continues to teach me about myself and what kind of
    designer I want to be.
  </p>
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
