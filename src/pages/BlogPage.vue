<template>

  <div class="container-fluid" v-if="blog">
    <div class="row m-5">
      <div class="col-10 offset-1 border border-dark border-2 elevation-1 py-2 px-4">
        <div class="row">
          <img :src="blog.imgUrl" alt="">
        </div>
        <div class="row">
          <div class="col-3">
            <img :src="blog.creator.picture" :alt="blog.title">
          </div>
          <div class="col-6">
            <h2>{{ blog.title }}</h2>
            <h4>{{ blog.creator.name }}</h4>
            <h5>{{ blog.createdAt }}</h5>
          </div>
          <div class="col-1">
            <p>edit button</p>
          </div>
          <div class="row">
            <p>body</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>



<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService';
import Pop from '../utils/Pop';

export default {
  props: {
    blog: {
      type: Blog,
      required: true,
    }
  },
  setup(){
    const route = useRoute()
    const blogId = route.params.blogId
    async function getBlogById(){
      try {
        await blogsService.getBlogById(blogId)
      } catch (error) {
        Pop.error(error, 'getting blog by id')
      }
    }
    onMounted(() => {
      getBlogById()
    })
    return {
      blog: computed(() => AppState.blog)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>