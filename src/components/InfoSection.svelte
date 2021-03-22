
<style>

.showcase-container-home {
  display: flex;
  width: 70%;
  margin-left: calc(16.44% - 50px);
  /* margin-bottom: -150px; */
}


.showreel-heading,
.showreel-sub-heading {
  font-family: mistral;
}


.showcase-container-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  width: 100%;
  grid-column-gap: 70px;
  grid-row-gap: 150px;
}

.projects-wrapper-top:nth-child(2n) {
  margin-bottom: -50px;
}


@media screen and (max-width: 1200px) {
  .showcase-container-home {
    display: flex;
    width: 80%;
    margin-left: calc(11.44% - 50px);
  }

  .showcase-container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
    grid-column-gap: 50px;
    grid-row-gap: 120px;
  }

}

@media screen and (max-width: 999px) {
  .showcase-container-home {
    display: flex;
    width: 80%;
    margin-left: 10%;
  }

  .showcase-container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    width: 100%;
    grid-column-gap: 50px;
    grid-row-gap: 120px;
  }

}

@media screen and (max-width:800px) {

  .showcase-container-home {
    width: 88%;
    margin-left: 4%;

  }

  .showcase-container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    width: 100%;
    grid-column-gap: 50px;
    grid-row-gap: 120px;
  }

  .p-thumbnail-ad:nth-child(2n) {
    padding-top: 0px;
  }

}


.p-thumbnail-ad:nth-child(2n) {
  padding-top: 70px;
}

@media screen and (max-width:754px) {

  .p-thumbnail-ad:nth-child(2n) {
    padding-top: 0px;
  }
}

</style>

<div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/cricbuzz-app-redesign">
            <thumbnail
              thumbnailName="CricBuzz"
              thumbnailDescription="App  Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/elevito">
            <thumbnail
              thumbnailName="Elevito"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/elevito-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/feeding-trends">
            <thumbnail
              thumbnailName="Feeding Trends"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/ft-thumbnail-2.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/bharatrohan">
            <thumbnail
              thumbnailName="BharatRohan"
              thumbnailDescription="Admin, App, Web"
              thumbnail="/bharatrohangif2.gif"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>