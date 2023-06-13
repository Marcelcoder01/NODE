//-- RETO PROMISES --

const fs = require('fs/promises')

let objeto = {
    name: "Marcel",
    surname: "Soto",
    age: 30, 
}

var objetoSTR = JSON.stringify(objeto);

//-->Métodos then/catch

fs.writeFile('Objeto.json', objetoSTR)
.then(()=> {
    return fs.readFile('Objeto.json', 'utf8');

})
.then(data =>{
    console.log(JSON.parse(data));
    console.log("El objeto se guardó dpm")
})
.catch(err=> {
    console.log(err);
})

//-->Métodos async/await

async function objetoAsync(){
    await fs.writeFile('Objeto.json', objetoSTR)
    const nuevo = await fs.readFile('Objeto.json', 'utf8')
    console.log(JSON.parse(nuevo))
    console.log("El objeto se guardó con el método Async");
    
}

objetoAsync()
;

//--> METODO READLINE

const readline = require('readline');

let objeto2 = {
    name: "",
    surname: "",
    age: 0,

}
function misPreguntas(preguntas){
    const question = new Promise ((resolve, reject) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });


        rl.question("Cual es el nombre? ", (userImput)=>{
            objeto2.name = userImput; rl.question("Cual es el apellido? ", (userImput)=>{
                objeto2.surname = userImput; rl.question("Cual es la edad? ", (userImput)=>{
                    objeto2.age = userImput; var objetoSTR2 = JSON.stringify(objeto2); resolve(userImput);rl.close;
                    fs.writeFile('Objeto.json', objetoSTR2)
                    .then(()=> {
                        return fs.readFile('Objeto.json', 'utf8');
                    
                    })
                    .then(data =>{
                        console.log(JSON.parse(data));
                        console.log("El objeto se guardó dpm")
                    })
                    .catch(err=> {
                        console.log(err);
                    
                    }); return question
                })})})
        
    })
}
misPreguntas()



