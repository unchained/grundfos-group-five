<template>
  <div class="form-container">
    <div class="row">
      <div class="columns">
        <!--<div data-abide-error class="alert callout" style="display: none;">-->
        <!--<p><i class="fi-alert"></i> There are some errors in your form.</p>-->
        <!--</div>-->
        <fo-tabs id="signform-tabs">
          <fo-tabs-title class="is-active" href="#register-panel">
            Register
          </fo-tabs-title>
          <fo-tabs-title href="#sign-in-panel">
            Log in
          </fo-tabs-title>
        </fo-tabs>
      </div>
    </div>
    <div class="row">
      <div class="columns">
        <fo-tabs-content data-tabs-content="signform-tabs">
          <!--<h3 class="margin-horizontal-1 margin-bottom-0 padding-top-2">-->
            <!--Start learning now!-->
          <!--</h3>-->
          <fo-tabs-panel class="tabs-panel is-active" id="register-panel">
            <form data-abide novalidate>
              <div class="small-12 columns">
                <label>Name
                  <input type="text" required>
                  <span class="form-error">I bet you have one</span>
                </label>
              </div>
              <div class="small-12 columns">
                <label>Email address
                  <input type="email" required>
                  <span class="form-error">We need your email for spam</span>
                </label>
              </div>
              <div class="small-12 columns">
                <label>Password
                  <input type="password" required>
                  <span class="form-error">Choose a password</span>
                </label>
              </div>
              <fieldset class="column">
                <router-link @click.native="$root.login" to="register" class="button">Register</router-link>
                <small class="display-block">
                  By registering you agree to our
                  <a href="#">terms of service</a>.
                </small>
                <small class="margin-bottom-1">
                  <a data-toggle="tab" data-tabs-content="signform-tabs" data-tabs-value="sign-in-panel"><b>Already have a Grundfos account?</b></a>
                </small>
              </fieldset>
            </form>
          </fo-tabs-panel>
          <fo-tabs-panel class="tabs-panel" id="sign-in-panel">
            <form data-abide novalidate>
              <div class="small-12 columns">
                <label>Email address
                  <input type="email" name="email" autofocus required>
                  <span class="form-error">User with this email does not exist.</span>
                </label>
              </div>
              <div class="small-12 columns">
                <label>Password
                  <input type="password" name="password" required>
                  <span class="form-error">Password is incorrect</span>
                </label>
              </div>
              <fieldset class="column">
                <router-link @click.native="$root.login" to="dashboard" class="button">Log in</router-link>
                <small class="margin-bottom-1 display-block">
                  <a href="#" class="secondary"><b>Forgot your password?</b></a>
                </small>
              </fieldset>
            </form>
          </fo-tabs-panel>
        </fo-tabs-content>
      </div>
    </div>
  </div>
</template>

<script>
  import FoTabs from 'vuefComponent/FoTabs';
  import FoTabsContent from 'vuefComponent/FoTabsContent';
  import FoTabsPanel from 'vuefComponent/FoTabsPanel';
  import FoTabsTitle from 'vuefComponent/FoTabsTitle';

  function initFormTabTogglers() {
    $('[data-toggle="tab"]').click(function () {
      const parent = $(this).data('tabs-content');
      const value = $(this).data('tabs-value');
      $(`#${parent}`).foundation('selectTab', value, false);
    });
  }

  function initSignForm() {
    $('#signform-tabs').on('change.zf.tabs', function (e, target, targetContent) {
      targetContent.find('input').first().focus();
    });
  }

  export default {
    name: 'sign-form-component',
    data: () => ({}),
    mounted() {
      initFormTabTogglers();
      initSignForm();
    },
    components: {
      FoTabs,
      FoTabsContent,
      FoTabsPanel,
      FoTabsTitle,
    },
  };
</script>

<style lang="scss">
  .form-container {
    border: rem-calc(1) solid $gray-4;
    margin-left: auto;
    max-width: 400px;

    .tabs {
      border-bottom: none;
      display: flex;

      .tabs-title {
        border-bottom: $tab-content-border;
        flex: 1 0 auto;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;

        & > a:focus, & > a[aria-selected='true'] {
          border-bottom: none;
        }
      }
    }
  }

  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .pulse {
    animation-name: pulse;
  }
</style>
