export default () => {
    //사용된 tech 기술 번호만 넘겨서 해당하는 것만 return 해줄 계획으로 만듦
    const tech = [
        {
            _id: 0,
            type : 'fe',
            name : 'react',
            color : ''
        },
        {
            _id: 1,
            type : 'be',
            name : 'node.js',
            color : ''
        },
        {
            _id: 2,
            type : 'design',
            name : 'bootstrap',
            color : ''
        },
        {
            _id: 3,
            type : 'db',
            name : 'mongodb',
            color : ''
        },
    ]
    return (
        <div>
            {tech.map((t)=><span className="badge text-bg-primary">{t.name}</span>)}
        </div>
    )
}