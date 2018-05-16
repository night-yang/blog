<template>
  <div>
    <h1>博客首页</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" >
        <router-link :to="`/blog/${post.id}`">
        {{ post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { API_URL } from '../constant/APIConstants'
import axios from 'axios'
export default {
  name: 'BlogHome',
  data: () => ({
    posts: []
  }),
  created(){
    console.log('去git上拿文章目录')
    const uri = `${API_URL}/posts/index.json`
    axios.get(uri).then(
      res=>{
        console.log('我的目录',res.data)
        this.posts=res.data
      }
    )
  }
}
</script>

<style scoped>
.blog-home {
  display: flex;
}
.sidebar {
  border: 2px slide red;
  flex-basis: 300px;
}
.main {
  border: 2px solid green;
  flex-grow: 1;
}
.router-link-active{
  color:red;
}
</style>