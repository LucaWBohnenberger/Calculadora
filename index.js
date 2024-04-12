calculo1 = ""
calculo2 = ""
operacao = ""
segurar_operacao = ""
var mudar =  document.getElementById("numeros_pequenos")
var mudar1 =  document.getElementById("numeros_grandes")

function atualizar(){
    mudar.innerHTML = calculo1
    mudar.innerHTML += operacao
    mudar1.innerHTML = ""
}


function addnumero(num){
    if (operacao.length == 1 & calculo2.length < 11){
        segurar_operacao = ""
        calculo2 += String(num)
        mudar1.innerHTML = calculo2
    }else if (calculo1.length < 11){
        calculo1 += String(num)
        mudar1.innerHTML = calculo1
    }
}

function apagar_tudo(){
    calculo1 = ""
    calculo2 = ""
    operacao = ""
    atualizar()
}

function addvezes(){
    if(operacao.length < 1 & calculo1.length > 0){
    operacao = "x"
    atualizar()
    }else if (segurar_operacao == "" & operacao.length < 3){
        segurar_operacao = "x"
        calcular()
    }
}

function adddiv(){
    if(operacao.length < 1 & calculo1.length > 0){
    operacao = "/"
    atualizar()
    }else if (segurar_operacao == "" & operacao.length < 3){
        segurar_operacao = "/"
        calcular()
    }
}

function addpercent(){
    if(operacao.length < 1 & calculo1.length > 0){
    operacao = "%"
    atualizar()
    }else if (segurar_operacao == "" & operacao.length < 3){
        segurar_operacao = "%"
        calcular()
    }
}

function addmais(){
    if(operacao.length < 1 & calculo1.length > 0){
    operacao = "+"
    atualizar()
    }else if (segurar_operacao == "" & operacao.length < 3){
        segurar_operacao = "+"
        calcular()
    }
}

function addmenos(){
    if(operacao.length < 1 & calculo1.length > 0){
    operacao = "-"
    }else if (segurar_operacao == "" & operacao.length < 3){
        segurar_operacao = "-"
        calcular()
    }
    atualizar()
}

function addsinal(){
    if(operacao.length == 0 && calculo1.length > 0){
        if (calculo1.includes("-")){
            calculo1 = calculo1.replace("-", "")
        }else{
            calculo1 = "-" + calculo1
        }
        mudar1.innerHTML = calculo1
    
    }else if(calculo1.length > 0){
        if (calculo2.includes("-")){
            calculo2 = calculo2.replace("-", "")
        }else{
            calculo2 = "-" + calculo2
        }
        mudar1.innerHTML = calculo2
    }
}

function addponto(){
    if(operacao.length > 0 & calculo2 > 0){
        if (!calculo2.includes(".") & calculo2.length < 10){
            calculo2 += "."
        }
    } else if (operacao.length < 3 & calculo1 > 0){
        if (!calculo1.includes(".") & calculo1.length < 10){
            calculo1 += "."
        }
    } 
}

function remove(){
    if (operacao.length > 0){
        calculo2 = calculo2.slice(0, -1)
        mudar1.innerHTML = calculo2
    }else{
        calculo1 = calculo1.slice(0, -1)
        mudar1.innerHTML = calculo1
    }
}


function calcular(){
    if (calculo2.endsWith("0") || calculo2.endsWith("1") || calculo2.endsWith("2") || calculo2.endsWith("3")
    || calculo2.endsWith("3") || calculo2.endsWith("4") || calculo2.endsWith("5") || calculo2.endsWith("6") 
    || calculo2.endsWith("7") || calculo2.endsWith("8") || calculo2.endsWith("9") ){

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
                if (calculo2 == 0){
                    calculo1 = "Resultado Indefinido"
                }else{
                    calculo1 = calculo1 % calculo2
                }
                break;
        }
        calculo2 = ""
        if (calculo1 == "Resultado Indefinido"){
            operacao = "    "
        }else{
            operacao = segurar_operacao
        }

        atualizar()
    }
}