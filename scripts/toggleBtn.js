function toggleBtn(){ // Enquanto os inputs obrigatórios não estiverem completos, o botão estará desabilitado;
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    let term = document.getElementById('terms'); //o checkbox de termos de privacidade
    
    if (nome && email && msg && term.checked == true){
        document.getElementById('btn-send').removeAttribute('disabled', 'disabled')
    } else{
        document.getElementById('btn-send').setAttribute('disabled', 'disabled')
    }
}