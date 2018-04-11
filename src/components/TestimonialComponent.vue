<template>
  <div class="cell auto card card--stripe-top">
    <div class="card-divider">
      <div class="media-object">
        <div class="media-object-section">
          <img :src="avatar" :alt="name + ' ' + surname" class="radius" width="50">
        </div>
        <div class="media-object-section">
          <p class="h6 margin-bottom-0 font-bold">{{ name }} {{ surname }}</p>
          <p>{{ profession }}</p>
        </div>
      </div>
    </div>
    <div class="card-section">
      <blockquote class="margin-bottom-1">
        {{ message }}
      </blockquote>
      <!--<div class="text-right">-->
        <!--<a href="#" class="button margin-bottom-0">Read {{ name }}'s story &rarr;</a>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testimonial',
    data: () => ({}),
    props: ['name', 'surname', 'profession', 'avatar', 'message'],
  };
</script>

<style lang="scss" scoped>
</style>
