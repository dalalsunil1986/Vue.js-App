<template >
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th style="width:10%">Delete Person</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="user in persons_list" :key="user.id">
          <td>{{user.personId}}</td>
          <td>{{user.personName}}</td>
          <td>{{user.personEmail}}</td>
          <td>{{user.personAge}}</td>
          <td><button class="btn btn-danger" name="button" v-on:click="deletePerson(user.personId)">Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      persons_list : [],
    }
  },
  methods :{

    getAllPersons : function(){
      // Using Axios Method
      axios.get('http://pcmoab01:8081/webApi/persons/').then((response) => {
        this.persons_list = response.data;
      }).catch( error => { console.log(error); });

    },
    deletePerson : function(personId) {
      axios.delete('http://pcmoab01:8081/webApi/persons/' + personId).then((response) => {

        this.getAllPersons();

      }).catch(error => {console.log(error); });
    }
  },
  mounted(){
    this.getAllPersons();
  }
}
</script>
