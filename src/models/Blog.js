export class Blog {
  constructor(data){
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creator = data.creator
    this.title = data.title
    this.createdAt = new Date(data.createdAt).toLocaleDateString()
  }
}