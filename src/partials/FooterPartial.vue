<template>
  <footer>
    <div class="grid-container">
      <div class="grid-x position-relative">
        <div class="cell auto brand text-right">
          <img src="/static/img/bethinkinnovate.png" alt="Be think innovate">
        </div>
        <div class="cell small-12">
          <strong class="footer-title">Grundfos</strong>
          <address>
            <p>
              Poul Due Jensens Vej 7<br>
              DK-8850 Bjerringbro, Denmark<br>
            </p>
          </address>
          <p>
            Tel.: +45 87501400 | Fax +45 87501402
          </p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-partial',
  };
</script>

<style lang="scss" scoped>
  footer {
    background-color: $corporate-blue;
    color: $white;
    padding-bottom: rem-calc(74);

    .brand {
      border-bottom: rem-calc(1) solid $blue-2;
      padding: rem-calc(15);
    }

    .footer-title {
      display: block;
      margin: rem-calc(10 0 8 0);
      text-transform: uppercase;
    }

    address, p {
      color: $blue-3-lighter;
      font-style: normal;
    }
  }
</style>
