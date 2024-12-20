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
                bottom: '0%',
                left: 'center',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
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

        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{ width: "100%", height: "400px" }}
        />
    );
};

export default PieChart;
