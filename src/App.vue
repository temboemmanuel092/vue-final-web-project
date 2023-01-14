<script setup>
import {RouterView} from "vue-router"
import Nav from './components/Nav.vue';
import HomeView from './views/HomeView.vue';
import ServicesView from './views/ServicesView.vue';
import SignUpView from "./views/SignUpView.vue";
import TrackingView from "./views/TrackingView.vue";
import Footer from "./components/Footer.vue";
</script>



<template>
  <div>
    <Nav />
    <RouterView/>
   

  </div>

</template>