class Book {
    title=0;
    genre=0;
    author=0;
    read=0;
    date=0
    constructor( title, genre, author, read, date){
        this.title= title;
        this.genre= genre;
        this.author= author;
        this.read= read;
        this.date= date;
    }
}

class Booklist {
    librosLeidos="";
    librosSinLeer="";
    siguienteLibro="";
    libroActual="";
    actualN=0;
    ultimoLibro="";
    array=Array();
    
    leido(){
        this.librosLeidos++;
        if(this.librosSinLeer>0){
            this.librosSinLeer--;
        }
    }
    

    addbook(book){
        this.array.push(book);
        if(book.read==true){
            this.libroleido++;
            this.ultimoLibro();
            this.libroActual();
            this.siguienteLibro();
        } else{
            this.librosSinLeer++;
            this.ultimoLibro();
            this.libroActual();
            this.siguienteLibro();
        }
    }
    ultimoLibro(){
        for(var i=this.array.length-1;i>=0;i++){
            if(this.array[i].read==true){
                this.ultimoLibro=this.array[i].title;
                break;
            }
        }
        
    }
    libroActual(){
        for(var i=0; i<this.array.length; i++){
            if(this.array[i].read==false){
                this.actualRead=this.array[i].title;
                this.actualN=i;
                break;
            }
        }
    }
    siguienteLibro(){
        for(var i=0; i<this.array.length; i++){
            if(this.array[i].read==false && i!=this.actualN){
                this.siguienteLibro=this.array[i].title;
                break;
            } else {
                if(i==this.array.length){
                    this.siguienteLibro="no quedan libros sin leer";
                }
            }
        }
    }
    finishCurrentBook(){
        for(var i=0; i<=this.array.lenght-1; i++){
            if(this.array[i].title==this.libroActual){
                this.array[i].read=true;
                this.libroleido++;
                this.librosSinLeer--;
                this.array[i].date=date.now();
                this.ultimoLibro();
                this.libroActual();
                this.siguienteLibro();
                console.log("e");
                break;
            }else{
                console.log("El libro ya esta leido");
            }
        }
    }
}

booklist =new Booklist();
booklist.addbook(new Book('titulo','genero','autor',false,Date.now));




