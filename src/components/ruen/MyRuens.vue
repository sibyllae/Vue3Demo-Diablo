<template>
    <section class="container">
        <div class="row">
            <div class="col-1 list">
                <ul class="">
                    <li><button>符文介紹</button></li>
                    <li><button>符文介紹</button></li>
                    <li><button>符文介紹</button></li>
                    <li><button>符文介紹</button></li>
                    <li><button>符文介紹</button></li>
                </ul>
            </div>
            <div class="col-11 contents">
                <Ruens></Ruens>
            </div>
        </div>
    </section>
</template>
<script setup>
  import Ruens from "./Ruens.vue";
</script>
<style scoped>
    .list{
        margin-top: 1%;
        height: 500px;
        /* border: 2px red solid; */
        /* border-right:2px gray solid ; */
        padding: 0px 0px;
    }

    .list > ul >li{
        color: red;
        text-align: center;
        margin: 80px 0;
        font-size: 1.2rem;
    }
    .contents{
        margin-top: 1%;
        border-left: 2px gray solid;
        height: 900px;
    }
</style>