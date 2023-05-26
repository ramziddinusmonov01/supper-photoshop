<template>
    <div class="body">
        <div class="container congratulation-container">
            <div class="bubbles">
                <div style="--i:11;"></div>
                <div style="--i:12;"></div>
                <div style="--i:24;"></div>
                <div style="--i:10;"></div>
                <div style="--i:14;"></div>
                <div style="--i:23;"></div>
                <div style="--i:18;"></div>
                <div style="--i:16;"></div>
                <div style="--i:19;"></div>
                <div style="--i:20;"></div>
                <div style="--i:22;"></div>
                <div style="--i:25;"></div>
                <div style="--i:18;"></div>
                <div style="--i:21;"></div>
                <div style="--i:15;"></div>
                <div style="--i:13;"></div>
                <div style="--i:26;"></div>
                <div style="--i:17;"></div>
                <div style="--i:13;"></div>
                <div style="--i:28;"></div>
                <div style="--i:11;"></div>
                <div style="--i:12;"></div>
                <div style="--i:24;"></div>
                <div style="--i:10;"></div>
                <div style="--i:14;"></div>
                <div style="--i:23;"></div>
                <div style="--i:18;"></div>
                <div style="--i:16;"></div>
                <div style="--i:19;"></div>
                <div style="--i:20;"></div>
                <div style="--i:22;"></div>
                <div style="--i:25;"></div>
                <div style="--i:18;"></div>
                <div style="--i:21;"></div>
                <div style="--i:15;"></div>
                <div style="--i:13;"></div>
                <div style="--i:26;"></div>
                <div style="--i:17;"></div>
                <div style="--i:13;"></div>
                <div style="--i:28;"></div>
                <div style="--i:11;"></div>
                <div style="--i:12;"></div>
                <div style="--i:24;"></div>
                <div style="--i:10;"></div>
                <div style="--i:14;"></div>
                <div style="--i:23;"></div>
                <div style="--i:18;"></div>
                <div style="--i:16;"></div>
                <div style="--i:19;"></div>
                <div style="--i:20;"></div>
                <div style="--i:22;"></div>
                <div style="--i:25;"></div>
                <div style="--i:18;"></div>
                <div style="--i:21;"></div>
                <div style="--i:15;"></div>
                <div style="--i:13;"></div>
                <div style="--i:26;"></div>
                <div style="--i:17;"></div>
                <div style="--i:13;"></div>
                <div style="--i:28;"></div>
                <div style="--i:11;"></div>
                <div style="--i:12;"></div>
                <div style="--i:24;"></div>
                <div style="--i:10;"></div>
                <div style="--i:14;"></div>
                <div style="--i:23;"></div>
                <div style="--i:18;"></div>
                <div style="--i:16;"></div>
                <div style="--i:19;"></div>
                <div style="--i:20;"></div>
                <div style="--i:22;"></div>
                <div style="--i:25;"></div>
                <div style="--i:18;"></div>
                <div style="--i:21;"></div>
                <div style="--i:15;"></div>
                <div style="--i:13;"></div>
                <div style="--i:26;"></div>
                <div style="--i:17;"></div>
                <div style="--i:13;"></div>
                <div style="--i:28;"></div>
            </div>
            <div class="cheack-box">
                <span></span>
                <span></span>
            </div>
            <h1 class="congratulations-title">Tabriklaymiz!</h1>
            <p class="congratulations-desc">Ro'yhatdan o'tganingiz uchun rahmat! Tez orada operatorimiz siz bilan bog'lanadi!</p>
            <router-link class="congratulation-link-home" to="/">Bosh sahifaga qaytish</router-link>
            <p class="congratulations-heading">Bepul darslar kanaliga qo'shiling</p>
            <a class="congratulation-link" href="https://t.me/kompyuter_grafika_darslari">
                <img src="@/assets/images/congratulations-telegram-icone.svg" alt="icone">
                Telegram kanalimizga qo`shiling
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.body{
    background: #052452;
}
 .container{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
 }
 .bubbles{
    position: relative;
    display: flex;
    align-items: center;
 }

 .bubbles div{
    position: relative;
    width: 30px;
    height: 30px;
    background: #e9e8f2;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #234e5844,
                0 0 50px #332d63,
                0 0 100px #332d61;
    animation: backgroundAnime 10s linear infinite;
    animation-duration: calc(120s / var(--i));
    
 }
 .bubbles div:nth-child(even){
    background: #ff2575;
    box-shadow: 0 0 0 10px #ff2575,
                0 0 50px #ff2575,
                0 0 100px #ff2575;
 }

 @keyframes backgroundAnime{
    0%{
        transform: translateY(100vh) scale(0);
    }
    100%{
        transform: translateY(-100vh) scale(1);
    }
 }
</style>