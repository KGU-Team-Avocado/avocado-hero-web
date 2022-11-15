import { ResponsivePie } from '@nivo/pie';

const ProfilePieChart = ({data}) => {
    return (
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
                defs={[
                    {
                        id: 'dots',
                        // type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        // type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'project-manager'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'front-end'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'back-end'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'server'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'enterprise'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'schedule-management'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'design'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'testing'
                        },
                        id: 'lines'
                    }
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
            <div>hello</div>
        </div>
    )
}

export default ProfilePieChart;