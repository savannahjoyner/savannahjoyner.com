<script>
  import Saos from "saos";
  import Social from "../components/Social.svelte";
  import data from "../data/data.js";
</script>

<svelte:head>
  <title>Food Facts</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <div style="background-color: #efd5c5">
    <img
      class="page-cover-image"
      src="../images/food_mock_large.png"
      alt=""
      style="width:70%; object-position:center 27.810000000000002%"
    />
  </div>
</header>

<h1 class="header" style="">Georgia Food Data</h1>
<div class="detail-grid grid-12" style="">
  <h1 class="heading-small">OVERVIEW</h1>
  <h1 class="heading-small">ROLE</h1>
  <div class="text-block">
    I, along with my projects members utilized data visualization techniques to
    engage and educate users on the issues of food insecurity in Georgia. Using
    Tableau, we analyzed specific trends in food access around Georgia. Using
    D3.js we designed an interactive application to make this data accessible to
    all. I was the lead Data Analyst and Ux Designer focusing on visualizing
    fact based insights that drive empathy and understanding.
  </div>
  <div class="text-block">
    <p><strong>Data Analyst and UX Designer</strong></p>
    <br />
    Data Analysis, Data Visualization, User Research, Interaction, Prototyping
    <br />
    <br />
    <br />
    <h1 class="heading-small">TOOLS USED</h1>
    Tableau, Figma, HTML, CSS, D3.js, Waypoints (a scrollytelling library)
  </div>
</div>
<div class="grid-12" style="padding-bottom: 100px;">
  <h1 class="heading-small">CHALLENGE</h1>
  <p class="text-block">
    The USDA defines a food desert as “a low-income census tract with a
    substantial number or share of residents with low levels of access to retail
    outlets selling healthy and affordable foods”. What perhaps comes as a
    surprise to many Americans, is that these food deserts exist in a relatively
    high volume throughout our country. Our goal for this project was to make
    Americans - specifically, residents of Georgia - more aware of this issue
    and its social implications. In Cobb County alone, there are more than
    75,000 people living within a food desert. The issue is not rooted solely in
    low food production. The prevalence of food deserts also illustrates a
    societal tendency to provide fewer resources to communities of a lower
    economic status. We would like to look at the data from the perspective of
    those residing in these communities.
  </p>
</div>

<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Discovery Phase</h1>
    <p class="text-block">
      In the discovery phase, we found relevant datasets, answered questions
      “Who would be interested?” and “What would people want to know?”, did
      research on other projects using food data and found visualizations that
      inspired our work.
    </p>
    <br />
    <br />
    <p><strong>Find and Analyze the Data<br /></strong></p>
    <p class="text-block">
      Our dataset was collected by the United States Department of Agriculture
      (USDA), and contains information on food access levels in counties across
      the U.S. It has over 275 variables, covers every state in the U.S., and is
      separated into multiple sub-datasets based on topic (access, restaurants,
      food insecurity and economy). As data analyst, I used Tableau to make
      meaningful connections within this dataset, locating the information that
      would be relevant to our scope.
    </p>
    <br />
    <br />
    <p><strong>Identify Target Audience<br /></strong></p>
    <p class="text-block">
      We believe that any organization or individual studying food access would
      be particularly interested. Additionally, we hope to attract anyone
      interested in the historical impact of income and race on policy making
      and economic development.
    </p>
    <br />
    <br />
    <p><strong>Study Related Work<br /></strong></p>
    <p class="text-block">
      Looking at related work, gave us the opportunity to learn from the
      strength and weaknesses of other projects. It helped us fine tune our
      focus and create a unique experience in our application.
    </p>
    <img
      src="../images/foodrelated.png"
      alt=""
      style="object-position:center 27.810000000000002%"
    />
  </div>
</div>

<div class="project-detail ">
  <h1 class="section-header">Design Process</h1>
  <p class="text-block">
    The initial discovery phase allowed us to follow a consistent and sharpened
    design process that focused on displaying the most digestible and impactful
    content for our users. We decided scrollytelling was the best way to do
    this. As our UX Designer, I used Figma and Tableau to map out our design
    concepts and data visualizations.
  </p>
  <br />
  <br />
  <p><strong>Scrollytelling Prototype<br /></strong></p>
  <iframe
    style="border: 1px solid rgba(0, 0, 0, 0.1);"
    width="800"
    height="450"
    title="Initial Prototype Figmas"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiaPwtBdGrh3lYleYdWVRYJ%2FFoodDataGa_IntialPrototype"
    allowfullscreen
  />
  <br />
  <br />
  <p><strong>Alternate Designs<br /></strong></p>
  <div class="row">
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/foodalt1.png"
          ><img style="width:512px" src="../images/foodalt1.png" alt="" /></a
        >
      </figure>
    </div>
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/foodalt2.png"
          ><img style="width:512px" src="../images/foodalt2.png" alt="" /></a
        >
      </figure>
    </div>
    <div class="column" style="width:33.33333333333333%">
      <figure class="image">
        <a href="../images/foodalt3.png"
          ><img style="width:512px" src="../images/foodalt3.png" alt="" /></a
        >
      </figure>
    </div>
  </div>
</div>
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Final Outcome</h1>
    Link to view: 
    <a
      class="link"
      href="https://cs4460.github.io/Food-Desert-Viz/"
      download
    >
      <p class="link">https://cs4460.github.io/Food-Desert-Viz/</p>
    </a>
    <br>
    Github:
    <a
      class="link"
      href="https://github.com/cs4460/Food-Desert-Viz"
      download
    >
      <p class="link">https://github.com/cs4460/Food-Desert-Viz</p>
    </a>
    <br>
    <br>
    <p class="text-block">
      It is easy for people who live near or in cities and towns to assume that
      everybody lives with the same access. We wanted a way to tell the story of
      those we’ve left behind, and to visualize, geographically, where people
      are most insecure and what those areas’ demographics are. We use a
      scrollytelling approach to first display the sheer number of people in
      Georgia impacted by food insecurity. We use Clay county as an example for
      how some counties are significantly worse than others, and that its
      residents are at a higher health risk. We then allow the user to explore a
      map to see the demographics of all the counties in Georgia, which are
      colored by their food insecurity rate. The map uses a zoom feature when a
      county is clicked on, which gives the user a side-by-side view of the
      focused county and its demographics.
    </p>
    <br />
    <div class="row">
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/foodfinal1.png"
            ><img style="width:512px" src="../images/foodfinal1.png" alt="" /></a
          >
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/foodfinal2.png"
            ><img style="width:512px" src="../images/foodfinal2.png" alt="" /></a
          >
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/foodfinal3.png"
            ><img style="width:512px" src="../images/foodfinal3.png" alt="" /></a
          >
        </figure>
      </div>
      <div class="column" style="width:33.33333333333333%">
        <figure class="image">
          <a href="../images/foodfinal4.png"
            ><img style="width:512px" src="../images/foodfinal4.png" alt="" /></a
          >
        </figure>
      </div>
    </div>
  </div>
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
