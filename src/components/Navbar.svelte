
<script>
 export let navlists = [];
 export let header;
 let y;
 
</script>
<svelte:window bind:scrollY={y} />
<svelte:head> <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Cormorant+Garamond:wght@300;400&family=Crimson+Text&family=EB+Garamond&family=Raleway:wght@100;200;300;400&display=swap" rel="stylesheet"> 
</svelte:head>


  {#if y < 50}
  <section id="nav-bar">
 <!-- <nav class="navbar main-bgcolor navbar-expand-md navbar-dark"> -->
<nav class="navbar navbar-expand-md navbar-light main-bgcolor">
  <a style="max-width:100px" href="/"> 
  <img src="https://blush.design/api/download?shareUri=XnYMb2-OT&w=800&h=800&fm=png" alt= "" style="width:100%" />
  </a>
 <button
 class= "navbar-toggler"
 type= "button"
 data-toggle= "collapse"
 data-target= "#navbarNav"
 aria-controls= "navbarNav"
 aria-expanded= "false"
 aria-label= "Toggle navigation">
 <span class= "navbar-toggler-icon" />
 </button>
 <div class= "collapse navbar-collapse" id="navbarNav">
 <ul class= "navbar-nav ml-auto">

 <div class= "nav-item dropdown ">
  <a class= "nav-link dropbtn" href="/">Home</a>
 </div>


 <div class= "nav-item dropdown">
  <a class= "nav-link dropbtn" href="#Projects"> Projects</a>
  <div class="nav-link dropdown-content">
  <a class="nav-link" href="cfm">CFM</a>
  <a  class="nav-link" href="fooddes">Food Facts</a>
  <a  class="nav-link" href="vote">Atl Votes</a>
  <a  class="nav-link" href="healthcare">Healthcare Abroad</a>
  <a  class="nav-link" href="sideprojects">Side Projects</a>
 </div>
</div>

 <!-- <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> -->
 <div class= "nav-item dropdown">
  <a class= "nav-link dropbtn" href="about"> About </a>
 </div>

 </ul>
 </div>
 </nav>
</section>
{/if}
<style>
  a{
    font-size: 15px;
    text-transform: none;
  }

  .dropbtn {
  font-family:'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 500;
  text-transform: none;
  float: right;
  text-align: center;
  color: #000;
  padding: 0 0 0 20px;
}

.dropdown {
  margin: 15px;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  font-size: 10px;
  position: absolute;
  background-color: #86BBBD;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  display: flex;
  color: black;
  padding: auto;
  text-decoration: none;
  display: block;
}
/* .dropdown-content a:hover {background-color: #ddd;} */

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */

 #nav-bar {
 position: sticky;
 top: 0;
 z-index: 10;
 
 }
.navbar {
 padding: 0 20px !important;

 }
.navbar-nav li {
 padding: 0 0 0 20px;
 
 }
.navbar-nav li a {
  font-family:'Open Sans', sans-serif;
 font-size: 17px;
 font-weight: 500;
 text-transform: uppercase;
 float: right;
 text-align: center;
 color: #000;
 
 }
 .link {
  font-family:'Open Sans', sans-serif;
 font-size: 12px;
 font-weight: 500;
 text-transform: uppercase;
 float: right;
 text-align: center;
 color: #000;
 
 }
</style>