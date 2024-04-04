function debug(){
    console.log(calculoVerdadeiro)
    console.log(calculoVerdadeiro2)
}

calculo1 = ""
calculo2 = ""
calculoVerdadeiro = ""
calculoVerdadeiro2 = ""
controle_calculo = true
var vezes, menos, div, percent, parentese, mais, habilitador
habilitador = true


function atualizar(){
    var mudar =  document.getElementById("numeros_grandes")
    mudar.innerHTML = calculo1
    var mudar2 = document.getElementById("numeros_pequenos")
    mudar2.innerHTML = calculo2
}


function addnumero(num){
    calculo1 += String(num)
    if (controle_calculo){
        calculoVerdadeiro += String(num)
    }else{
        calculoVerdadeiro2 += String(num)
    }
    console.log(calculo1)
    controle_por_fora = true
    atualizar()
}


function apagar_tudo(){
    calculo1 = ""
    calculo2 = ""
    calculoVerdadeiro = ""
    atualizar()
}

function addvezes(){
    if(habilitador){
    calculo1 += "x"
    calculo2 += calculo1
    calculo1 = ""
    mais = true
    }else{
        calcular()
    }
}

function adddiv(){
    if(habilitador){
    calculo1 += "/"
    calculo2 += calculo1
    calculo1 = ""
    div = true
    }else{
    calcular()
    }
}

function addpercent(){
    if(habilitador){
    calculo1 += "%"
    calculo2 += calculo1
    calculo1 = ""
    percent =true
    }else{
        calcular()
    }
}

function addmais(){
    if(habilitador){
    calculo1 += "+"
    calculo2 += calculo1
    calculo1 = ""
    mais = true
    }else{
        calcular()
    }
}

function addmenos(){
    if(habilitador){
    calculo1 += "-"
    calculo2 += calculo1
    calculo1 = ""
    menos = false
    } else{
        calcular()
    }
}

function addponto(){
    if (!calculo1.includes(".")){
        calculo1 += "."
    }
}

var controle = true
var controle_por_fora = true

function addpa(){
    if (controle){
        calculo1 += "("
        controle = false
        controle_por_fora = false

    }else if (controle_por_fora) {
        calculo1 += ")"
        controle = true
    }
    atualizar()
}



function calcular(){
    calculo2 += calculo1
    controle_calculo = false

    atualizar()

}