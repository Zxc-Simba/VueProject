<template>
<div class="App">
  <div id="main-widow">
    <div class="links">
      <h1>Bitter</h1>
      <router-link to="/">О нас </router-link>
      <router-link to="/gosti">Гости</router-link>
      <router-link to="/hashtags">Хэштеги</router-link>
    </div>
    <div class="form">
      <form action="">
        <input type="text" name="post-body" placeholder="Сообщение" v-model="tweet">
        <br>
        <button type="submit" v-on:click="postTweet">Отправить</button>
      </form>
      <hr>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<style scoped>



</style>
<script>
import axios from "axios";
import DefaultLayout from "./layouts/layout";
export default {
  data: () => ({
    id: 1,
    tweet:"",
  }),
  components: {DefaultLayout},
  methods:{

    postTweet:function (){
      axios.post('http://127.0.0.1:8000/api/addTweet',{'id':this.id, 'tweet':this.tweet})
          .then(response => {
            alert(response)
          })
          .catch(e => {
            this.errors.push(e)

          })
  },


  }
}
</script>