<template lang="html">
  <div class="container">
    <h2>Add Person</h2>
    <br>

    <div class="row">
      <div class="form-group col-md-3">
        <label for="personId">Id:</label>
        <input type="text" class="form-control" id="personId" v-model="person.personId">
      </div>
      <div class="form-group col-md-3">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="person.personName">
      </div>
      <div class="form-group col-md-3">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" v-model="person.personEmail">
      </div>
      <div class="form-group col-md-3">
        <label for="age">Age:</label>
        <input type="text" class="form-control" id="age" v-model="person.personAge">
      </div>
      <button class="btn btn-info" v-on:click="addPerson(person)" style="margin-top:25px">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from './listUsers.vue'

export default {
  data(){
    return{
      person : {
        personId : '',
        personName : '',
        personEmail : '',
        personAge : ''
      }
    }
  },
  methods : {
    addPerson : function(person){

      axios.post('http://pcmoab01:8081/webApi/persons/', this.person).then((response) => {
        UserList.methods.getAllPersons();
        this.person = {
          personId : '',
          personName : '',
          personEmail : '',
          personAge : ''
        }
        this.$router.push('/personlist')

      }).catch(error => {console.log(error); });
    }
  }
}
</script>

<style lang="css">
</style>
