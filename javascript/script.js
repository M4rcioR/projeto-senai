var ctx = document.getElementById('chartEntradaSaida').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Entrada', 'Saída'],
    datasets: [
      {
        label: 'Entrada e Saída de Produtos',
        data: [60, 40],
        backgroundColor: ['rgba(0, 123, 255, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(0, 123, 255, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

  var ctx = document.getElementById('chartFinanceiro').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar', // Altere o tipo de gráfico conforme necessário (bar, line, pie, etc.)
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Receitas',
        data: [5000, 3000, 4000, 6000, 3500, 4500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }, {
        label: 'Despesas',
        data: [2000, 2500, 3000, 1800, 2200, 2000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: true
          },
          beginAtZero: true
        }
      }
    }
  });

  

