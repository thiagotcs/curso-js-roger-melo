//? criando um objeto literal
let user = {
  name: 'Miguel',
  age: 4,
  email: 'miguel@gmail.com',
  city: 'Maringa',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login() {
    console.log('Usuário logado')
  },
  logout() {
    console.log('Usuário deslogado')
  },
  logBlogPosts() {
    console.log(`${user.name} escreveu os seguintes posts:`)
    
    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}


user.logBlogPosts()