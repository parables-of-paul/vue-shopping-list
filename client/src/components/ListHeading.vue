<template>
<p class="listHeading" :class="listClass"><slot></slot>{{title}}</p>
</template>

<script>
export default {
    name: "ListHeading",
    components: {
    },
    props: {
        title: String,
        listClass: String
    },
}
</script>

<style>
p {
    font-size: 1.5rem;
}
</style>