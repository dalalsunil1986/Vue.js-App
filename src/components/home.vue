<template lang="html">
  <div class="container">
  <div class="jumbotron">
    <img src="../assets/logo.png" width="60px">
    <h1>Simple Vue.js Project</h1>
    <p>{{msg}}</p>
  </div>
</div>
</template>

<script>
export default {
data(){
  return{
    msg: 'Welcome to our new Person Application using Vue.js'
  }
}

}
</script>

<style lang="css">
</style>
