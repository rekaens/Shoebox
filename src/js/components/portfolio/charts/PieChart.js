import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        const option = {
            tooltip: {
                trigger: 'item',
            },
            legend: {
                bottom: '10%',
                left: 'center',
            },
            series: [
                {
                    name: 'Portfolio Chart',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    avoidLabelOverlap: true,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: true,
                    },
                    data: [
                        { value: 1048, name: 'Jordan' },
                        { value: 735, name: 'Travis Scott' },
                        { value: 580, name: 'PP' },
                        { value: 484, name: 'Green Fuck' },
                    ],
                },
            ],
        };

        myChart.setOption(option);

        const handleResize = () => {
            myChart.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default PieChart;
