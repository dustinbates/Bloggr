<template>
        <div class="row">
          <div class="col-8 border-end border-3 border-dark">
            <div class="row">
              <span class="d-flex align-items-center">
                <img :src="blog.creator.picture" alt="" class="profile-picture p-0 mt-2 me-2">
                <h1 class="m-0">{{ blog.creator.name }}</h1>
              </span>
            </div>
            <div class="row">
                <h4>{{ blog.title }}</h4>
            </div>
            <div class="row body-container border-top border-dark">
              <p>{{ blog.body.slice(0, 300) }}...</p>
            </div>
          </div>
          <div class="col-4 g-0">
            <router-link :to="{ name: 'Blog', params: {blogId: blog.id}}">
              <img :src="blog.imgUrl" :alt="blog.title" class="img-fluid img-height">
            </router-link>
          </div>
        </div>
</template>


<script>
import { Blog } from '../models/Blog';
import { blogsService } from '../services/BlogsService.js';

export default {
  props: {
    blog: {
      type: Blog,
      required: true,
    }
  },
  setup(props){

    return {
      setActiveBlog(){
        blogsService.setActiveBlog(props.blog)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.body-container{
  height: 20vh;
  overflow-y: scroll;
}

.scroll{
  overflow-y: scroll;
}

.img-height{
  height: 32vh;
  width: 100%;
}


.profile-picture{
  height: 64px;
  width: 64px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px black;
}

</style>