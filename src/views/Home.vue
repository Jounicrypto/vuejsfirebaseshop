<template>
 <div class="container">
   <br>
   <br>
  <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat consectetur illo numquam dolorem non architecto magnam eaque qui quis, saepe, doloremque et soluta totam atque maiores fugiat facere porro quisquam.</p>
    <!-- <button @click="goToHome()" class="btn btn-primary">Go somewhere</button> -->
  </div>
</div>
<Footer/>
 </div>
</template>

<script>
import Footer from './Footer.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Footer
},
  methods:{
   goToProducts(){
   this.$router.push('/home'); 
      }
  }
}
</script>

<style>

</style>