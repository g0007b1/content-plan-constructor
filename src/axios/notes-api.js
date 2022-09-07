import {instance} from "./api";

export const notesApi = {
    getNotes(owner) {
        return instance.get(`notes?owner=${owner}`).then(response => response.data)
    }
}