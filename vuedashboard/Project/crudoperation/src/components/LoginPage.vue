<template>
<div id="login">
    <!-- <Burger/> -->
    <!-- <Menubar /> -->
    <h1>Login</h1>
    <label>User Name</label>
    <input type="email" v-model="message"/>
    <br/>

    <label>Passowrd</label>
    <input type="password" v-model="password"/>
    <br/>
        
      <router-link to="/dashboard">Dashboard</router-link> |


    <button @click="incrementCount()"> Login </button>

    


</div>
  <router-view/>
</template>

<script>
import Burger from './menu/Burger.vue'
// import Menubar from './menu/Menubar.vue'
export default {
  components: {
    Burger,
    // Menubar
  },
    data() {
    return {
      message: '',
      password: '',
      toggle: true
    }
  },
  methods:{
    incrementCount() {
      if(this.message == this.password){
        console.log("Same text entered")
      }
    }
  }
  
}
</script>