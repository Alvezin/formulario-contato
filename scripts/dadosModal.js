

function dados(){ 


    let Pessoa = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        website: document.getElementById('url').value,
        companhia: document.getElementById('company').value,
    }
    areaText = document.getElementById('confirma');
    
    Object.keys(Pessoa).forEach(function(item){
        areaText.innerHTML += `<li> ${item}: ${Pessoa[item]} <li/>`
    })
        
    
}

