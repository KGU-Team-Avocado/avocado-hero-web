import axios from "axios";

export const loginCheck = async (user_id, user_password) => {
    try {
        const response = await axios.post("usersRouter/login", {
          id: user_id,
          password: user_password,
        })
        return response.data
    } catch (error) {
        return null;
    }
}

export const findUsers = async () => {
    try {
        const response = await axios.post('/usersRouter/findUsers')
        return response.data
    } catch (err) {
        console.log("Error >>", err);
        return []
    }
}

export const saveJobPost = async (company) => {

    try {
        const response = await axios.post("/companiesRouter/jobPost",company)
        if (response.data.compIdCheck === false) {
            alert("이미 사용중인 제목입니다.");
            //setCheckError("이미 사용중인 아이디입니다");
            // return false;
          }
          if (response.data.success === true) {
            alert("채용공고 등록 성공.");
            window.location.href = "/";
            // return true;
          }
        // return false;
    } catch (err) {
        console.log("Error >>", err);
        // return false;
    }

}


export const getGroupById = async (group_id) => {
    try {
        const response = await axios.post("/groupsRouter/getGroup", group_id);
        console.log(response)
        return response.data;
    } catch (err) {
        console.log("Error >>", err);
        return [];
    }
}