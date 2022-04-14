const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Iitem = document.querySelector(".item");

function cadastrar(){

  fetch("http://localhost:8080/cadastrar",
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"POST",
    body: JSON.stringify({
      nome: Inome.value,
      cpf: Icpf.value,
      item: Iitem.value
    })
    
  })
  .then(function (res) {console.log(res)})
  .catch(function (res) {console.log(res)})

}

function limpar(){
      Inome.value = "";
      Icpf.value = "";
      Iitem.value = "";
};

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  cadastrar();
  limpar();
})

