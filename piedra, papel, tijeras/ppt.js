//variables
var turno=true;
var resultado=null;
var j1tirada=null;
var j2tirada=null;



//clases
class Game{
    constructor(ganadas1, ganadas2){
        this.ganadas1=ganadas1;
        this.ganadas2=ganadas2;
    }

    jugar(){
        j2.tirada=(Math.round(Math.random()*(3-1)+1));

        if(j1.tirada == 1){//el usuario eligio piedra
            j1tirada="PIEDRA"
            if(j2.tirada == 1){//la maquina uso piedra       empatas
                j2tirada="PIEDRA";
                resultado = "empatas";
                game.animar();
                
            }else{
                if(j2.tirada == 2){//la maquina uso papel    pierdes
                    j2tirada="PAPEL"
                    resultado = "pierdes";
                    game.animar();
                    j2.ganadas ++;
                }else{
                    if(j2.tirada == 3){// la maquina uso tijeras     ganas
                        j2tirada="TIJERAS"
                        resultado = "ganas";
                        game.animar();
                        j1.ganadas ++;
                    }
                }
            }
        }
        if(j1.tirada == 2){//el usuario eligio papel
            j1tirada="PAPEL";
            if(j2.tirada == 1){//la maquina uso piedra       ganas
                j2tirada="PIEDRA";
                resultado = "ganas";
                game.animar();
                j1.ganadas ++;
            }else{
                if(j2.tirada == 2){//la maquina uso papel    empatas
                    j2tirada="PAPEL";
                    resultado = "empatas";
                    game.animar();
                    
                }else{
                    if(j2.tirada == 3){// la maquina uso tijeras     pierdes
                        j2tirada="TIJERAS";
                        resultado = "pierdes";
                        game.animar();
                        j2.ganadas ++;
                    }
                }
            }
        }
        if(j1.tirada == 3){//el usuario eligio tijeras
            j1tirada="TIJERAS";
            if(j2.tirada == 1){//la maquina uso piedra       pierdes
                j2tirada="PIEDRA";
                resultado = "pierdes";
                game.animar();
                j2.ganadas ++;
            }else{
                if(j2.tirada == 2){//la maquina uso papel   ganas
                    j2tirada="PAPEL";
                    resultado = "ganas";
                    game.animar();
                    j1.ganadas ++;
                }else{
                    if(j2.tirada == 3){// la maquina uso tijeras    empatas
                        j2tirada="TIJERAS";
                        resultado = "empatas";
                        game.animar();
                        
                    }
                }
            }
        }
    }
    animar(){
        for(let i=0; i++ ; i<=200){
            
            setInterval(anima, 1000);// intento de hacer un recorrido antes de dar el resultado final
            
        }
        document.getElementById('texto1').innerHTML =j1tirada;
        document.getElementById('texto4').innerHTML ="VS";
        document.getElementById("texto2").innerHTML =j2tirada;
        if(resultado=="empatas"){
            document.getElementById('texto3').innerHTML ='HAS EMPATADO';
        }else if(resultado=="ganas"){
            document.getElementById('texto3').innerHTML ='HAS GANADO!!';
        }else if(resultado=="pierdes"){
            document.getElementById('texto3').innerHTML ='HAS PERDIDO :(';
        }
    }
    anima(){
            document.getElementById('texto1').innerHTML ='piedra';
            document.getElementById('texto1').innerHTML ='papel';
            document.getElementById('texto1').innerHTML ='tijera';
            document.getElementById('texto2').innerHTML ='piedra';
            document.getElementById('texto2').innerHTML ='papel';
            document.getElementById('texto2').innerHTML ='tijera';
    }
}

class Jugador {

    constructor(nombre) {
      this.nombre = nombre;
      this.tirada = 0;
      this.ganadas= 0;
    }

    seleccionarPi(){
        this.tirada=1;
        game.jugar();
    }
    seleccionarPa(){
        this.tirada=2;
        game.jugar();
    }
    seleccionarT(){
        this.tirada=3;
        game.jugar();
    }
  }




    game = new Game(0,0);
    var j1 = new Jugador(1,0);
    var j2 = new Jugador(2,0);
    
    
  
  
