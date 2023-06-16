
const getUser = (req, res)=>{
     

    console.log("Peticion recibida por el cliente")
    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)


    let respuesta = {ok:true, codigo: 200, message:"Recibido!"}

    res.send(respuesta)

}

const getUser2 = (req, res)=>{

    let respuesta = {ok:true, codigo: 200, message:"Adios!"}

    res.send(respuesta)
}

const postUser = (req, res)=>{
    
    let respuesta = {error:true, codigo: 200, result: []}

    res.send(respuesta)
}

const putUser = (req, res)=>{

    let respuesta = {error:true, codigo: 200, result: []}

    res.send(respuesta)
}

const deleteUser = (req, res)=>{

    let respuesta = {error:true, codigo: 200, result: []}

    res.send(respuesta)
}

module.exports = {postUser, getUser, getUser2, putUser, deleteUser};