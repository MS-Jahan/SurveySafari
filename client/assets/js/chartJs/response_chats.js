// assets/js/chartJs/response_chart.js

function renderDonutChart(canvas, chartData) {
    if (!canvas || !chartData) {
        console.warn("No canvas or chart data provided to render donut chart.");
        return null;
    }

    const donutChartctx = canvas.getContext('2d');

    if (!donutChartctx) {
        console.warn("No canvas element found to render donut chart.");
        return null;
    }

    new Chart(donutChartctx, {
        type: 'doughnut',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Donut Chart',
                data: chartData.data,
                backgroundColor: chartData.backgroundColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: chartData.title
                },
                datalabels: {
                    color: '#000',
                    formatter: (value, context) => {
                        const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        if (percentage === '0.00%') {
                            return '';
                        }
                        return percentage;
                    }
                }
            },
        },
        plugins: [ChartDataLabels]
    });
}

function renderHBarChart(canvas, chartData) {
    if (!canvas || !chartData) {
        console.warn("No canvas or chart data provided to render horizontal bar chart.");
        return null;
    }

    const hBarChartctx = canvas.getContext('2d');
    new Chart(hBarChartctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: chartData.datasetLabel,
                data: chartData.data,
                backgroundColor: chartData.backgroundColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: chartData.title
                },
                datalabels: {
                    color: '#000',
                    formatter: (value, context) => {
                        const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        
                        if (percentage === '0.00%') {
                            return '';
                        }

                        return percentage;
                    },
                    textAlign: 'center',
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: chartData.xAxisLabel
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: chartData.yAxisLabel
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

function renderBarChart(canvas, chartData) {
    if (!canvas || !chartData) {
        console.warn("No canvas or chart data provided to render horizontal bar chart.");
        return null;
    }

    const barChartctx = canvas.getContext('2d');
    new Chart(barChartctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: chartData.datasetLabel,
                data: chartData.data,
                backgroundColor: chartData.backgroundColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'x',
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: chartData.title
                },
                datalabels: {
                    color: '#000',
                    formatter: (value, context) => {
                        const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        
                        if (percentage === '0.00%') {
                            return '';
                        }

                        return percentage;
                    },
                    textAlign: 'center',
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: chartData.xAxisLabel
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: chartData.yAxisLabel
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

function renderLineChart(canvas, chartData) {
    if (!canvas || !chartData) {
        console.warn("No canvas ID or chart data provided to render line chart.");
        return null;
    }

    const lineChartctx = canvas.getContext('2d');
    new Chart(lineChartctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: chartData.datasetLabel,
                data: chartData.data,
                backgroundColor: '#00a547',
                borderColor: '#8cff28',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: chartData.title
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: chartData.xAxisLabel
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: chartData.yAxisLabel
                    }
                }
            }
        }
    });
}

export { renderDonutChart, renderHBarChart, renderLineChart, renderBarChart };