//? criando um objeto literal
let user = {
  name: 'Miguel',
  age: 4,
  email: 'miguel@gmail.com',
  city: 'Maringa',
  blogPosts: [
    {title: 'Empadão de frango', likes: 30},
    {title: '4 receitas de purê de batata', likes: 50}
  ],
  login() {
    console.log('Usuário logado')
  },
  logout() {
    console.log('Usuário deslogado')
  },
  logBlogPosts() {
    console.log(`${user.name} escreveu os seguintes posts:`)
    
    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }
}


user.logBlogPosts()