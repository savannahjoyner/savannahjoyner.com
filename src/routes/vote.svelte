<script>
  import Saos from "saos";
  import Social from "../components/Social.svelte";
  import data from "../data/data.js";
  
</script>

<svelte:head>
  <title>ATL Votes</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>



<header>
  <div style="background-color: #473198">
    <img
      class="page-cover-image"
      src="../images/vote_mock.png"
      alt=""
      style="width:55%; object-position:center 27.810000000000002%"
    />
  </div>
</header>

<h1 class="header" style="">Atlanta Votes</h1>

<div class="detail-grid grid-12" style="">
  <h1 class="heading-small">OVERVIEW</h1>
  <h1 class="heading-small">ROLE</h1>
  <div class="text-block">
    This was a semester design project for the course Principles of Information Design. 
    When we started this project in January 2020, it seemed like every source of media was telling us how important 
    it was to be registered to vote and to vote in the primaries.
     Of course, we’d always learned the necessity of voting but after what happened in the previous presidential election 
     ( the winner of the popular vote did not win the election) , we wondered how many people were still a bit confused and 
     defeated like us. <br><br>
     We walked into this project with our own beliefs, yes, but more than anything with a desire to look at the data.  
     We wanted to know how much our votes actually counted in Atlanta in 2016 and in the future. 
    *I'm writing this in 2021, confidently stating that our votes matter A LOT. Go Georgia, Go ATL. 
    
  </div>
  <div class="text-block">
    <p><strong>UX Designer and Data Analyst</strong></p>
    <br />
    Data Research, Interaction, Prototyping, Data Visualization Design
    <br />
    <br />
    <br />
    <h1 class="heading-small">TOOLS USED</h1>
    Adobe XD, Illustrator, Photoshop, Tableau
  </div>
</div>
<div class="grid-12" style="padding-bottom: 100px;">
  <h1 class="heading-small">CHALLENGE</h1>
  <p class="text-block">
    This project was created from a hypothetical prompt:
“You have been asked by the City of Atlanta to provide an infographic essay that integrates data from different sources into a coherent whole. You will need to incorporate data from four different sources”
We started this project at the beginning of the 2020 election year. The talk of Donald Trump’s impeachment was still lingering, primaries were approaching and we were being reminded left and right to make sure we were registered to vote. With these precedents on our mind, we thought about how often we actually saw people in our city and on our college campus voting. The answer was not often. Politics are a pretty common topic in our realm but the truth is we don’t as regularly see people enacting their beliefs through voting. With that, we decided to look into the actuality of voter turnout in our city across different communities, ages, genders and ethnicities. We decided to look not only at how much of our population votes but also at our ability to make a difference. How much power do we actually have when we show up at the poles? We knew the 2016 election was a great place to start figuring that out.

  </p>
  <br>
  <br>
  <p> <a href="../images/ProcessBook_Group4.pdf"><p class="link"> Download Process Book</p></a></p>
</div>

<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Discovery Phase</h1>
    
    <p><strong>Accessing Bias<br /></strong></p>
    <p class="text-block">
      With data viz there is always going to be bias -- we learned that in
      class. With a topic such as politics the bias is most likely going to be even stronger. With this
      in mind, we knew we couldn’t escape our beliefs. We decided to approach the project with
      honesty, but to never let our bias allow us to be misleading when displaying data. We want a
      different outcome than the 2016 election but we will check our bias at the door when it comes
      to the actual creation of visualizations. 
    </p>
    <br />
    <br />
    <p><strong>Questions to Answer<br /></strong></p>
    <figure class="image">
      <a href="../images/questions.png"
        ><img
          style="width:512px"
          src="../images/questions.png"
          alt=""
        /></a
      >
      <figcaption>Screen grab from our initial proposal </figcaption>
    </figure>
    <p class="text-block">
      We came up with an initial set of questions that we wanted to ask while creating our
      infographic. In the beginning, these questions were definitely wide ranging. Though these were interesting topics to consider, as we researched we
      realized we would  have to narrow our scope to keep it in the constraints of a one
      semester project. 
      
    </p>
    <br />
    <br />
    <p><strong>Narrowing the Scope<br /></strong></p>
    <p class="text-block">
      After our initial research and ideation, we decided it was time to tune our ideas to create more
      realistic parameters for our ongoing designs.
      Our solution was to only look at one election rather than 5. Narrowing our scope to the 2016
      election gave us the capacity to dive more deeply into the topics we were really interested in. These included serious issues that exist in our own city such as racial inequality, the
      continuance of poverty cycles, voter suppression and unequal representation. 
    </p>
    <br />
    <br />
    <p><strong>Locating Data<br /></strong></p>
    <p class="text-block">
      With a narrowed perspective, we dove into finding data that we could use in our visualizations.
      This was a more tedious process than we expected. Clear political data is harder to come by
      than one would assume. In the end, we located a combination of data that looked at registered vs voted numbers in each county and voting precinct in 2016. This data included ethnicity and gender demographics. We found data that looked at 2016 General Election(popular
      and electoral) results across all of the US. We also found data that looked at 2020 registered
      voter numbers and demographics. 
    </p>
    <br>
    <br>
    <ul role="list" class="list">
      <li>
        <p> Ga General Election Turnout by Demographic, Nov 2016: </p>
        <a
          class="link"
          href=" https://sos.ga.gov/index.php/elections/general_election_turnout_by_demographics_november_2016"
          download
        >
          <p class="link"> https://sos.ga.gov/index.php/elections/general_election_turnout_by_demographics_november_2016</p>
        </a>
      </li>
      <li>
        <p> Polling/Precinct Locations: </p>
        <a
          class="link"
          href=" http://fulcogis.maps.arcgis.com/apps/webappviewer/index.html?id=6962a9835ace43ea8326e25a5808c815"
          download
        >
          <p class="link"> http://fulcogis.maps.arcgis.com/apps/webappviewer/index.html?id=6962a9835ace43ea8326e25a5808c815</p>
         </a>
      </li>
      <li>
        <p> 2016 Electoral and Popular Vote: </p>
        <a
          class="link"
          href="  https://uselectionatlas.org/RESULTS/"
          download
        >
          <p class="link">  https://uselectionatlas.org/RESULTS/</p>
        </a>
      </li>
      <li>
        <p>  2016 General Election by County: </p>
        <a
          class="link"
          href="  https://data.world/garyhoov/2016-pres-election-by-county"
          download
        >
          <p class="link">  https://data.world/garyhoov/2016-pres-election-by-county</p>
        </a>
      </li>
      <li>
        <p>  2020 Registration Data: </p>
        <a
          class="link"
          href="   https://sos.ga.gov/index.php/Elections/voter_registration_statistics"
          download
        >
          <p class="link">  https://sos.ga.gov/index.php/Elections/voter_registration_statistics</p>
        </a>
      </li>
      <li>
        <p>   Milton vs College Park Demographics: </p>
        <a
          class="link"
          href="https://datausa.io/profile/geo/college-park-ga?compare=milton-ga#housing"
          download
        >
          <p class="link"> https://datausa.io/profile/geo/college-park-ga?compare=milton-ga#housing </p>
        </a>
      </li>
    </ul>
    <br />
    <br />
  </div>
</div>

<div class="project-detail ">
  <h1 class="section-header"> Data Visualizations</h1>
  <p class="text-block">
    When creating our visualizations we wanted to be sure that each graph displayed our data
    from a different view point. With this in mind, we cycled through several iterations before we
    landed on our final designs. Below you can see each major visualization and the changes we
    made throughout the design process.
  </p>
  <br />
  <br />
  <p><strong> Vizualization 1: Fulton County Map<br /></strong></p>
    <p>Early Iterations:</p>
      <figure class="image">
        <a href="../images/viz1early.png"
          ><img
            style="width:512px"
            src="../images/viz1early.png"
            alt=""
          /></a
        >
      </figure>
      
      <figure class="image">
        <a href="../images/viz1early2.png"
          ><img
            style="width:512px"
            src="../images/viz1early2.png"
            alt=""
          /></a
        >
      </figure>
      <p>Final:</p>
      <figure class="image">
        <a href="../images/viz1final.png"
          ><img
            style="width:512px"
            src="../images/viz1final.png"
            alt=""
          /></a
        >
      </figure>
      <p><strong> Vizualization 2: Radar Charts<br /></strong></p>
      <p>Early Iterations:</p>
      <figure class="image">
        <a href="../images/viz2early.png"
          ><img
            style="width:512px"
            src="../images/viz2early.png"
            alt=""
          /></a
        >
      </figure>
      
      <figure class="image">
        <a href="../images/3705politics.png"
          ><img
            style="width:512px"
            src="../images/3705politics.png"
            alt=""
          /></a
        >
      </figure>
      <p>Final:</p>
      <figure class="image">
        <a href="../images/viz2final.png"
          ><img
            style="width:512px"
            src="../images/viz2final.png"
            alt=""
          /></a
        >
      </figure>
      <p><strong> Vizualization 3: Mosaic Plot<br /></strong></p>
      <p>Early Iterations:</p>
      <figure class="image">
        <a href="../images/viz3early.png"
          ><img
            style="width:512px"
            src="../images/viz3early.png"
            alt=""
          /></a
        >
      </figure>
      
      <figure class="image">
        <a href="../images/mosaic.png"
          ><img
            style="width:512px"
            src="../images/mosaic.png"
            alt=""
          /></a
        >
      </figure>
      <p>Final:</p>
      <figure class="image">
        <a href="../images/viz3final.png"
          ><img
            style="width:512px"
            src="../images/viz3final.png"
            alt=""
          /></a
        >
      </figure>
    
  </div>
<br />
<div class="alt-bgcolor">
  <div class="project-detail">
    <h1 class="section-header">Final Layout</h1>
    <p> <a href="../images/Final M5.pdf"><p class="link"> View Final Project</p></a></p>
    <br>
    <p> <a href="../images/ProcessBook_Group4.pdf"><p class="link"> Download Process Book</p></a></p>
    <a href="../images/layout1.png">
      <img src="../images/layout1.png" alt="" style="width:auto" />
    </a>
    <a href="../images/final2.png">
      <img src="../images/final2.png" alt="" style="width:auto" />
    </a>
   </div>
</div>
<div class="project-detail">
  <h1 class="section-header">Reflection</h1>
  <p><strong> Design: <br /></strong></p>
  <p class="text-block">
    We knew from the start of the project that we were going
    to need to display a lot of information and a lot of detail
    in our visualizations. In the begining of our process, we
    thought a sort of scrolling web site would be the best way
    to depict our information. After playing with this layout,
    we realized that we wanted users to have a bit more
    control over their viewport and their zoom capabilties.
    From there we decided to format our layout as an online
    infographic. Though this format still have a viewport of
    sorts, users can zoom in and out as they like. Instead of
    having our graphs and maps regulated to a screen size,
    each section of information or infographic is relatively the
    same length. This will add consistency when scrolling and
    also gives us some control over what the viewer is seeing
    at any point.

  </p>
  <br>
  <br>
  <p><strong> Challenges: <br /></strong></p>
  <p class="text-block">
    Our greatest challenge with the layout of this infographic
    was definitely finding a consistent feel throughout. As
    you can see in the iteration images of the process book, we struggled finding
    consistent font sizing, line weight, and columns. With fine
    tuning and constant iterations we were able to get to a
    product we are very happy with!
  </p>
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
