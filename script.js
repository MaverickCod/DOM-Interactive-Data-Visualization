// Generate 7 random numbers between 0 and 100
const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 101));

// Generate one number between 1 and 10
const randomNumberBetween1And10 = Math.floor(Math.random() * 10) + 1;

// Generate one number between 91 and 100
const randomNumberCloseTo100 = Math.floor(Math.random() * 10) + 91;

// Insert the numbers at random positions in the array
randomData.splice(Math.floor(Math.random() * (randomData.length + 1)), 0, randomNumberCloseTo100);
randomData.splice(Math.floor(Math.random() * (randomData.length + 1)), 0, randomNumberBetween1And10);

// Create the Chart.js instance with the random data
const lineChart = new Chart("lineChart", {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        datasets: [{
            label: 'Month',
            data: randomData,
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }],
    },
    options : {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
});

// Animate the bars

const bars = lineChart.getDatasetMeta(0).data;

bars.forEach((bar, index) => {
    anime({
        targets: bar,
        height: bar._model.base - bar._model.y,
        easing: 'easeInOutcubic',
        duration: 5000,
        delay: index * 100,
    });
});