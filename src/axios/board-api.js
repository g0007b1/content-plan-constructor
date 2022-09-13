import {instance} from "./api";

export const boardApi = {
    getBoard(id) {
        return instance.get(`boards/${id}`).then(response => response.data)
    },
    getTitles(userName) {
        console.log('???')
        return instance.get(`boards?owner=${userName}`)
            .then(response => response.data)
            .then(data => data.reduce((acc, curr) => acc = [...acc, {link: curr.id, title: curr.title}], []))
    },
    updateBoard(id, events, rows, columns) {
        console.log('updating...')
        return instance.patch(`boards/${id}`, {events, rows, columns})
    },
    addBoard(len, owner, title) {
        return instance.post(`boards`, {
                "id": `${owner}-0${len + 1}`,
                "owner": owner,
                "events": [],
                "columns": [
                    "Название",
                    "Дата",],
                "title": `${title}`,
                "rows": [],
                "currentDate": {}
            }
        )
    }

}