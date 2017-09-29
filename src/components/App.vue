<template>
  <div id="app">
    <home-header></home-header>
    <div class="requests" style="color:white">
      <router-link to="/personlist" class="btn btn-info">List of Persons</router-link>
      <router-link to="/createperson" class="btn btn-info">Add Person</router-link>
    </div>

    <br>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
}
</style>
