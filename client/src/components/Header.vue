<template>
<div class="container-fluid" @click="openInputDrawHeader()">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4">
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <img class="quarter-fluid rounded-circle mx-auto" :src="logo" id="logo"/>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "Header",
    components: {
    },
data() {
    return {
        logo: require('../assets/shoppingicon.png')
    }
},
methods: {
    openInputDrawHeader() {
            this.$emit('openDraw01')
            let logo = document.getElementById('logo');
            logo.classList.add('logoFlip');
        }
},
emits: ['openDraw01']
}
</script>

<style>

@keyframes coinflip {
    0%{
        transform: rotateY(0deg) scale(100%);
    }

    50%{
        transform: rotateY(585deg) scale(140%);
    }

    100%{
        transform: rotateY(1170deg) scale(100%);
    }
}

@-o-keyframes coinflip {
    0%{
        transform: rotateY(0deg) scale(100%);
    }

    50%{
        transform: rotateY(585deg) scale(140%);
    }

    100%{
        transform: rotateY(1170deg) scale(100%);
    }
}

@-webkit-keyframes coinflip {
    0%{
        transform: rotateY(0deg);
    }

    50%{
        transform: rotateY(585deg);
    }

    100%{
        transform: rotateY(1170deg);
    }
}



@-moz-keyframes coinflip {
    0%{
        transform: rotateY(0deg) scale(100%);
    }

    50%{
        transform: rotateY(585deg) scale(140%);
    }

    100%{
        transform: rotateY(1170deg) scale(100%);
    }
}

.logoFlip{
    display: block !important;
    animation: coinflip 0.5s 1;
}


</style>