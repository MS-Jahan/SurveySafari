// assets/js/chartJs/response_chart.js

function renderDonutChart(canvasID, chartData) {
    if (!canvasID || !chartData) {
        console.warn("No canvas ID or chart data provided to render donut chart.");
        return null;
    }

    const donutChart = document.getElementById(`${canvasID}`).getContext('2d');
    new Chart(donutChart, {
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
                }
            }
        }
    });
}

function renderHBarChart(canvasID, chartData) {
    if (!canvasID || !chartData) {
        console.warn("No canvas ID or chart data provided to render horizontal bar chart.");
        return null;
    }

    const hBarChart = document.getElementById(`${canvasID}`).getContext('2d');
    new Chart(hBarChart, {
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
                }
            }
        }
    });
}

function renderLineChart(canvasID, chartData) {
    if (!canvasID || !chartData) {
        console.warn("No canvas ID or chart data provided to render line chart.");
        return null;
    }

    const lineChart = document.getElementById(`${canvasID}`).getContext('2d');
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: chartData.datasetLabel,
                data: chartData.data,
                backgroundColor: '#00a547',
                borderColor: '#8cff28',
                borderWidth: 2,
                fill: false
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
            }
        }
    });
}

export { renderDonutChart, renderHBarChart, renderLineChart };