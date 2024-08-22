const polar = document.getElementById('polar')
const names = ['lectura', 'escrita', 'oral']
const porcentaje = [90, 70, 60]


const miPola = new Chart(polar, {
  type: 'polarArea',
  data: {
    labels: names,
    datasets: [{
      label: 'Inglés',
      data: porcentaje,
      backgroundColor: [
      'rgba(94, 188, 255, 0.5)',
      'rgba(171, 171, 171, 0.5)',
      'rgba(255, 255, 255, 0.5)'
      ],
      borderWidth:[0.5,0.5,0.5
      ],
      borderColor:[
      'rgb(94, 188, 255)',
      'rgb(171, 171, 171)',
      'rgb(255, 255, 255)'
      ]
    }]
  },
  options: {
      scales: {
        r: {
          ticks: {
            color: 'rgb(171,171,171)',
            family: 'Arial'
          }
        }
      }
    }
})