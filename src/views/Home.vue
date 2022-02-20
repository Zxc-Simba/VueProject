<template>
  <div>
    <ul id="example-1" v-for="post in posts">
      <li id="user-id">
        <p>Id: {{post.user.id}}</p>
      </li>
      <li id="user-name">
        <p>User: {{post.user.username}}</p>
      </li>
      <li id="content">
        <p>Content: {{post.content}}</p>
      </li>
      <li id="date">
        <p>Date: {{post.created_at}}</p>
      </li>
      <hr/>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';




export default {
  data: () => ({
    posts: [],
    errors: [],
  }),
  methods:{


  showAll:function (){
    {axios.get('http://127.0.0.1:8000/api/showMessage')
      .then(response => {
        this.posts = response.data
        //console.log(response.data[1].user.username)
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
  }
  },
  created() {this.showAll()
  }
}

</script>
