<template>
      <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
<ul>
  <ListHeading @click="catDeclare('bath', refreshData())" title="Bathroom Items" listClass="bathListProductsHeader"><img src="../assets/bathIcon.png" class="ten-fluid" /></ListHeading>
  <ListBody @killFn="destroyBathItem(refreshData())" :shoppingData="bathItemsData" listClass="bathListProducts" ref="bathBody"/>
</ul>
<ul>
  <ListHeading @click="catDeclare('fruit', refreshData())" title="Fruit & Veg Items" listClass="fruitListProductsHeader"><img src="../assets/fruitbowl.png" class="ten-fluid" /></ListHeading>
  <ListBody @killFn="destroyFruitItem(refreshData())" :shoppingData="fruitItemsData" listClass="fruitListProducts" ref="fruitBody"/>
</ul>
<ul>
  <ListHeading @click="catDeclare('fridge', refreshData())" title="Fridge Items" listClass="fridgeListProductsHeader"><img src="../assets/fridgeicon.png" class="ten-fluid" /></ListHeading>
  <ListBody @killFn="destroyFridgeItem(refreshData())" :shoppingData="fridgeItemsData" listClass="fridgeListProducts" ref="fridgeBody"/>
</ul>
<ul>
  <ListHeading @click="catDeclare('freezer', refreshData())" title="Freezer Items" listClass="freezerListProductsHeader"><img src="../assets/freezerIcon.png" class="ten-fluid" /></ListHeading>
  <ListBody @killFn="destroyFreezerItem(refreshData())" :shoppingData="freezerItemsData" listClass="freezerListProducts" ref="freezerBody"/>
</ul>
<ul>
  <ListHeading @click="catDeclare('dry', refreshData())" title="Dry Goods" listClass="bakingListProductsHeader"><img src="../assets/bakingIcon.png" class="ten-fluid" /></ListHeading>
  <ListBody @killFn="destroyDryItem(refreshData())" :shoppingData="dryItemsData" listClass="bakingListProducts" ref="dryBody"/>
</ul>
<ul>
  <ListHeading @click="catDeclare('misc', refreshData())" title="Misc. Items" listClass="listProductsHeader"><img src="../assets/miscIcon.png" class="ten-fluid" /></ListHeading>
  <ListBody @killFn="destroyMiscItem(refreshData())" :shoppingData="miscItemsData" listClass="listProducts" ref="miscBody"/>
</ul>
      </div>
      </div>
</template>

<script>
/* import API functions for each category in database */
import ListHeading from './ListHeading.vue'
import ListBody from './ListBody.vue'
import {misc_api} from '../../helpers/helpers'
import {bath_api} from '../../helpers/helpers'
import {fridge_api} from '../../helpers/helpers'
import {fruit_api} from '../../helpers/helpers'
import {freeze_api} from '../../helpers/helpers'
import {dry_api} from '../../helpers/helpers'

export default {
    name: "ListTray",
    components: {
        ListHeading,
        ListBody
    },
    data() {
      return {
        /*empty arrays for database data to populate */
        miscItemsData: [],
        bathItemsData: [],
        fridgeItemsData: [],
        freezerItemsData: [],
        fruitItemsData: [],
        dryItemsData: [],
        catValue: '',
        productToDestroy: '',
      };
    },
    async created() {
      this.miscItemsData = await misc_api.getItems();
      this.bathItemsData = await bath_api.getBathItems();
      this.fruitItemsData = await fruit_api.getFruitItems();
      this.fridgeItemsData = await fridge_api.getFridgeItems();
      this.freezerItemsData = await freeze_api.getFreezerItems();
      this.dryItemsData = await dry_api.getDryItems();
    },
    methods: {
      async refreshData(){
      this.miscItemsData = await misc_api.getItems();
      this.bathItemsData = await bath_api.getBathItems();
      this.fruitItemsData = await fruit_api.getFruitItems();
      this.fridgeItemsData = await fridge_api.getFridgeItems();
      this.freezerItemsData = await freeze_api.getFreezerItems();
      this.dryItemsData = await dry_api.getDryItems();
      this.miscItemsData = await misc_api.getItems();
      console.log('data refreshed');
    },
      /* function to pass bathroom lh click up to mainTray */
      catDeclare(String, fn){
        let lhClicked = String;
        if(lhClicked === 'bath'){
        console.log('function fired from bath lh');
        this.$emit('catBathToMainTray');
        fn
        } else if(lhClicked === 'fruit'){
        console.log('function fired from fruit lh');
        this.$emit('catFruitToMainTray');
        fn
        } else if(lhClicked === 'fridge'){
        console.log('function fired from fridge lh');
        this.$emit('catFridgeToMainTray');
        fn
        } else if(lhClicked === 'freezer'){
        console.log('function fired from freezer lh');
        this.$emit('catFreezerToMainTray');
        fn
        } else if(lhClicked === 'dry'){
        console.log('function fired from dry lh');
        this.$emit('catDryToMainTray');
        fn
        } else if(lhClicked === 'misc'){
        console.log('function fired from misc lh');
        this.$emit('catMiscToMainTray');
        fn
        }
      },

        destroyBathItem(refreshFn){
        this.productToDestroy = this.$refs.bathBody.dataId;
        this.productName = this.$refs.bathBody.name;
        console.log(this.productToDestroy + ' passed to variable')
        async function onDestroyBath(id, name) {
          const sure = window.confirm('Are you sure you want to delete ' + name +'?');
          if(!sure) return;
          await bath_api.deleteBathItem(id);
          console.log('async fn complete ' + id + ' deleted')
        }
        onDestroyBath(this.productToDestroy, this.productName)
        refreshFn
        },

        destroyFruitItem(refreshFn){
        this.productToDestroy = this.$refs.fruitBody.dataId;
        this.productName = this.$refs.fruitBody.name;
        console.log(this.productToDestroy + ' passed to variable')
        async function onDestroyFruit(id, name) {
          const sure = window.confirm('Are you sure you want to delete ' + name +'?');
          if(!sure) return;
          await fruit_api.deleteFruitItem(id);
          console.log('async fn complete ' + id + ' deleted')
        }
        onDestroyFruit(this.productToDestroy, this.productName)
        refreshFn
        },

        destroyFridgeItem(refreshFn){
        this.productToDestroy = this.$refs.fridgeBody.dataId;
        this.productName = this.$refs.fridgeBody.name;
        console.log(this.productToDestroy + ' passed to variable')
        async function onDestroyFridge(id, name) {
          const sure = window.confirm('Are you sure you want to delete ' + name +'?');
          if(!sure) return;
          await fridge_api.deleteFridgeItem(id);
          console.log('async fn complete ' + id + ' deleted')
        }
        onDestroyFridge(this.productToDestroy, this.productName)
        refreshFn
        },

        destroyFreezerItem(refreshFn){
        this.productToDestroy = this.$refs.freezerBody.dataId;
        this.productName = this.$refs.freezerBody.name;
        console.log(this.productToDestroy + ' passed to variable')
        async function onDestroyFreezer(id, name) {
          const sure = window.confirm('Are you sure you want to delete ' + name +'?');
          if(!sure) return;
          await freeze_api.deleteFreezerItem(id);
          console.log('async fn complete ' + id + ' deleted')
        }
        onDestroyFreezer(this.productToDestroy, this.productName)
        refreshFn
        },

        destroyDryItem(refreshFn){
        this.productToDestroy = this.$refs.dryBody.dataId;
        this.productName = this.$refs.dryBody.name;
        console.log(this.productToDestroy + ' passed to variable')
         async function onDestroyDry(id, name) {
          const sure = window.confirm('Are you sure you want to delete ' + name +'?');
          if(!sure) return;
          await dry_api.deleteDryItem(id);
          console.log('async fn complete ' + id + ' deleted')
        }
        onDestroyDry(this.productToDestroy, this.productName)
        refreshFn
        },

        destroyMiscItem(refreshFn){
        this.productToDestroy = this.$refs.miscBody.dataId;
        this.productName = this.$refs.miscBody.name;
        console.log(this.productToDestroy + ' passed to variable')
        async function onDestroyMisc(id, name) {
          const sure = window.confirm('Are you sure you want to delete ' + name +'?');
          if(!sure) return;
          await misc_api.deleteItem(id);
          console.log('async fn complete ' + id + ' deleted')
        }
        onDestroyMisc(this.productToDestroy, this.productName)
        refreshFn
        },
        
    },
    emits: ['catBathToMainTray', 'catFruitToMainTray', 'catFridgeToMainTray', 'catFreezerToMainTray', 'catDryToMainTray', 'catMiscToMainTray']
}
</script>

<style>
.listIcon {
    width: 20px;
    height: auto;
}
</style>