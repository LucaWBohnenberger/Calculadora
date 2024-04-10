calculo1 = ""
calculo2 = ""
operacao = ""
segurar_operacao = ""
igual = true

function atualizar(){
    var mudar =  document.getElementById("numeros_pequenos")
    mudar.innerHTML = calculo1
    mudar.innerHTML += operacao
    var mudar1 =  document.getElementById("numeros_grandes")
    mudar1.innerHTML = ""
}


function addnumero(num){
    
    var mudar =  document.getElementById("numeros_grandes")
    if (operacao.length > 0){
        segurar_operacao = ""
        calculo2 += String(num)
        mudar.innerHTML = calculo2
    }else if (igual){
        calculo1 += String(num)
        mudar.innerHTML = calculo1
        console.log(calculo1)
    }
}


function apagar_tudo(){
    calculo1 = ""
    calculo2 = ""
    operacao = ""
    igual = true
    atualizar()
}

function addvezes(){
    console.log(operacao.length)
    if(operacao.length == 0 & calculo1.length > 0){
    operacao = "x"
    console.log(operacao.length)
    atualizar()
    }else if (segurar_operacao == ""){
        segurar_operacao = "x"
        calcular(false)
    }
}

function adddiv(){
    if(operacao.length == 0 & calculo1.length > 0){
    habilitador = false
    operacao = "/"
    atualizar()
    }else if (segurar_operacao == ""){
        segurar_operacao = "/"
        calcular(false)
    }
}

function addpercent(){
    if(operacao.length == 0 & calculo1.length > 0){
    habilitador = false
    operacao = "%"
    atualizar()
    }else if (segurar_operacao == ""){
        segurar_operacao = "%"
        calcular(false)
    }
}

function addmais(){
    if(operacao.length == 0 & calculo1.length > 0){
    operacao = "+"
    atualizar()
    }else if (segurar_operacao == ""){
        segurar_operacao = "+"
        calcular(false)
    }
}

function addmenos(){
    if(operacao.length == 0 & calculo1.length > 0){
    operacao = "-"
    }else if (segurar_operacao == ""){
        segurar_operacao = "-"
        calcular(false)
    }
    atualizar()
}

function addsinal(){
    if(operacao.length == 0){
        if (calculo1.includes("-")){
            calculo1 = calculo1.replace("-", "")
        }else{
            calculo1 = "-" + calculo1
        }
        var mudar =  document.getElementById("numeros_grandes")
        mudar.innerHTML = calculo1
    
    }else{
        if (calculo2.includes("-")){
            calculo2 = calculo2.replace("-", "")
        }else{
            calculo2 = "-" + calculo2
        }
        var mudar =  document.getElementById("numeros_grandes")
        mudar.innerHTML = calculo2
    }
}

function addponto(){
    if(operacao.length == 0){
        if (!calculo1.includes(".")){
            calculo1 += "."
        }
    } else{
        if (!calculo2.includes(".")){
            calculo2 += "."
        }
    } 
}

function remove(){
    if (calculo2 != 0){
        calculo2 = calculo2.slice(0, -1)
        var mudar =  document.getElementById("numeros_grandes")
        mudar.innerHTML = calculo2
    }else{
        calculo1 = calculo1.slice(0, -1)
        var mudar =  document.getElementById("numeros_grandes")
        mudar.innerHTML = calculo1
    }
}


function calcular(condicional){
    calculo1 = Number(calculo1)
    calculo2 = Number(calculo2)
    
    switch(operacao){
        case "+":
            calculo1 = calculo1 + calculo2
            break;

        case "-":
            calculo1 = calculo1 - calculo2
            break;

        case "x":
            calculo1 = calculo1 * calculo2
            break;

        case "/":
            if (calculo2 == 0){
                calculo1 = "Resultado Indefinido"
            }else{
                calculo1 = calculo1 / calculo2
            }
            break;

        case "%":
            calculo1 = calculo1 % calculo2
            calculo1 = calculo1.toFixed(3)
            break;
    }
    calculo2 = ""
    operacao = segurar_operacao


    if (!condicional){
        atualizar()
    }else{
        operacao = ""
        igual = false
        atualizar()
    }

}