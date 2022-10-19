<template>
  <div id="app">
    <Navbar />
    <!-- <Footer/> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/Navbar'

export default {
  components:{
    Navbar,
}
}
</script>

<style>
#app{
  background: #ccc;
  height: 1000px;
  padding:0;
	margin:0;
}
</style>