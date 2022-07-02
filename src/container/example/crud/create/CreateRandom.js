export default () => {
    const saveRandomData = () => {
        console.log('axios가 나올 자리')
    }

    return (
        <>
            <button className='btn btn-outline-success' onClick={()=>saveRandomData()}>랜덤 데이터 생성하기 (제작중)</button>
        </>
    )
}