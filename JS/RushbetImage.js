fetch("../rushbet.json")
.then(response => {
  return response.json();
})
.then(data => {
  const imageArgentina = document.createElement('img')
  imageArgentina.src = data.logoLoc
  document.querySelector('.flag__argentina_img').appendChild(imageArgentina)

  const imageBrasil = document.createElement('img')
  imageBrasil.src = data.logoVis
  document.querySelector('.flag__brasil_img').appendChild(imageBrasil)
});

