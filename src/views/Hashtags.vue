<template>
  <div>
  <form action="">
    <input type="text" name="post-body" placeholder="Хэштег" v-model="hashtag">
    <br>
    <button type="submit" v-on:click="tweetByHashtags">Найти</button>
  </form>
  <ul id="example-1" v-for="tweet in tweets">
    <li id="username">
      <p>Tweet: {{tweet.content}}</p>
    </li>
    <hr/>
  </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Hashtags",
  data: ()=>({
      tweets:[],
      hashtag:"",
  }),

  methods:{ tweetByHashtags:function(){
      {axios.post(`http://127.0.0.1:8000/api/hashtags`, {'hashtag':this.hashtag})
          .then(response => {
            this.tweets = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })

      }
    }
}
}
</script>

<style scoped>

</style>