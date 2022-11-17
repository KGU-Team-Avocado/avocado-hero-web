import { Box, Paper, Typography } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar'

const ProfileRadar = ({ data, user_id }) => {
    return (
        <Paper>
            <Typography variant='h5' align='center' pt={2}>상호평가 점수</Typography>
            <div style={{ width: '100%', height: '500px', margin: '0 auto' }}>
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
        </Paper>
    )
}

export default ProfileRadar;