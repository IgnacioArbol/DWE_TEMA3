function potencia(base,exponente){
    if(exponente==0){
        return1;
    }else{
        return base*potencia(base,exponente-1);
    }
}