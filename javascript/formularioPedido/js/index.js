document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    
  
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let entrada = document.getElementById('entrada').value;
    let platoPrincipal = document.getElementById('plato principal').value;
    let postre = document.getElementById('postre').value;


    document.getElementById('pedidoForm').reset();
  });
  