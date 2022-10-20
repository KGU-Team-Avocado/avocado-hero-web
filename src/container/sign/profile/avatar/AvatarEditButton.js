import { Box, Button, FormControl, Stack, Typography } from '@mui/material';
import { selectUser } from 'api/redux/user/userSlice'
import MKButton from 'component/common/mui-components/MKButton';
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
    console.log(img)
    setImage(img)
  }

  return (
    <FormControl>
      <Stack>
        <Typography variant='h4' my={1}>사진 수정하기</Typography>
        <input className='form-control' type='file' name='file' onChange={handleFileChange}></input>
      </Stack>
      {image.preview && <>
        <Box my={3}>
          <img src={image.preview} width='300' height='300' />
        </Box>
        <MKButton
          variant="contained"
          color='success'
          type='submit'
          onClick={handleSubmit}
        >
          업로드 하기
        </MKButton>
      </>
      }
    </FormControl>
  )
}
