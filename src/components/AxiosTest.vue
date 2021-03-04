<template>
  <div>
    <!-- <button @click="loginUser1">Load</button>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    loginUser() {
      axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
          if(response.data.id === 1) {
            axios.get("https://jsonplaceholder.typicode.com/todos")
              .then(response => {
                this.items = response.data;
              })
          }
        })
        .catch(err => console.log(err))
    },
    async loginUser1() {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        if(response.data.id === 1) {
          let list =  await axios.get("https://jsonplaceholder.typicode.com/todos");
          this.items = list.data;
        } 
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    
  }
}
</script>

<style>

</style>
