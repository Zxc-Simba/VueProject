<template>
  <div>

    <ul id="example-1" v-for="post in posts">
      <li id="user-id">
        <p>Id: {{post.id}}</p>
      </li>
      <router-link :to="{ name: 'user', params: { userId: post.id }}">{{post.username}}</router-link>
      <br>
      <button type="submit" v-on:click="follow(post.id)">Подписаться</button>
      <br>
      <button type="submit" v-on:click="unFollow(post.id)">Отписаться</button>
      </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: () => ({
    posts: [],
    errors: [],
  }),
  methods:{


    showAll:function (){
      {axios.get('http://127.0.0.1:8000/api/showAllUsers')
          .then(response => {
            this.posts = response.data
            //console.log(response.data[1].user.username)
          })
          .catch(e => {
            this.errors.push(e)
          })

      }
    },
    follow:function(id){
      axios.post(`http://127.0.0.1:8000/api/follow/${id}`,)
          .then(response => {
            alert(response)
          })
          .catch(e => {
            this.errors.push(e)

          })

    },
    unFollow:function(id){
      axios.delete(`http://127.0.0.1:8000/api/unFollow/${id}`,)
          .then(response => {
            alert(response)
          })
          .catch(e => {
            this.errors.push(e)

          })

    },
  },
  created() {this.showAll()
  }
}


</script>

<style scoped>

</style>