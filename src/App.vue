<template>
  <div id="app">
    <p>导航：
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <router-link :to="{name: 'Hi1', params: {username: 'yyp'}}">Hi页面1</router-link>
      <router-link to="/hi/hi2">Hi页面2</router-link>
      <router-link to="/params/196/the News is wonderful, today.">Params</router-link>
      <router-link to="/goback">Go Back</router-link>
      <router-link to="/goParams/196/the News is wonderful, today.">Go Params</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/404">测试404</router-link>
      <router-link to="/count">Count</router-link>
    </p>

    <p>{{$route.name}}</p>

    <img src="./assets/logo.png">
    <transition name="fade">
      <router-view ></router-view>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:burlywood;height:300px;"></router-view>

    <button @click="goback">后退</button>
    <button @click="goHome">回到首页</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
