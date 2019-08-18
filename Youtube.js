import axios from 'axios';

const KEY = 'AIzaSyDH8wYAkRgeqaELJgxlyucyjLycS0pHIoc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})