<template>
  <div class="grid-container full signup-process">
    <div class="grid-x">
      <div class="cell small-12 medium-6 flex-container align-center-middle">
        <div class="width-75">
          <!--<ul class="steps margin-bottom-3">-->
            <!--<li>-->
              <!--<strong class="transparent">Step 1/2</strong>-->
            <!--</li>-->
            <!--<li class="active text-right">-->
              <!--<strong>Step 2/2</strong>-->
            <!--</li>-->
          <!--</ul>-->

          <h1>What's your role?</h1>
          <div class="progress" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
            <span class="progress-meter" style="width: 100%">
              <p class="progress-meter-text">Step 2/2</p>
            </span>
          </div>

          <div>
            <fieldset>
              <div class="answers margin-bottom-3">
                <input type="radio" name="role" value="Red" autocomplete="off" id="reseller" required>
                <label for="reseller">
                  <div class="card">
                    <div class="card-section padding-bottom-0">
                      <h2 class="text-center"><i class="ion-loop"></i></h2>
                    </div>
                    <div class="card-section flex-container align-center-middle">
                      <h5 class="text-center">Reseller</h5>
                    </div>
                  </div>
                </label>
                <input type="radio" name="role" value="Blue" autocomplete="off" id="installer" required>
                <label for="installer">
                  <div class="card">
                    <div class="card-section padding-bottom-0">
                      <h2 class="text-center"><i class="ion-wrench"></i></h2>
                    </div>
                    <div class="card-section flex-container align-center-middle">
                      <h5 class="text-center">Installer</h5>
                    </div>
                  </div>
                </label>
                <input type="radio" name="role" value="Yellow" autocomplete="off" id="consulting" required>
                <label for="consulting">
                  <div class="card">
                    <div class="card-section padding-bottom-0">
                      <h2 class="text-center"><i class="ion-clipboard"></i></h2>
                    </div>
                    <div class="card-section flex-container align-center-middle">
                      <h5 class="text-center">Consulting Engineer</h5>
                    </div>
                  </div>
                </label>
                <input type="radio" name="role" value="Yellow" autocomplete="off" id="other" required>
                <label for="other">
                  <div class="card">
                    <div class="card-section padding-bottom-0">
                      <h2 class="text-center"><i class="icon-gr-help"></i></h2>
                    </div>
                    <div class="card-section flex-container align-center-middle">
                      <h5 class="text-center">Other</h5>
                    </div>
                  </div>
                </label>
              </div>
            </fieldset>
            <div class="text-right">
              <router-link to="/dashboard" @click.native="$root.login" type="submit" class="button padding-horizontal-2" disabled>Finish</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="cell auto medium-6 testimonial">
        <blockquote>
          <p class="h4">"Thanks to Ecademy I'm able to keep myself and my co-workers up to date on the best products we use."</p>
          <footer>
            - John Cooper, New York waterways co.
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
function initSignupProcessUiActions() {
  $('.signup-process fieldset input[type="radio"]').on('change', function () {
    $('.signup-process [type="submit"]').removeAttr('disabled');
  });
}

export default {
  name: 'Register',
  data: () => ({
    msg: 'Funguje to bejby',
  }),
  mounted() {
    initSignupProcessUiActions();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.signup-process {
  > .grid-x {
    height: 100vh;
  }

  /*.steps {*/
    /*display: flex;*/
    /*flex-flow: row nowrap;*/
    /*justify-content: space-between;*/
    /*align-items: stretch;*/
    /*list-style: none;*/
    /*margin-left: 0;*/
    /*margin-right: 0;*/

    /*li {*/
      /*flex: 1 0 auto;*/
      /*border-bottom: 1px solid transparent;*/
      /*border-color: #3386c3;*/

      /*&.active {*/
        /*border-width: 2px;*/
        /*border-color: #0068b4;*/
      /*}*/
    /*}*/
  /*}*/

  .progress {
    margin-bottom: rem-calc(80);

    .progress-meter {
      background-color: $blue-3-light;
    }
  }

  .answers {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;

    > * {
      flex: 1 0 auto;
      max-width: 150px;
    }

    input[type="radio"] {
      display: none;

      &:checked + label {
        .card {
          background-color: rgba($primary-color, 0.5);
        }
      }
    }

    label {
      display: inline-block;
      margin: 0;
    }

    .card {
      border-radius: 4px;
      margin-bottom: 0;
      height: 100%;
      &:hover {
        background-color: rgba($primary-color, 0.5);
      }
    }
  }

  .testimonial {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url('https://previews.123rf.com/images/kadmy/kadmy1611/kadmy161100016/65192941-plumber-work-construction-worker-installing-water-high-pressure-pump-meter-in-boiler-room.jpg');
    background-position: 40% 0%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    blockquote {
      color: #fff;
      position: absolute;
      bottom: 5%;
      left: 5%;
      width: 80%;

      p {
        color: inherit;
      }
    }
  }
}
</style>
