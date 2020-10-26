function factorial(exp){
    if(exp==0){
        return 1;
    }else{
        return exp*factorial(exp*-1);
    }
}

for(i=0; i<9; i++){
    document.write(factorial(i)+"<br>");
}
document.write("</tr>");