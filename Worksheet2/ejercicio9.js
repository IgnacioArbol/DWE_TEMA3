function lanzamineto(){
    var arrsum=[];

    for(let i=0; i<=35999; i++){
        var lanza1=parseInt(Math.random()*6+1);
        var lanza2=parseInt(Math.random()*6+1);
        arrsum.push((+lanza1)+(+lanza2));
    }
    return arrsum;
}