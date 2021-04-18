import axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    // headers: {
    //     "API-KEY": "AIzaSyDPMkA30rc31Y-Sou0KVPBqRKeCg4FW5dk"
    // }
})

export const videoApi = {
    getVideos(nameVideo, sizeRequest, orderType){
        return instance.get(`search?part=snippet&type=video&maxResults=${sizeRequest}&order=${orderType}&q=${nameVideo}&key=AIzaSyDPMkA30rc31Y-Sou0KVPBqRKeCg4FW5dk`).then(
            response => {return response; }
        )
    }
}