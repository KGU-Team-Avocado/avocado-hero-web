import { useState } from "react"

export default (props) => {

    /**
     * 앞으로 파일 저장할 때, 사용자 이름으로 저장하는 기능을 추가해야함
     * 
     *  */
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('file', image.data)
      const response = await fetch('/usersRouter/uploadImage', {
        method: 'POST',
        body: formData,
      })
  
      if (response) window.location.reload()
    }
  
    const handleFileChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img)
    }
    return (
        <form className="itemCenter" onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={handleFileChange}></input>
            <button className="btn btn-success" type='submit'>업로드</button>
        </form>
    )
}