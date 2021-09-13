<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
              <Header @openDraw01="openInputDrawHeader()"/>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12" id="listTrayCol">
              <ListTray ref="listTray" @catBathToMainTray="catBathRoot()" @catFruitToMainTray="catFruitRoot()" @catFridgeToMainTray="catFridgeRoot()" @catFreezerToMainTray="catFreezerRoot()" @catDryToMainTray="catDryRoot()" @catMiscToMainTray="catMiscRoot()"/>
        </div>
        </div>
          </div>
</template>

<script>

import Header from './Header.vue';
import ListTray from './ListTray.vue';
import InputDraw from './InputDraw.vue';

export default {
    name: 'MainTray',
    components: {
        Header,
        ListTray,
        InputDraw
    },
    props: {
      frostedGlassProp: Boolean,
    },
    methods: {
        openInputDrawHeader() {
            this.$emit('openDraw02')
            this.frostedGlassData = !this.frostedGlassData;
        },
        callRefresh(){
            this.$refs.listTray.refreshData();
        },
        /*function to pass Category declaration by click on bath lh to root app component */
        catBathRoot(){
            console.log('function fired from maintray Bath Emit');
            this.$emit('catBathToRoot');
        },
        catFruitRoot(){
            console.log('function fired from maintray Fruit Emit');
            this.$emit('catFruitToRoot');
        },
        catFridgeRoot(){
            console.log('function fired from maintray Fridge Emit');
            this.$emit('catFridgeToRoot');
        },
        catFreezerRoot(){
            console.log('function fired from maintray Freezer Emit');
            this.$emit('catFreezerToRoot');
        },
        catDryRoot(){
            console.log('function fired from maintray Dry Emit');
            this.$emit('catDryToRoot');
        },
        catMiscRoot(){
            console.log('function fired from maintray Misc Emit');
            this.$emit('catMiscToRoot');
        },
    },
    data() {
        return {
            frostedGlassData: this.frostedGlassProp,
        }
    },
    emits: ['openDraw02',  'catBathToRoot', 'catFruitToRoot', 'catFridgeToRoot', 'catFreezerToRoot', 'catDryToRoot', 'catMiscToRoot']
}
</script>

<style>
</style>