function toggleMode() {
    const html = document.documentElement
    // Fazendo o Javascript alterar o toggle mode através da condicional
    // html = documento html; classList = lista de classe do html;
    // constains = verifica se na lista de classe existe a classe 'light'.
    // if(html.classList.contains('light')) {
    //     se existir a classe light ele remove
    //     html.classList.remove('light')
    // } else {  se não existir a classe light ele adiciona
    //     html.classList.add('light')
    // }
    // Javascript possui funcionalidade de toggle 
    // pronto que adiciona e remove automaticamente:
    html.classList.toggle('light')
    
    // pegar a tag img (image)
    const img = document.querySelector('#profile img')
    
    // substituir a imagem da tag
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', "Foto de Mayk Brito sorrindo, usando óculos de sol preto e jaqueta preta em um fundo gradiente roxo e azul.")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
    }
}
