
    
class Book {
    constructor( titulo, genero, autor, leido, fecha){
        this.title= titulo;
        this.genre= genero;
        this.author= autor;
        this.read= leido;
        this.date= fecha;
    }
}

class Booklist {
    librosLeidos=0;
    librosSinLeer=0;
    siguiente="";
    libroActual="";
    actualN=0;
    ultimoLibro="";
    array=[];
    
    leido(){
        this.librosLeidos++;
        if(this.librosSinLeer>0){
            this.librosSinLeer--;
        }
    }
    

    addbook(book){
        this.array.push(book);
        if(book.read==true){
            this.librosLeidos++;
            this.lastBook();
            this.actual();
            this.siguienteLibro();
        } else{
            this.librosSinLeer++;
            this.lastBook();
            this.actual();
            this.siguienteLibro();
        }
    }
    lastBook(){
        for(var i=this.array.length-1;i>=0;i--){
            if(this.array[i].read==true){
                this.ultimoLibro=this.array[i].title;
                break;
            }
        }
        
    }
    actual(){
        for(var i=0; i<this.array.length; i++){
            if(this.array[i].read==false){
                this.libroActual=this.array[i].title;
                this.actualN=i+1;
                break;
            }else{
                if(i<this.actualN){
                    this.libroActual="ya has terminado"
                }
            }
        }
    }
    siguienteLibro(){
        for(var i=0; i<this.array.length; i++){
            if(this.array[i].read==false && i!=this.actualN){
                this.siguiente=this.array[i].title;
                break;
            } else{
                if(i==this.actualN){
                    this.siguiente="No hay mas libros";
                }
            }
            
        }
    }
    finishCurrentBook(){
        for(var i=0; i<=this.array.length-1; i++){
            if(this.array[i].title==this.libroActual){
                this.array[i].read=true;
                this.librosLeidos++;
                this.librosSinLeer--;
                this.array[i].date=Date.now();
                this.lastBook();
                this.actual();
                this.siguienteLibro();
                
                break;
            }else{
                console.log("ya no te quedan mas libros")
            }
        }
    }
}

booklist =new Booklist();
booklist.addbook(new Book('Alguien volo sobre el nido de cuco','historica','Ken Kensey',true,Date.now));
booklist.addbook(new Book('Crimen y castigo','vida','Fiodor Dostoievski',true,Date.now));
booklist.addbook(new Book('Las aventuras de Huckleberry Finn','vida','Mark Twain',false,Date.now));
booklist.addbook(new Book('La ladrona de libros','historica','Markus Zusak',false,Date.now));

