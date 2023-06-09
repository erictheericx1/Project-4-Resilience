import axios from 'axios'

// exercise routes
export async function getExercises() {
    const { data } = await axios.get('/api/exercises')
    return data
}

export async function deleteExercise(id) {
    await axios.delete(`/api/exercises/${id}`)
}


// comment routes
export async function getComments(exerciseId) {
    const { data } = await axios.get(`/api/comments/exercise/${exerciseId}`)
    return data
}

export async function postComment(comment) {
    const { data } = await axios.post('/api/comments', comment)
    return data
}

export async function updateComment(comment, id) {
    const { data } = await axios.put(`/api/comments/${id}`, comment)
    return data
}

export async function deleteComment(id) {
    const { data } = await axios.delete(`/api/comments/${id}`)
    return data
}