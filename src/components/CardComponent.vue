<template>
  <div></div>
</template>

<script>
  export default {
    name: 'card-component',
  };
</script>

<style lang="scss" scoped>
  .card {
    &.course-card {
      position: relative;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          transition: 280ms transform ease-in-out;
          transform: scale(1);
          display: inline-block;
        }
        &:hover {
          cursor: pointer;
          i {
            transform: scale(1.2);
          }
        }
      }
    }
  }
</style>
