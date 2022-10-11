import React, { useEffect, useState } from "react";
import axios from "axios";
function FilesUpload() {
  const [file, setFile] = useState();
  const [list, setList] = useState();

  const onFileChange = (e) => {
    setFile({ profileImg: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", file.profileImg);
    //보통 form 태그에서 데이터를 전송할때는 json 형식을 이용하지만,
    //이미지나 파일등을 업로드 할때에는 formData 객체를 이용한다.
    //append() 메서드를 통해 빈 FormData 객체에 key-value 쌍을 추가해준다.
    console.log(formData);

    axios
      .post("http://localhost:4000/api/user-profile", formData, {})
    // form-data, x-www-form-urlencoded 등의 파일을 보낼 때에는 헤더를 추가해줘야 한다.
    // 위의 형식은 { headers: { 'Content-Type': 'multipart/form-data' } } 이다.
    // 하지만 headers 의 기본 Content-Type 이 multipart/form-data 이므로 생략 가능하다.
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("http://localhost:4000/api");
      // db 에 저장된 (서버에 저장되어 있는) 이미지의 경로를 가져온다.
      setList(response.data.users);
      // ...
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
      {list &&
        list.map((image, index) => (
          <img key={index} src={`${image.profileImg}`} />
        ))}
    </div>
  );
}

export default FilesUpload;