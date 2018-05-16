<template>
  <div>
    <div v-if="blogId">
    <h1>{{ post.title }}</h1>
    <p>
      {{ post.body }}
    </p>
   </div>
   <div v-else>我的博客</div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: ['posts'],
  computed: {
    blogId() {
      return this.$route.params.id
    },
    post() {
      return this.posts.find(t => String(t.id) === this.blogId)
    }
  }
}
</script>