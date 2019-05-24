import axios from 'axios';

const KEY = 'AIzaSyBr3wESJ63mF8zLUAZqQFutK84p6xVrmkk';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key:KEY
    }
})