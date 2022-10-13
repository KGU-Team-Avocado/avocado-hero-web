import { selectUser } from 'api/redux/user/userSlice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function FileUploadExample() {
  const user = useSelector(selectUser);
  const [uploadedImage, setUploadedImage] = useState('');
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

  const fetchImage = async () => {
    const res = await fetch(`/testsRouter/testImg/${user?.user_id}`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setUploadedImage(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className='App'>
      <h1>Upload to server</h1>
      {`현재 로그인 된 아이디 : ${user?.user_id}`}
      <hr />
      <h3>해당 아이디로 업로드 된 이미지</h3>
      {/* fetch + state로 작업하기 */}
      <img
        src={uploadedImage}
        alt='사진이 서버에 없는뎁쇼'
        width='300' height='300'
      />
      <img
        src={`${process.env.REACT_APP_API_URL}/testsRouter/testImg/${user?.user_id}`}
        alt='사진이 서버에 없는뎁쇼'
        width='300' height='300'
      />
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
        <hr />
        <h3>전송 상태</h3>
        <h4>{status}</h4>
      </div>
      }
    </div>
  )
}

export default FileUploadExample
