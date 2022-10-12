import { selectUser } from 'api/redux/user/userSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function FileUploadExample() {
  const user = useSelector(selectUser);
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('user_id', user?.user_id);
    formData.append('file', image.data); //반드시 file을 마지막에 append 해야 오류가 없음!!
    const response = await fetch('/testsRouter/uploadFile', {
      method: 'POST',
      body: formData,
    })

    if (response) setStatus(response.statusText)
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
      <h1>Upload to server</h1>
      {`현재 로그인 된 아이디 : ${user?.user_id}`}
      <hr />
      <h3>해당 아이디로 업로드 된 이미지</h3>
      <img src='' alt='사진이 서버에 없는뎁쇼' />
      <hr />
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
      {status && <div className='my-2'>
        <hr/>
        <h3>전송 상태</h3>
        <h4>{status}</h4>
      </div>
      }
    </div>
  )
}

export default FileUploadExample
