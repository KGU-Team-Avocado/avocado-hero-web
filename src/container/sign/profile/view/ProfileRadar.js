import { ResponsiveRadar } from '@nivo/radar'

const ProfileRadar = () => {
    const data = [
        {
            "taste": "질적 공헌도",
            "user_id": 2.7
            
        },
        {
            "taste": "양적 공헌도",
            "user_id": 3.9
            
        },
        {
            "taste": "참여 태도",
            "user_id": 5.0
            
        },
        {
            "taste": "책임감",
            "user_id": 1.3

        },
        {
            "taste": "적합성",
            "user_id": 4.5
        }
    ]

    return (
        <div style={{ width: '100%', height: '500px', margin: '0 auto' }}>
            <div>상호 평가 통계(데이터 구현 예정)</div>
            <ResponsiveRadar
                data={data}
                keys={['user_id']}
                maxValue={5}
                indexBy="taste"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor={{ from: 'color' }}
                gridLabelOffset={12}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={{ scheme: 'accent' }}
                blendMode="multiply"
                motionConfig="wobbly"
                gridShape="linear"
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={24}
            />
        </div>
    )
}

export default ProfileRadar;