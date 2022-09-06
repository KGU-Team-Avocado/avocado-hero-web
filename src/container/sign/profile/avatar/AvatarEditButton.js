import { useState } from "react"

export default (props) => {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('file', image.data)
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
        <form className="itemCenter" onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={handleFileChange}></input>
            <button className="btn btn-success" type='submit'>업로드</button>
        </form>
    )
}