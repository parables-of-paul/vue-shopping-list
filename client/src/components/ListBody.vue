<template>
    <li :class="listClass" class="listItem" :key="item.id" v-for="item in shoppingData" @click="handItemID(`${item._id}`, `${item.product}`)">
          {{item.product}}
    </li>
</template>

<script>
export default {
    name: "ListBody",
    components: {
    },
    props: {
            listClass: String,
            shoppingData: Array,
    },
    data(){
        return {
            dataId: '',
            name: ''
        }
    },    
    methods: {
        handItemID(id, product){
            this.name = product
            this.dataId = id
            this.$emit('killFn')
            console.log(id + ' from list body');

        }
    },
    emits: ['killFn']
}
</script>

<style>

</style>