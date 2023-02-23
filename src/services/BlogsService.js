import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogs(){
    const res = await api.get('api/blogs')
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log('getting blogs', AppState.blogs)
  }
}

export const blogsService = new BlogsService()