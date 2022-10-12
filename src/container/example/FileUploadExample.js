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
    formData.append('user_id',user?.user_id);
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
      {`${user?.user_id}`}
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )
}

export default FileUploadExample
