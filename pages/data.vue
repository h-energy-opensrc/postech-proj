<template>
  <section>
    <nav class="pa3 pa4-ns">
      <nuxt-link to="/">
        <a class="link dim black b f6 f5-ns dib mr3" title="Home">Postech Project</a>
      </nuxt-link>
      <nuxt-link to="/data">
        <a class="link dim gray    b f6 f5-ns dib mr3" href="#" title="About">Data</a>
      </nuxt-link>
      <nuxt-link to="/about">
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
      </nuxt-link>
      <nuxt-link to="/team">
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Team</a>
      </nuxt-link>
    </nav>
    <section class="pa3 pa4-ns">
      Data
      <div> 
        <div class="f6" v-for="(data,idx) in datasets[0]" :key="idx"> 
          idx: {{idx}}: {{data}}
          <!-- <span class="">{{data.time}}</span><span>{{data.usage}}</span> -->
        </div>

        <div id="myDiv"><!-- Plotly chart will be drawn inside this DIV --></div>
      </div>
    </section>
  </section>
</template>
<script>
import { database, storage } from '~/plugins/fbConn'
import * as d3 from "d3"

export default {
  name: 'Data',
  data(){
    return{
      datasets : [
        {
          loc:{log:69, lat:96}, 
          csv:"",
          type: "",
          contractKW: 5000,
          addr: "충남 금산군 금성면 대암길 168-37번지",
          purpose: "상업용 라면제조",
          bizName: "(주)쿱서비스(구례)-전기실",
          RefName: "c1"
        },
        {
          loc:{log:73, lat:134}, 
          csv:"",
          type: "",
          contractKW: 850,
          addr: "강원도 춘천시 영서로 2854(사농동)",
          purpose: "관공용 교육행정",
          bizName: "강원도 교육청",
          RefName: "c1"
        },
        {
          loc:{}, 
          csv:"",
          type: "",
          contractKW: 0,
          addr: "충남 금산군 금성면 대암길 168-37번지",
          purpose: "상업용 라면제조",
          bizName: "오크밸리(골프빌리지)",
          RefName: "c1"
        },
        {
          loc:{}, 
          csv:"",
          type: "",
          contractKW: 0,
          addr: "충남 금산군 금성면 대암길 168-37번지",
          purpose: "상업용 라면제조",
          bizName: "오크밸리(스키빌리지)",
          RefName: "c1"
        },
        {
          loc:{}, 
          csv:"",
          type: "",
          contractKW: 0,
          addr: "충남 금산군 금성면 대암길 168-37번지",
          purpose: "상업용 라면제조",
          bizName: "동원건설산업(양재)",
          RefName: "c1"
        },
        {
          loc:{}, 
          csv:"",
          type: "",
          contractKW: 0,
          addr: "충남 금산군 금성면 대암길 168-37번지",
          purpose: "상업용 라면제조",
          bizName: "(주)동원에프앤비빌딩",
          RefName: "c1"
        },
        {
          loc:{}, 
          csv:"",
          type: "",
          contractKW: 0,
          addr: "충남 금산군 금성면 대암길 168-37번지",
          purpose: "상업용 라면제조",
          bizName: "용평리조트",
          RefName: "c1"
        },
      ]
    }
  },
  mounted() {
    console.log(d3)
    var vm = this;
    // var ref = database.ref('data/c1').limitToLast(2)
    // ref.on('value', (snap)=> {
    //   snap.forEach((individual)=> {
    //     console.log(individual.key)
    //     vm.datasets.push(individual.val())
    //   })
    // })
  }
}
</script>
<style></style>