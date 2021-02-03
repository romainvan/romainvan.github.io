var ctxinitiale = document.getElementById('zpACInitiale').getContext('2d');
var chart = new Chart(ctxinitiale, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
       
        datasets: [
            {
                label : "Nombre d'agents avec un besoin en formation initiale",
                fill : false,
                borderColor : "red",
                backgroundColor : "white",
                data : [507,486,518,497]
            },
            {
                label : "Nombre d'agents avec un besoin en formation initiale temporalisé",
                fill : false,
                borderColor : "green",
                backgroundColor : "white",
                data : [460,421,473,428]
            }
            
        ]
    },

    // Configuration options go here
    options: {responsive: true,
        title: {
            display: true,
            text: 'Demandes pour la formation initiale'
        },
        legend :{
            position : 'bottom'
        }
    }
});


var ctxcontinue = document.getElementById('zpACContinue').getContext('2d');
var chart = new Chart(ctxcontinue, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
       
        datasets: [
            {
                label : "Nombre d'agents avec un besoin en formation continue",
                fill : false,
                borderColor : "red",
                backgroundColor : "white",
                data : [723,759,761,748]
            },
            {
                label : "Nombre d'agents avec un besoin en formation continue temporalisé",
                fill : false,
                borderColor : "green",
                backgroundColor : "white",
                data : [675,712,695,706]
            }
            
        ]
    },

    // Configuration options go here
    options: {responsive: true,
        title: {
            display: true,
            text: 'Demandes pour la formation initiale'
        },
        legend :{
            position : 'bottom'
        }
    }
});