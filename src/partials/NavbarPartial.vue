<template>
  <header>
    <div class="header-top">
      <div class="grid-container">
        <div class="grid-y">
          <div class="cell">
            <div class="top-navigation">
              <ul class="menu">
                <li>
                  <a href="#">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#">
                    info@ecademy.you
                  </a>
                </li>
              </ul>
              <ul class="menu right">
                <li>
                  <a href="#">
                    Global
                  </a>
                </li>
                <li>
                  <a href="#">
                    Services <i class="icon icon-gr-view-elements"></i>
                  </a>
                </li>
                <li v-if="this.$root.loggedIn">
                  <router-link to="/" @click.native="$root.logout">Log Out</router-link>
                </li>
                <li v-else>
                  <a data-toggle="tab" data-tabs-content="signform-tabs"
                    data-tabs-value="sign-in-panel" id="start-learning-button">
                    Log in <i class="icon icon-gr-user"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="cell">
            <nav class="top-bar">
              <div class="top-bar-title">
                <router-link to="/" class="topbar-logo">
                  <img src="/static/img/grundfos-logo.svg" alt="Grundfos logo">
                </router-link>
              </div>
              <div class="top-bar-right">
                <img src="/static/img/grundfos-search.png" alt="Grundfos search form">
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="grid-container">
        <div class="grid-x">
          <div class="cell">
            <ul class="menu">
              <li>
                <a href="https://www.grundfos.com/products.html">Products</a>
              </li>
              <li>
                <a href="https://www.grundfos.com/market-areas.html">Market areas</a>
              </li>
              <li>
                <a href="https://www.grundfos.com/cases.html">Cases</a>
              </li>
              <li>
                <a href="https://www.grundfos.com/service-support.html">Service & Support</a>
              </li>
              <li class="active">
                <a href="#">Training</a>
              </li>
              <li>
                <a href="https://www.grundfos.com/about-us.html">About Grundfos</a>
              </li>
              <li>
                <a href="https://www.grundfos.com/how-to-buy.html">How to buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'navbar-partial',
  };
</script>

<style lang="scss" scoped>

  .header-top {
    background-color: $corporate-blue;
  }

  .header-bottom {
    border-color: $gray-5;
    border-style: solid;
    border-width: rem-calc(1 0);
    background-color: $gray-3;

    .menu {
      li {
        &:first-child {
          a {
            padding-left: 0;
          }
        }

        &.active {
          a {
            border-bottom: 4px solid $blue-3-light;
          }
        }

        a {
          background: none;
          border-bottom: 4px solid transparent;
          color: $black;
          font-size: rem-calc(12);
          font-weight: bold;
          padding: rem-calc(16 11 12 11);
        }
      }
    }
  }

  .icon {
    color: $white;
  }

  .top-navigation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .menu {
      a {
        color: $blue-3-lighter;
      }

      li {
        &:first-child {
          a {
            padding-left: 0;
          }
        }

        &:last-child {
          a {
            padding-right: 0;
          }
        }
      }
    }
  }

  .top-bar {
    &-title {
      .topbar-logo {
        img {
          width: rem-calc(218);
        }
      }
    }

    .menu {
      background-color: transparent;
      > li {
        > a {
          color: $white;
        }
      }
    }

    .button {
      background-color: $white;
      color: $primary-color;

      &:hover {
        background-color: $light-gray;
      }
    }
  }
</style>
