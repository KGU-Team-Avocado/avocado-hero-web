import { ResponsiveRadar } from '@nivo/radar'

const ProfileRadar = ({data, user_id}) => {
    return (
        <div style={{ width: '100%', height: '500px', margin: '0 auto' }}>
            <div>상호 평가 통계(데이터 구현 예정)</div>
            <ResponsiveRadar
                data={data}
                keys={[user_id]}
                maxValue={5}
                indexBy="label"
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