<template>
    <div class="hi">
      <h1>{{msg1}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg1: 'Hi, I am Hi1!'
    }
  }
}
</script>

<style scoped>
    .hi{
      color:green;
    }
</style>
