const  Book  = require("../models/Book")


let libro1 = new Book(48, 84, "El secreto", "Autoayuda", "Rhonda Byrne", 19, "imagen");
let libros = []

libros.push(libro1)



const getBook = (req, res)=>{
     
    res.send(libro1)
    

}

const getBook2 = (req, res)=>{
     
    for (let i = 0; i < libros.length; i++) {
        if(req.query.id == libros[i].id_book){res.send(libro1)
        } else{res.send(libros)}
    
}
}


const postBook = (req, res)=>{
    
    if(libro1 == null){
        libro1 = new Book (req.body.id_book, req.body.id_user, req.body.title, req.body.author, req.body.price, req.body.photo
        
    )}

    res.send("libro añadido correctamente")
}

const postBook2 = (req, res)=>{
    
    let libro2 = new Book (req.body.id_book, req.body.id_user, req.body.title, req.body.author, req.body.price, req.body.photo
        )

    libros.push(libro2)

    res.send("libro añadido correctamente")
}

const putBook = (req, res)=>{
    
    let updateLibro = false;
    let buscaLibro = req.body.id_book;
    let libroNuevo = new Book(buscaLibro, req.body.id_user, req.body.title, req.body.author, req.body.price, req.body.photo)

    if(libro1 != null){
        updateLibro == true;
        libro1 = libroNuevo  
    }

    res.send(libroNuevo)
}

const putBook2 = (req, res)=>{
    
    let updateLibro = false
    let buscaLibro = req.body.id_book;
    let libroNuevo = new Book(buscaLibro, req.body.id_user, req.body.title, req.body.author, req.body.price, req.body.photo)
    for (let i = 0; i < libros.length; i++) {
      if(buscaLibro == libros[i].id_book){
         updateLibro = true; 
        libros[i] = libroNuevo
      }
  }

  res.send(libros)
}


const deleteBook = (req, res)=>{

    if(libro1 != null){
        libro1 = null
    }

    res.send("Libro borrado correctamente")
}

const deleteBook2 = (req, res)=>{

    let deleteLibro = false
    let buscaLibro = req.body.id_book;
    for (let i = 0; i < libros.length; i++) {
      if(buscaLibro == libros[i].id_book){
         deleteLibro = true; 
         libros.splice(i, 1);
      }
  }

  res.send(libros)
}

module.exports = {postBook, postBook2, getBook, getBook2, putBook, putBook2, deleteBook, deleteBook2};