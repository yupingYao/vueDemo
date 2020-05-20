<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <h3>{{count}}</h3>
    <h3>{{$store.state.a.count}}</h3>
    <div>
      <button @click="$store.commit('add',5)">+5</button>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
      <button @click="reduce">--</button>
      <button @click="addAction">addAction</button>
      <button @click="reduceAction">reduceAction</button>
    </div>
  </div>
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default{
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  /* computed: {
    count: () => {
      return this.$store.state.count
    }
  }, */
  /* computed: mapState({
    count: state => state.count
  }), */
  /* computed: mapState(['count']), */
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count']),
    /* count () {
      return this.$store.getters.count
    } */
    count () {
      return this.$store.state.a.count
    }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>

<style scoped>

</style>
