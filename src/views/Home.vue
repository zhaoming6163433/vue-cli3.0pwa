<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="changetitletest('testvuex')">addplus</button>
    {{teststate}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions,mapState } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    computed: {
        ...mapState([
            'teststate'
        ]),
    },
    methods: {
        ...mapActions({
            changetitletest: "changetitletest"
        })
    }
}
</script>
