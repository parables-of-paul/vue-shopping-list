<template>
<MainTray ref="mainTray" @openDraw02="toggleInputDrawX(callRefreshRoot())" @catBathToRoot="updateCatBath()" @catFruitToRoot="updateCatFruit()" @catFridgeToRoot="updateCatFridge()" @catFreezerToRoot="updateCatFreezer()" @catDryToRoot="updateCatDry()" @catMiscToRoot="updateCatMisc()" :frostedGlassProp="true" />
<InputDraw v-if="inputDrawOpen" @callRefresh="callRefreshRoot()" @drawClose01="toggleInputDrawX(callRefreshRoot())" @categoryChange="updateGlobalCat()" ref="inputDraw" :catString="catChoice.title" :catImg="catChoice.img" :catVal="catChoice.value"/>
</template>

<script>

import MainTray from './components/MainTray.vue';
import InputDraw from './components/InputDraw.vue';

export default {
  name: 'App',
  components: {
    MainTray,
    InputDraw,
  },
  data() {
    return {
      inputDrawOpen: false,
      catChoice: {
        title: 'Misc. Items',
        img: require('./assets/miscIcon.png'),
        value: 'misc'
      }
    }
  },
  methods: {
    callRefreshRoot(){
      this.$refs.mainTray.callRefresh();
    },
    /*function to open input draw and display component */
    toggleInputDrawX(fn){
      this.inputDrawOpen = !this.inputDrawOpen;
      fn
    },
    /* prints currently selected category to console */
    updateGlobalCat(){
      this.catChoiceSelect = this.$refs.inputDraw.catValue;
      console.log(this.catChoiceSelect + ' is fed from App.vue component');
    },
    /*function to update category selection to Bathroom Items BEFORE mounting InputDraw */
    updateCatBath(){
      this.catChoice.title = 'Bathroom Items';
      this.catChoice.img = require('./assets/bathIcon.png');
      this.catChoice.value = 'bath';
      this.toggleInputDrawX()
    },
    /*function to update category selection to Fruit Items BEFORE mounting InputDraw */
    updateCatFruit(){
      this.catChoice.title = 'Fruit & Veg Items';
      this.catChoice.img = require('./assets/fruitbowl.png');
      this.catChoice.value = 'fruit';
      this.toggleInputDrawX()
    },
    /*function to update category selection to Fridge Items BEFORE mounting InputDraw */
    updateCatFridge(){
      this.catChoice.title = 'Fridge Items';
      this.catChoice.img = require('./assets/fridgeicon.png');
      this.catChoice.value = 'fridge';
      this.toggleInputDrawX()
    },
    /*function to update category selection to Freezer Items BEFORE mounting InputDraw */
    updateCatFreezer(){
      this.catChoice.title = 'Freezer Items';
      this.catChoice.img = require('./assets/freezerIcon.png');
      this.catChoice.value = 'freezer';
      this.toggleInputDrawX()
    },
    /*function to update category selection to Dry Items BEFORE mounting InputDraw */
    updateCatDry(){
      this.catChoice.title = 'Dry Goods';
      this.catChoice.img = require('./assets/bakingIcon.png');
      this.catChoice.value = 'dry';
      this.toggleInputDrawX()
    },
    /*function to update category selection to Dry Items BEFORE mounting InputDraw */
    updateCatMisc(){
      this.catChoice.title = 'Misc. Items';
      this.catChoice.img = require('./assets/miscIcon.png');
      this.catChoice.value = 'misc';
      this.toggleInputDrawX()
    },
  },
  props: {
      frostedGlassProp: Boolean
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
