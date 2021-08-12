import axios from 'axios'

const url = `https://jsonplaceholder.typicode.com`

export function getArticles() {

    const request = axios.get(`${url}/posts`).then( res => res.data).catch( error => console.log(error))
    return {
        type: 'GET_ARTICLES',
        payload:request
    }
}