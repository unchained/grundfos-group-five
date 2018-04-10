<template>
  <div class="cell auto card">
    <div class="card-divider">
      <div class="media-object">
        <div class="media-object-section">
          <img :src="avatar" class="radius" width="50">
        </div>
        <div class="media-object-section">
          <p class="h6 margin-bottom-0 font-bold">{{ name }} {{ surname }}</p>
          <p>{{ profession }}</p>
        </div>
      </div>
    </div>
    <div class="card-section">
      <blockquote class="margin-bottom-2">
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
</style>
