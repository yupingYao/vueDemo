<template>
    <div class="hi">
      <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      message: 'Hi, I am Vue!'
    }
  }
}
</script>

<style scoped>
    .hi{
      color:green;
    }
</style>
