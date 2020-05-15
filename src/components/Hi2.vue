<template>
    <div class="hi">
      <h1>{{msg2}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg2: 'Hi, I am Hi2!'
    }
  }
}
</script>

<style scoped>
    .hi{
      color:green;
    }
</style>
