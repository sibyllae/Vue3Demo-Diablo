<template>
    <header class="container">
        <nav class="row">
            <div class="col-1 logo">
                <router-link to="/APE.Diablo2R"><img src="/src/assets/logo.svg" alt=""></router-link>

            </div>
            <div class="col-11">
                <ul class="d-flex justify-content-center">
                    <li><router-link to="/APE.Diablo2R/Ruens">符文專區</router-link></li>
                    <li><a href="">裝備專區</a></li>
                    <li><a href="">合成配方</a></li>
                    <li><a href="">其他資訊</a></li>
                    <li><a href="">角色養成</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script setup>

</script>
<style scoped>
    header{
        margin-top: 1%;
    }
    .logo > a > img{
        height: 100px;
        width: 100px;
    }
    ul > li{
        line-height: 100px;
        margin: 0 50px;
    }
</style>