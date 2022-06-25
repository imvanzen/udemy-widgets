import axios from "axios"

export default axios.create({
    baseUrl: "https://en.wikipedia.org/w/api.php",
    params: {
        action: 'query',
        list: 'search',
        format: 'json'
    }
})