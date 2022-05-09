<template>
<div style="display:flex; justify-content:space-between; padding:20px 100px 0px 100px; border:0px solid red">
    <div style="">
      <img width="336" src="/cropped-ic-moe-logo.png">
    </div>
    <div style="">
      <img width="336" src="/aqcs_logo.png">
    </div>

    
  </div>
  <div style="display:flex; justify-content:center; border:0px solid red">
     <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link tag="a" class="nav-item nav-link" to="/home">Home</router-link>
                <router-link tag="a" class="nav-item nav-link" to="/about">About Air Quality</router-link>
            </div>
        </div>
     </nav>
    </div>

    
</template>


<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
  color: green;
}
</style>