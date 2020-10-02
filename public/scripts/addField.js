//Procurar o botão Novo Horario
document.querySelector("#add-time")

//Quado clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
  //duplicar os campos. que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //valor boleano T ou F

  //pegar os campos. que campos?
  const fields = newFieldContainer.querySelectorAll('input')
  //para cada campo, limapar
  fields.forEach(function(field){
    //pegar o field atual e limpa ele
    field.value = ""
  })

  //colocar na pagina. onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}