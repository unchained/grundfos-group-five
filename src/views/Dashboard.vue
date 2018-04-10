<template>
  <div>
    <navbar-partial></navbar-partial>
    <div class="grid-container padding-vertical-3">
      <!--<div data-closable class="callout alert-callout-subtle success">-->
      <!--<strong>Welcome,</strong> this is your dashboard, take a look around!-->
      <!--<button class="close-button" aria-label="Dismiss alert" type="button" data-close>-->
      <!--<span aria-hidden="true">⊗</span>-->
      <!--</button>-->
      <!--</div>-->
      <div class="grid-x grid-padding-x">
        <div class="cell auto">
          <h2>Recommended</h2>
        </div>
      </div>
      <div class="grid-x grid-padding-x margin-bottom-3 recommended">
        <div class="cell auto">
          <div class="card course-card">
            <img class="width-100" src="static/img/course-1.png" alt="course 1">
            <div class="overlay">
              <span class="h1"><i class="ion-play"></i></span>
            </div>
          </div>
        </div>
        <div class="cell auto">
          <div class="card course-card">
            <img class="width-100" src="static/img/course-2.png" alt="course 2">
            <div class="overlay">
              <span class="h1"><i class="ion-play"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-x align-center margin-bottom-3">
        <div class="cell small-8">
          <div class="search">
            <input class="width-100" type="text" placeholder="Search courses...">
            <div class="filters">
              <h6>Filters</h6>
              <ul>
                <li v-for="(filter, index) in filters" v-bind:key="index">
                  <button class="dropdown button tiny" :data-toggle="'filter'+ index">
                    {{ filter }}
                  </button>
                  <div class="dropdown-pane" :id="'filter'+ index" data-dropdown>
                    <ul class="vertical menu">
                      <li><a href="#">One</a></li>
                      <li><a href="#">Two</a></li>
                      <li><a href="#">Three</a></li>
                      <li><a href="#">Four</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="courses">
        <div class="grid-x grid-margin-x category">
          <h3 class="cell width-100">
            Our products
          </h3>
          <div class="cell medium-3" v-for="n in 10" v-bind:key="n">
            <a href="#">
              <div class="card course-card">
                <img class="width-100" src="static/img/course-1.png" alt="course 1">
                <div class="card-section">
                  <h4>Scala 2 water booster pump</h4>
                  <p>The scala 2 water booster pump is our newest pump saving up to 20% in costs. Learn how.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="grid-x grid-margin-x category">
          <h3 class="cell width-100">
            Environment
          </h3>
          <div class="cell medium-3" v-for="n in 4" v-bind:key="n">
            <a href="#">
              <div class="card course-card">
                <img class="width-100" src="static/img/course-1.png" alt="course 1">
                <div class="card-section">
                  <h4>Scala 2 water booster pump</h4>
                  <p>The scala 2 water booster pump is our newest pump saving up to 20% in costs. Learn how.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <footer-partial></footer-partial>
  </div>
</template>

<script>
  import Intro from 'intro.js';
  import NavbarPartial from '../partials/NavbarPartial';
  import FooterPartial from '../partials/FooterPartial';

  function startIntro() {
    const intro = Intro.introJs();
    intro.setOptions({
      scrollTo: 'tooltip',
      steps: [
        {
          intro: 'Welcome to Ecademy! This is your dashboard, let\'s take a look around!',
        },
        {
          element: '.recommended',
          intro: 'Here you can find the latest recommended courses just for you',
        },
        {
          element: '.search',
          intro: 'Search for any topics you like and refine the results',
        }, {
          element: '.courses',
          intro: 'Or select from this list of all our courses',
        },
      ],
    });
    intro.start();
  }

  export default {
    components: {
      FooterPartial,
      NavbarPartial,
    },
    name: 'Dashboard',
    data: () => ({
      msg: 'Funguje to bejby',
      filters: ['Categories', 'Duration', 'Job role', 'Watched'],
    }),
    mounted() {
      startIntro();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .search {
    input {
      //max-width: 600px;
      margin-left: auto;
      margin-right: auto
    }

    .filters {
      > ul {
        list-style: none;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin: 0 -0.5rem;

        li {
          padding: 0 0.5rem;
          flex: 0 0 auto;
        }
      }

      .dropdown-pane{
        width: auto;
      }
    }
  }

</style>
