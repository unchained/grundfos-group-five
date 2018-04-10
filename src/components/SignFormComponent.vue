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
                <router-link @click.native="$root.login" to="register" class="button expanded">Register</router-link>
                <small class="margin-bottom-1 display-inline-block">By registering you agree to our
                  <a href="#">terms of service</a>.
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
                <router-link @click.native="$root.login" to="dashboard" class="button expanded">Log in</router-link>
                <small class="margin-bottom-1 display-inline-block">
                  <a href="#">Forgot your password?</a>
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
    methods: {
      registerFormSubmitted: () => {

      },
      loginFormSubmitted: () => {
        this.$root.$emit('login');
      },
    },
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
      display: flex;
      border-bottom: none;

      .tabs-title {
        flex: 1 0 auto;
        text-align: center;
        background-color: $tab-background-active;
        border-bottom: $tab-content-border;

        & > a:focus, & > a[aria-selected='true'] {
          background-color: $tab-background;
          border-bottom: none;
        }
      }
    }
  }
</style>
