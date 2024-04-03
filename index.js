function debug(){
    alert("Ta ai")
}

calculo1 = ""
calculo2 = ""
calculoVerdadeiro = null

function atualizar(){
    var mudar =  document.getElementById("numeros_grandes")
    mudar.innerHTML = calculo1
}

function addnumero(num){
    calculo1 += String(num)
    console.log(calculo1)
    calculoVerdadeiro += calculo1
    atualizar()
}


function apagar_tudo(){
    calculo1 = ""
    calculo2 = ""
    atualizar()
}

function addvezes(){
    calculo1 += "x"

}

function adddiv(){
    calculo1 += "/"
}

function addpercent(){
    calculo1 += "%"
}

function addmais(){
    calculo1 += "+"
}

function addmenos(){
    calculo1 += "-"
}

function addponto(){
    calculo1 += "."
}

function addpa(){
    if (!calculo1.includes("(")){
        calculo1 += "\u0029"
        atualizar()
    }
}