document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("req-form-name").value;
    const role = document.getElementById("req-form-role").value;
    const email = document.getElementById("req-form-email").value;
    const pedido = document.getElementById("req-form-request").value;
  
  
    const cardMarkup = `
        <div class="card col-3" >
            <h5 class="card-title">  ${name}</h5>
            <br>
            <h5 class="card-title">  ${role}</h5>
            <br>
            <p class="card-title">  ${pedido}</p>
    `;
  
    document.getElementById("cardContainer").innerHTML = cardMarkup;
  });