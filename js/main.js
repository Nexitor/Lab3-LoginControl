
function pwdVerify(){

    // atrapamos los datos enviados

    user = document.getElementById("user").value
    pwd = document.getElementById("pwd").value

    // Validamos si la contraseña es segura

    vowels = "aeiouAEIOU"
    contVow = 0
    contCon = 0

    for(i=0; i < pwd.length; i++){

        if(vowels.includes(pwd[i])){
            contVow++
        }else{
            contVow = 0
            contCon++
        }
    }

    console.log(contVow,contCon,pwd)
    if(contCon >= 3){
        alert(`Hola ${user}\n
            Su contraseña NO es segura\n
            Ya que posee ${contCon} consonante\n
            Para hacerla segura debe tener\n 
            menos de 3 vocales seguidas y menos de 3 consonantes\n
            Intentelo nuevamente`)
    }else if(contVow >= 3){

        alert(`Hola ${user}\n
            Su contraseña NO es segura\n
            Ya que posee ${contVow} vocales seguidas\n
            Para hacerla segura debe tener\n 
            menos de 3 vocales seguidas y menos de 3 consonantes\n
            Intentelo nuevamente`)

    }else{
       alert(`Hola ${user}\nSu contraseña SI es segura`)
    }
}