function lanzamiento(){
    var resultado= parseInt(Math.random()*6+1);
    return resultado
}
function lanzar(){
    let lanza1= 0;
    let lanza2= 0;
    let lanza3= 0;
    let lanza4= 0;
    let lanza5= 0;
    let lanza6= 0;

    for(let i=0; i<=5999; i++){
        var tirar=lanzamiento();

        if(tirar==1){
            lanza1++;
        }else if(tirar == 2){
            lanza2++;
        }else if(tirar == 3){
            lanza3++;
        }else if(tirar == 4){
            lanza4++;
        }else if(tirar == 5){
            lanza5++;
        }else if(tirar == 6){
            lanza6++;
        }
    }

    document.write("El 1 ha salido "+lanza1+" veces </br>");
    document.write("El 2 ha salido "+lanza2+" veces </br>");
    document.write("El 3 ha salido "+lanza3+" veces </br>");
    document.write("El 4 ha salido "+lanza4+" veces </br>");
    document.write("El 5 ha salido "+lanza5+" veces </br>");
    document.write("El 6 ha salido "+lanza6+" veces </br>");

}
lanzar();