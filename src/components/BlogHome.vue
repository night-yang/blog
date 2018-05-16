<template>
  <div class="blog-home">
    <div class="sidebar">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link router-link-active :to="`/blog/${post.id}`" >
              {{post.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <Blog :posts="posts"/>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Blog from '@/components/Blog'
export default {
  name: 'BlogHome',
  components: {
    Blog
  },
  created() {
    const uri = 'https://jsonplaceholder.typicode.com/posts/'
    axios.get(uri).then(res => {
      console.log(res.data)
      this.posts = res.data
    })
  },
  data: () => ({
    posts: []
  })
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