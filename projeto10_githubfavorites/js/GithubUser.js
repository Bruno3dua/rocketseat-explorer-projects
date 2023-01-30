export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint).then(data => data.json()).then((data) => {
            const { name, login, public_repos, followers } = data
            return {
                name,
                login,
                public_repos,
                followers
            }
        })  
    } 
}
