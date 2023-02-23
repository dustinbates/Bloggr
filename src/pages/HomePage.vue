<template>
  <div class="container-fluid">
    <div class="row" >
      <div class="col-9 bg-white m-auto my-5 border border-dark border-3 rounded cardshadow" v-for="blog in blogs">
        <BlogCard :blog="blog"/>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js'
import BlogCard from '../components/BlogCard.vue';

export default {
    setup() {
        async function getBlogs() {
            try {
                await blogsService.getBlogs();
            }
            catch (error) {
                Pop.error(error, "getting blogs");
            }
        }
        onMounted(() => {
            getBlogs();
        });
        return {
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogCard }
}
</script>

<style scoped lang="scss">
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

.cardshadow{
box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;}

.profile-picture{
  height: 64px;
  width: 64px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px black;
}
</style>
