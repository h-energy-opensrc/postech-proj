<template>
  <section>
    <nav class="pa3 pa4-ns">
      <nuxt-link to="/">
        <a class="link dim black b f6 f5-ns dib mr3" title="Home">Postech Project</a>
      </nuxt-link>
      <nuxt-link to="/data">
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">Data</a>
      </nuxt-link>
      <nuxt-link to="/about">
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
      </nuxt-link>
      <nuxt-link to="/team">
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Team</a>
      </nuxt-link>
    </nav>
    <section class="pa3 pa4-ns">
      {{datasets}}
      <h3> Postech Project </h3>
      <div class="mv3"> 
        <div class="f4 title"> Dataset </div>
        <button> Dataset </button>  
      </div>
      <div class="mv3"> 
        <div class="f4 title"> Modules </div>
        <button> Build Module </button>
      </div>
      <div class="mv3"> 
        <div class="f4 title"> Testing </div>
        <button> Data </button>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Main',
  computed: {
     ...mapGetters(
      {
        datasets: 'datasetModule/getAllDatasets'
      }
    )
  },
  data() {
    return {
      online: true
    }
  },
  mounted() {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    }
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
}
</script>

<style>

</style>
