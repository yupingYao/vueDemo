<template>
    <div class="hi">
      <div>用户：{{$route.params.username}}</div>
      <h1>{{message}}</h1>
      <router-view></router-view>
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
