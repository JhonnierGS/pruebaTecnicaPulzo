// Valores de los checkbox
const checkArgentina = document.getElementById('CheckArgentina');
const checkBrasil = document.getElementById('CheckBrasil');
const checkEmpate = document.getElementById('CheckEmpate');

function calcularApuesta(valorApuesta, valorCuota){
  return valorApuesta * valorCuota;
}

const apuesta = () => {
  fetch("../rushbet.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const apuesta = document.getElementById('valueBet');
    const valorApuesta = apuesta.value < 10000 ? alert("El valor minimo para apostar es de 10.000") :  apuesta.value > 1000000 ? alert("El valor maximo para apostar es de 1'000.000") : apuesta.value;
    const valorCuotaArgentina = checkArgentina.checked ? data.valorLoc : checkBrasil.checked ? data.valorVis : checkEmpate.checked ? data.valorEmp : 0;

    const gananciaApuesta = calcularApuesta(valorApuesta, valorCuotaArgentina);
    console.log(gananciaApuesta)

    const ResultH1 = document.getElementById("ResultH1");
    ResultH1.innerHTML = `$` + gananciaApuesta

  });
}

const refresh = () => {
  fetch("../rushbet.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    location.href = data.url;
  });
}







