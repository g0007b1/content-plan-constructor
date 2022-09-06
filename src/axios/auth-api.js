import {instance} from "./api";

export const authApi = {
    login(data) {
        console.log(data)
        return instance.post('/login', data).then((response) => {
            console.log(response.data)
            return response.data
        })
    },
    register(data) {
        console.log(data)
        return instance.post('/users', data).then(response => response.data)
    }
}