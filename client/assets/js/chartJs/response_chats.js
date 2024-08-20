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
                    text: 'Donut Chart'
                }
            }
        }
    });
}

export { renderDonutChart };