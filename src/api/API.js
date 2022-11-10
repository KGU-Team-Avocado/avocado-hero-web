import axios from "axios";
// import defaultImage from "../assets/img/title.jpg";

export const loginCheck = async (user_id, user_password) => {
    console.log(user_id, user_password);
    try {
        const response = await axios.post("/usersRouter/login", {
            id: user_id,
            password: user_password,
        })
        console.log(response.data.user);
        return response.data.user
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
        const response = await axios.post("/companiesRouter/jobPost", company)
        // if (response.data.compIdCheck === false) {
        //     alert("이미 사용중인 제목입니다.");
        //     //setCheckError("이미 사용중인 아이디입니다");
        //     // return false;
        // }
        // if (response.data.success === true) {
        //     alert("채용공고 등록 성공.");
        //     window.location.href = "/avocado-hero-web/";
        //     // return true;
        // }
        return response;
        // return false;
    } catch (err) {
        console.log("Error >>", err);
        // return false;
    }

}

export const findOneUserByUserId = async (user_id) => {
    try {
        const response = await axios.post('/usersRouter/findUser', {
            user_id: user_id
        })
        // const foundUser = response.data.user;
        return (response.data.user)
    } catch (error) {

    }
}


export const getGroupById = async (group_id) => {
    try {
        const response = await axios.post("/groupsRouter/getGroup", { _id: group_id });
        console.log(response)
        return response.data;
    } catch (err) {
        console.log("Error >>", err);
        return [];
    }
}

export const fetchProfileImage = async (imgURL) => {
    const res = await fetch(`/usersRouter/profileImage/${imgURL}`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    if (res.status == 200) {
        return imageObjectURL;
    }
    else {
        return null;
    }
};

export const fetchGroupImage = async (imgURL) => {
    const res = await fetch(`/groupsRouter/groupImage/${imgURL}`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    if (res.status == 200) {
        return imageObjectURL;
    }
    else {
        return null;
    }
};

export const typeName = (type) => {
    switch (type) {
        case "0":
            return "베이직";
        case "1":
            return "프로";
        case "2":
            return "엔터프라이즈";
        default:
            return "베이직";
    }
    return "베이직";
}

export const updateUserType = async (user_id, type) => {
    try {
        const response = await axios.post("/usersRouter/updateUserType", { user_id: user_id, type: type });
        console.log(response.data.docs)
        return response.data;
    } catch (err) {
        console.log("Error >>", err);
        return [];
    }
}

export const groupFilter = async (filterData) => {
    try {
        const response = await axios.post("/groupsRouter/groupFiltering", filterData);
        console.log(response.data.docs)
        return response.data;
    } catch (err) {
        console.log("Error >>", err);
        return [];
    }
}

export const fetchCompanyImage = async (imgURL) => {
    const res = await fetch(`/companiesRouter/companyImage/${imgURL}`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    if (res.status == 200) {
        return imageObjectURL;
    }
    else {
        return null;
    }
};

export const createOrganization = async (organization) => {
    try {
        const response = await axios.post("/groupsRouter/createOrganization", organization);
        console.log(response.data.docs)
        return response.data;
    } catch (err) {
        console.log("Error >>", err);
        return [];
    }
}