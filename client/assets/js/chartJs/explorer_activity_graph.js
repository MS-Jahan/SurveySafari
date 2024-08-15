let ctx = document.getElementById("weeklyS.DChart").getContext("2d");
let weeklySDChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        datasets: [
            {
                label: "Attened Surveys",
                data: [2, 9, 3, 17, 6, 3, 7],
                backgroundColor: "rgba(153,205,1,0.6)",
            },
            {
                label: "Joined Discussions",
                data: [2, 2, 5, 5, 2, 1, 10],
                backgroundColor: "rgba(155,153,10,0.6)",
            },
        ],
    },
});