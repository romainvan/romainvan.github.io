var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Voie', 'Signalisation', 'Caténaire', 'Produit Train', 'Circulation'],
        datasets: [{
            data: [35, 25, 8, 12, 20],
            backgroundColor : ["#0088ce","#e05206","#82be00", "#a1006b", "#009aa6"]
        }]
    },

    // Configuration options go here
    options: {responsive: true,
        title: {
            display: true,
            text: 'Répartition des sessions'
        },
        legend :{
            position : 'bottom'
        }
    }
});


var ctx2 = document.getElementById('zpACInitiale').getContext('2d');
var chart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Voie', 'Signalisation', 'Caténaire', 'Produit Train', 'Circulation'],
        datasets: [{
            data: [35, 25, 8, 12, 20],
            backgroundColor : ["#0088ce","#e05206","#82be00", "#a1006b", "#009aa6"]
        }]
    },

    // Configuration options go here
    options: {responsive: true,
        title: {
            display: true,
            text: 'Répartition des sessions'
        },
        legend :{
            position : 'bottom'
        }
    }
});