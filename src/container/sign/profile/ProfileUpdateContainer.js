// import axios from 'axios';
// import { useEffect } from 'react';


// const ProfileUpdateContainer = () => {

//     const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
//     const user_id = params.id; //(params의 :id를 받는 역할)
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         axios.post('/usersRouter/findUser', {
//             user_id: user_id
//         }).then((response) => { //서버로부터 받아온 id
//             // console.log(response.data);
//             if (response.data.status === "success") {
//                 console.log(JSON.stringify(response.data.user))
//                 setUser(response.data.user);
//             }
//             // else {
//             //   return alert("조회된 아이디가 없습니다.")
//             // }
//         }).catch(function (error) {
//             console.log(error);
//         });
//     }, []);

//     return(
//         <div>
//             dd
//         </div>
//     )
// }

// export default ProfileUpdateContainer;