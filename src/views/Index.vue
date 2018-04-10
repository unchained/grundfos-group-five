<template>
  <div>
    <navbar-partial></navbar-partial>
    <section class="login-section">
      <div class="grid-container padding-top-1 padding-bottom-2">
        <div class="grid-x grid-margin-x align-top padding-top-2">
          <div class="cell small-7 padding-right-3">
            <h1 class="h2 margin-bottom-2">Learn all about Grundfos products and plumbing. From the industry leaders. For free.</h1>
            <p>
              Grundfos Ecademy is a platform for sellers, installers and home owners to provide them with information about different pumps, plumbing basics and theory as well as industry trends.
            </p>
          </div>

          <div class="cell small-5">
            <sign-form-component></sign-form-component>
          </div>
        </div>
      </div>
    </section>

    <section class="grid-container padding-top-3 padding-bottom-2">
      <div class="grid-x grid-margin-x">
        <div class="cell text-center margin-bottom-3">
          <h2>What is Ecademy?</h2>
        </div>
      </div>
      <div class="grid-x grid-margin-x align-center">
        <div class="cell small-8">
          <div class="responsive-embed widescreen margin-bottom-3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5dAiwVO1g0I" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="grid-x grid-margin-x">
        <div class="cell text-center margin-bottom-3">
          <a href="#" data-toggle="tab" data-tabs-content="signform-tabs" data-tabs-value="sign-in-panel" class="button padding-vertical-2 padding-horizontal-3">Start learning now!</a>
        </div>
      </div>
    </section>

    <section class="grid-container padding-top-3 padding-bottom-3">
      <div class="grid-x grid-margin-x">
        <div class="cell text-center margin-bottom-3">
          <h2>How can Ecademy help your business</h2>
          <p>It's easy and quick and gives you a lot of benefits to use in everyday work.</p>
        </div>
      </div>
      <div class="grid-x grid-margin-x align-justify align-stretch">
        <div class="cell auto">
          <div class="card height-100">
            <div class="card-divider">1. Create an account on Ecademy</div>
            <div class="card-section">
              <p>Creating Ecademy account is a simple three steps process which doesn’t take you longer than 30 seconds.</p>
            </div>
          </div>
        </div>
        <div class="cell auto">
          <div class="card height-100">
            <div class="card-divider">2. Take a course</div>
            <div class="card-section">Our courses are interactive and consist of series of videos and quiz to asure your knowledge.</div>
          </div>
        </div>
        <div class="cell auto">
          <div class="card height-100">
            <div class="card-divider">3. Make better decisions at work</div>
            <div class="card-section">Thanks to the gained knowledge you will be able to make better and faster decisions.</div>
          </div>
        </div>
        <div class="cell auto">
          <div class="card height-100">
            <div class="card-divider">4. Maximise your service</div>
            <div class="card-section">Become the trusted authority and increase your sales.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid-container padding-top-3 padding-bottom-3">
      <div class="grid-x grid-margin-x">
        <div class="cell text-center margin-bottom-3">
          <h2>How has Ecademy helped others like you?</h2>
        </div>
      </div>
      <div class="grid-x grid-margin-x">
        <!--<div class="cell">-->
        <!--<h2 class="h3 margin-bottom-3">Stories</h2>-->
        <!--</div>-->
        <testimonial-component name="Johnny" surname="Water" profession="Wholesaler, Denmark" avatar="https://randomuser.me/api/portraits/men/74.jpg" message="“The next year after using Ecademy our company has become a certified Grundfos partner and trusted authority in the region of Midtjylland. The next year our sales have increased by 30%.”"></testimonial-component>
        <testimonial-component name="Tamir" surname="Pumper" profession="Plumber, India" avatar="https://randomuser.me/api/portraits/men/39.jpg" message="“After earning a certificate of training on solving environmental issues related to plumbing at Grundfos Ecademy. I was able to get a higher paid job in the most progressive plumbing company in India.”"></testimonial-component>
      </div>
    </section>
    <footer-partial></footer-partial>
  </div>
</template>

<script>
  import NavbarPartial from '../partials/NavbarPartial';
  import FooterPartial from '../partials/FooterPartial';
  import SignFormComponent from '../components/SignFormComponent';
  import TestimonialComponent from '../components/TestimonialComponent';

  export default {
    name: 'Index',
    components: {
      TestimonialComponent,
      SignFormComponent,
      FooterPartial,
      NavbarPartial,
    },
    data: () => ({
      msg: 'Welcome to Your Vue.js App',
    }),
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login-section {
    background-image: url('/static/img/login-background.jpg');
    background-position: center;
    background-size: cover;
    min-height: rem-calc(470);
  }
</style>
