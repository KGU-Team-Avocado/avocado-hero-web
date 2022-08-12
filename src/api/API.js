import axios from "axios";

const findUsers = async () => {
    try {
        const response = await axios.post('/usersRouter/findUsers')
        return response.data
    } catch (err) {
        console.log("Error >>", err);
        return []
    }
}
export {findUsers}