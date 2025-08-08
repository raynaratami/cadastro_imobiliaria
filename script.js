async function buscar_cep(){
    let cep = document.getElementById('cep').value

    let url = "https://cep.awesomeapi.com.br/json/"+cep

    let resposta = await fetch(url)
    let dados = await resposta.json()
    document.getElementById('logradouro').value = (dados´[]
    
    alert (dados['address'])
  
}

function qtd_caracteres(){ 
    let cep =(document.getElementById('cep').value).toString()   
  
    if (cep.length == 8)
    {
        
        buscar_cep()
    }                                                                                          
}
