export class NewNote {
    title = ''
    textarea = ''
    constructor(title, textarea){
        this.title = title
        this.textarea = textarea
        this.id = new Date()
    }

    set title(newTitle) {
        if (newTitle === '') {
            throw new Error('Заголовок пользователя не может быть пустым')
        }
        this.title = newTitle
    }
    
    
}


// const user = new User('Печорин')
// user.name // вызывается геттер, Печорин
// user.name = 'Бэла' // вызывается сеттер

// user.name = '' // Имя пользователя не может быть пустым