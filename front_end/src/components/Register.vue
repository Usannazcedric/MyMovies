<template>
    <h1>register</h1>
    <div class="form-row">
      <input class="input" v-model="usernameregister" type="text" placeholder="username"/>
      <input class="input" v-model="passwordregister" type="password" placeholder="password"/>
      <button class="button" type="submit">Sign up</button>
    </div>
</template>


<script>
export default {
  name: 'Register',
  data() {
    return {
      
usernameregister: '',
passwordregister: '',
errorregister: '',
    }
  },
  methods: {
    async registerfunction() {
      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify({
          "username": this.usernameregister,
          "password": this.passwordregister
        })
      };
      console.log(requestOptions)
      const response = await fetch("http://localhost:3001/user", requestOptions);
      const data = await response.json
      console.log(data)
      router.push('/login')
    }
  }
}

</script>


<style>


</style>