<template>
  <div class="appcontent">
    <div class="nav">
      <div class="category-left">
        <CategoryNav class="categoryli"></CategoryNav>
      </div>
      
      <div class="category-right" >
        <div class="avatar" @click="gohome">
          <img class="imgb" src="@/assets/img2.jpg" >
        </div>
      </div>
      <div class="titleimg">
        <img class="imga" src="@/assets/img1.jpg">
      </div>
    </div>
  <div class="viewcotent">
    <h1>Hello App!</h1>
  <p>

    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>

  <router-view></router-view>
  </div>

  </div>
</template>

<script setup>
import CategoryNav from './components/CategoryNav.vue'
import router from './router';
import { RouterLink, RouterView } from 'vue-router'


function gohome(){
  router.push('/about')
  alert('hellow!')
  
}

</script>

<style>
.appcontent { 
  height: 100vh;
  overflow-y: hidden;
}

.nav {
  display:flex;
  z-index: 1;
  position: relative;
  width: 100%;
  height: 20%;
  color: black;
  overflow: hidden;
}

.titleimg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  color: blue;
}

.imga {
  width: 100%;
  object-fit: cover;
  height: 100%;
  color: blueviolet;
  z-index: -1;
  opacity: 0.8;
}
.imgb {
  width: 100%;
  z-index: 3;
  height: 100%;
}


.category-left{
  width: 90%;
  height: 100%;
  float: left;
   z-index: 2;
}
.category-right{
  width: 10%;
  height: 100%;
  color:yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
     z-index: 2;
}
.avatar{
   z-index: 3;
  width: 80%;
  height: 80%;
  overflow: hidden;
  border-radius: 50%;
  color:black;
  background-color: brown;
  margin-top: 7%;
  border:3px solid wheat;
  box-shadow: 0 0 20px -5px;
}

</style>
