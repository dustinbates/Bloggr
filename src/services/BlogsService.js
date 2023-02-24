import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogById(blogId){
    const res = await api.get('api/blogs/' + blogId)
    AppState.blog = new Blog(res.data)
  }

  async getBlogs(){
    const res = await api.get('api/blogs')
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log('getting blogs', AppState.blogs)
  }

  setActiveBlog(blog){
    AppState.blog = blog
  }
}

export const blogsService = new BlogsService()