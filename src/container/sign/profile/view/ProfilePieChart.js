import { Paper, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

const ProfilePieChart = ({ data }) => {
    return (
        <Paper>
            <Typography variant='h5' align='center' pt={2}>수행 역할</Typography>
            <div style={{ width: '100%', height: '500px', margin: '0 auto' }}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={1}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    arcLinkLabel="label"
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={5}
                    arcLinkLabelsDiagonalLength={15}
                    arcLinkLabelsStraightLength={15}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                2
                            ]
                        ]
                    }}
                    colors={{ scheme: 'green_blue' }}
                    defs={[
                        {
                            id: 'custom',
                            background: 'inherit'
                        }
                    ]}
                    fill={[
                        { match: '*', id: 'custom' }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </Paper>
    )
}

export default ProfilePieChart;