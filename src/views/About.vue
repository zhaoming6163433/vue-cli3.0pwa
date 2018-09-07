<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changetitletest('testvuexabout')">addplus</button>
    {{teststate}}
  </div>
</template>
<script>
// @ is an alias to /src
import { mapActions,mapState } from 'vuex'

export default {
    name: 'about',
    components: {
        
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