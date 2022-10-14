// import { selectUser } from "api/redux/user/userSlice";
// import { useState } from "react"
// import { useSelector } from "react-redux";

// export default (props) => {

//     const user = useSelector(selectUser);
//     const [image, setImage] = useState({ preview: '', data: '' })
//     const [status, setStatus] = useState('')
//     const handleSubmit = async (e) => {
//       e.preventDefault()
//       let formData = new FormData()
//       formData.append('user_id', user?.user_id);
//       formData.append('file', image.data)
//       const response = await fetch('/usersRouter/uploadImage', {
//         method: 'POST',
//         body: formData,
//       })

//       if (response) window.location.reload()
//     }

//     const handleFileChange = (e) => {
//       const img = {
//         preview: URL.createObjectURL(e.target.files[0]),
//         data: e.target.files[0],
//       }
//       setImage(img)
//     }
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h3>업로드 하기</h3>
//           <input className='form-control' type='file' name='file' onChange={handleFileChange}></input>
//         </div>
//         {image.preview && <>
//           <div className='my-3'>
//             <img src={image.preview} width='300' height='300' />
//           </div>
//           <div>
//             <button className='btn btn-success' type='submit'>업로드 하기</button>
//           </div>
//         </>
//         }

//       </form>
//     )
// }

import { selectUser } from 'api/redux/user/userSlice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default ({ setProfileImage }) => {
  const user = useSelector(selectUser);
  const [image, setImage] = useState({ preview: '', data: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('user_id', user?.user_id);
    formData.append('file', image.data); //반드시 file을 마지막에 append 해야 오류가 없음!!
    const response = await fetch('/usersRouter/uploadImage', {
      method: 'POST',
      body: formData,
    })

    if (response) {
      setProfileImage(); //부모의 프로필 이미지를 수정해줌
      setImage({ preview: '', data: '' });
    }
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <div className='App'>

      <form onSubmit={handleSubmit}>
        <div>
          <h3>업로드 하기</h3>
          <input className='form-control' type='file' name='file' onChange={handleFileChange}></input>
        </div>
        {image.preview && <>
          <div className='my-3'>
            <img src={image.preview} width='300' height='300' />
          </div>
          <div>
            <button className='btn btn-success' type='submit'>업로드 하기</button>
          </div>
        </>
        }
      </form>
    </div>
  )
}
