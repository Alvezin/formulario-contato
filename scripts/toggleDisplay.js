
function toggleDisplay(changerID){
    let lista = document.getElementById('confirma');
    lista.innerHTML = '';
    let changeElement = document.getElementById(changerID)
    changeElement.classList.toggle('active')
    
    
}