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
            <img :src="blog.imgUrl" :alt="blog.title" class="img-fluid img-height">
          </div>
        </div>
</template>


<script>
import { Blog } from '../models/Blog';

export default {
  props: {
    blog: {
      type: Blog,
      required: true,
    }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>