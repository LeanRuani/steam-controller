// Estadisticas

var canvas_torta = document.getElementById('grafico_torta').getContext('2d');
    var torta = new Chart (canvas_torta, {
        type:'pie',
        data:{
            datasets:[{
                data:[
                    38,
                    22,
                    34,
                    5,
                    1,
                ],
                backgroundColor:[
                    "#9bc848",
                    "#665cbe",
                    "#73C2FB",
                    "#e60012",
                    "#989898",
                ],
            }],
            labels:[
                " Xbox Controller ",
                " PlayStation Controller ",
                " Steam Controller ",
                " Switch Pro Controller ",
                " Todo los demas ",
            ],
        },
    });

var canvas_barra = document.getElementById('grafico_barra').getContext('2d');
var controles_activos = {
    label: 'Controles activos (en %)',
    data: [18, 8, 14, 12, 2, 0, 20],
    backgroundColor:[
        "#9bc848",
        "#665cbe",
        "#73C2FB",
        "#e60012",
        "#989898",
    ]
};
var barra = new Chart (canvas_barra, {
    type:'bar',
    data: {
        labels:[
            " Xbox ",
            " PlayStation ",
            " Steam ",
            " Switch ",
            " Los demas ",
        ],
    datasets:[controles_activos]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                    return tooltipItem.yLabel;
               }
            }
        }
    }
});