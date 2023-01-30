import { GithubUser } from "./GithubUser.js"

//Classe que vai conter a lógica dos dados e como eles serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
            const userExist = this.entries.find(entry => username === entry.login)

            if (userExist) {
                throw new Error('Usuário já cadastrado')
            }
            const githubUser = await GithubUser.search(username)

            if (githubUser.login === undefined) {
                throw new Error('Usuário não encontado')
            }

            this.entries = [githubUser, ...this.entries]
            console.log(this.entries)
            this.update()
            this.save()

        } catch (error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

//Classe que vai criar a visulização e eventos HTML
export class FavoriteViews extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = document.querySelector('table tbody')

        this.update()
        this.onAdd()
    }

    onAdd() {
        const addButton = this.root.querySelector('.add-user')

        addButton.onclick = () => {
            const username = this.root.querySelector('#input-search').value
            this.add(username)

        }
    }

    update() {
        this.removeAllTr()
        this.createRow()

        this.entries.forEach((user) => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Foto de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar este usuario?')
                if (isOk) {
                    this.delete(user)
                }
            }



            this.tbody.append(row)
        })

    }

    createRow() {
        const tr = document.createElement('tr')

        const content = `
        <td class="user">
        <img src="https://github.com/bruno3dua.png" alt="Imagem de Bruno">
        <a href="https://github.com/bruno3dua" target="_blank">
        <p>Bruno Eduardo</p>
        <span>bruno3dua</span>
        </a>
        </td>
        
        <td class="repositories">
        6
        </td>
        <td class="followers">
        12
        </td>
        <td>
        <button class="remove">
        &times;
        </button>
        </td>
        `

        tr.innerHTML = content
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}
