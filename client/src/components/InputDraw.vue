<template>
<div class="glassPhase" @click="closeInputDraw()">
  </div>
  <div class="container-fluid my-2 modalFloat mx-auto" id="modal">
    <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 light-bg modalInner mx-auto" id="modalInner">
      <h4 class="closeTag" @click="closeInputDraw()">Close X</h4>
      <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <!-- img tag takes src property from catImgData in data Obj below -->
        <img alt="categoryImage" class="quarter-fluid" :src="this.catImgData" />
      </div >
      <div class="col-lg-4 col-md-4 col-sm-4">
      <form class="pt-5">
      <input class="rounded text-center my-1 d-block mx-auto width100" name="input" type="text" placeholder="enter item here" id="itemInput"/>
      <button @click.prevent="submitItem(this.catValue)" class="rounded neon-green mx-auto width100" type="submit"><strong>+</strong></button>
      </form>
      </div>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <!-- Heading takes category Title as string from data Obj below -->
        <h4>You're adding to {{catStringData}}</h4>
        <select @change="categoryChange()" name="listCategory" id="catSelect" class="rounded text-center no-overflow">
    <option value="" disabled selected>-- Change Category --</option>
    <option value="bath">Bathroom</option>
    <option value="fruit">Fruit & Veg</option>
    <option value="fridge">Fridge</option>
    <option value="freezer">Freezer</option>
    <option value="dry">Dry Goods</option>
    <option value="misc">Misc. Lists</option>    
</select>
      </div >
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import {misc_api} from '../../helpers/helpers'
import {fruit_api} from '../../helpers/helpers'
import {fridge_api} from '../../helpers/helpers'
import {freeze_api} from '../../helpers/helpers'
import {dry_api} from '../../helpers/helpers'
import {bath_api} from '../../helpers/helpers'

export default {
    name: "InputDraw",
    components: {
    },
    data() {
      return {
        /* bundle in category icons as component data */
        miscImg: require('../assets/miscIcon.png'),
        bathImg: require('../assets/bathIcon.png'),
        fruitImg: require('../assets/fruitbowl.png'),
        fridgeImg: require('../assets/fridgeicon.png'),
        freezeImg: require('../assets/freezerIcon.png'),
        dryImg: require('../assets/bakingIcon.png'),

        /* set category image and string to prop fed defaults */
        catImgData: this.catImg,
        catStringData: this.catString,
        catValue: this.catVal
      }
    },
    methods: {
      /* function for passing draw close event up to parent component "App" and removes logoFlip class for animation reset */
      closeInputDraw(){
        this.$emit('drawClose01');
        logo.classList.remove('logoFlip');
      },
      /* function for category change once modal is open, trigged by @change on the select element */
      categoryChange(){
        let catSelectVar = document.getElementById('catSelect'); /*identify select tag and store in variable*/
        catSelectVar = (catSelectVar.value); /* update variable to select tags selected value */
         if(catSelectVar === 'bath') {      /*if logic to update string data and img data based on selection */
          this.catImgData = this.bathImg
          this.catStringData = 'Bathroom'
          this.catValue = catSelectVar
          console.log('bath cat called');
        } else if(catSelectVar === 'fruit'){
          this.catImgData = this.fruitImg
          this.catStringData = 'Fruit & Veg'
          this.catValue = catSelectVar
          console.log('fruit cat called');
        } else if(catSelectVar === 'fridge') {
            this.catImgData = this.fridgeImg
            this.catStringData = 'Fridge Items'
            this.catValue = catSelectVar
            console.log('fridge cat called');
        } else if(catSelectVar === 'freezer') {
            this.catImgData = this.freezeImg
            this.catStringData = 'Freezer Items'
            this.catValue = catSelectVar
            console.log('freezer cat called');
        } else if(catSelectVar === 'dry') {
            this.catImgData = this.dryImg
            this.catStringData = 'Dry Goods'
            this.catValue = catSelectVar
            console.log('dry cat called');
        } else if(catSelectVar === 'misc'){
            this.catImgData = this.miscImg
            this.catStringData = 'Misc. Items'
            this.catValue = catSelectVar
        };
        this.catValue = catSelectVar; /*updates catValue Data Object */
        this.$emit('categoryChange'); /*triggers event that category has been changed to root Component*/
      },
      /* a function for creating new items across all categories, this.catValue is fed in as an argument to submitItem() */
      submitItem(category){
        let input = document.getElementById('itemInput'); /*identify input field */
        input = input.value;  /* zone in on input field's string value */
        async function submission(item) { /*the submission function takes item as the argument */
        document.getElementById('modalInner').classList.remove('success-flash');
          if(category === 'misc'){        /*an if/else conditional chain to identify which list to submit the item to based on this.catValue served as 'category' from the submitItem() argument */
        const res = await misc_api.createItem({product: item}); /*create item in misc collection */
        } else if(category === 'fruit'){
          const res = await fruit_api.createFruitItem({product: item}); /*create item in fruit collection */
        } else if(category === 'fridge'){
          const res = await fridge_api.createFridgeItem({product: item}); /*create item in fridge collection */
        } else if(category === 'freezer'){
          const res = await freeze_api.createFreezerItem({product: item}); /*create item in freezer collection */
        } else if(category === 'dry') {
          const res = await dry_api.createDryItem({product: item}); /*create item in dry collection */
        } else if(category === 'bath') {
          const res = await bath_api.createBathItem({product: item}); /*create item in bath collection */
        }
        document.getElementById('modalInner').classList.add('success-flash');
      }
      this.$emit('callRefresh');
      submission(input); /*actually calls the previously declared async submission() function that takes item as an argument and feeds it the variable input, which was earlier declared as the input fields string value in the enveloping submitItem() function */
      }
    },
    emits: ['drawClose01', 'categoryChange', 'callRefresh'],
    props: {
      catImg: String,
      catString: String,
      catVal: String
    }
}
</script>

<style>
.closeTag{
  position: absolute;
  right: 35px;
  top: -45px;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  padding: 10px;
}

.closeTag:hover {
  position: absolute;
  right: 35px;
  top: -48px;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  padding: 10px;
  text-decoration: underline;
}

.neon-green{
  background-color: #0f9b00;
  color: #ffffff;
  border: solid 1px #0f9b00;
}
@media(min-width: 320px){
.no-overflow {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
  font-size: 12px;
}
.closeTag{
  position: absolute;
  right: 35px;
  top: -48px;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  padding: 10px;
}
}

.glassPhase {
  height: 100vh;
  width: 100vw;
  filter: blur(8px);
  background-image: linear-gradient(135deg, #b0e2ff, #e5e5e5, #fff, #b0e2ff);
  opacity: 0.6;
  position: fixed;
  top: 0;
  z-index: 1599;
}

.modalFloat {
  position: fixed;
  z-index: 1600;
  top: 30%;
  left: 10%;
  right: 10%;
  max-width: 80%;
}

.modalInner {
  border-radius: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

@keyframes success {
  0%{
    background-color: #e5e5e5;
  }
  10% {
    background-color: #0f9b00;
  }
  100% {
    background-color: #e5e5e5;
  }
}

@-moz-keyframes success {
  0%{
    background-color: #e5e5e5;
  }
  10% {
    background-color: #0f9b00;
  }
  100% {
    background-color: #e5e5e5;
  }
}

@-o-keyframes success {
  0%{
    background-color: #e5e5e5;
  }
  40% {
    background-color: #0f9b00;
  }
  100% {
    background-color: #e5e5e5;
  }
}

@-webkit-keyframes success {
  0%{
    background-color: #e5e5e5;
  }
  40% {
    background-color: #0f9b00;
  }
  100% {
    background-color: #e5e5e5;
  }
}

.success-flash {
  animation: success 1s linear 1;
  -moz-animation: success 1s linear 1;
  -o-animation: success 1s linear 1;
  -webkit-animation: success 1s linear 1;
}

.light-bg{
  background-color: #e5e5e5;
}

</style>