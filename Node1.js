// RETO 1

console.log("Mensaje1")

function Mensaje(){
    console.log("Mensaje2")
}

function Mensaje3(){
    console.log("Mensaje3")
}

setTimeout(Mensaje, 3000)

setTimeout(Mensaje3, 3001)

// RETO 2

const fs = require('fs')

let objeto = {
    name: "Marcel",
    surname: "Soto",
    age: 30, 
}

var objetoSTR = JSON.stringify(objeto);

fs.writeFile("Objeto.json", objetoSTR, 'utf8', function (err) {
    if (err) {
        console.log("Error!!!");
        return console.log(err);
    }
 
    console.log("El objeto se guardó correctamente :D");
})
;

fs.readFile("Objeto.json", (error, data)=> {
    if(error) throw error;
    console.log(data.toString());
})

//RETO 3

const readline = require('readline');

const rl = readline.createInterface({
                             input: process.stdin,
                             output: process.stdout
                        });


let objeto2 = {
    name: "",
    surname: "",
    age: 0,

}

rl.question("Cual es el nombre? ", (userImput)=>{
    objeto2.name = userImput; rl.question("Cual es el apellido? ", (userImput)=>{
        objeto2.surname = userImput; rl.question("Cual es la edad? ", (userImput)=>{
            objeto2.age = userImput; var objetoSTR2 = JSON.stringify(objeto2);
            fs.writeFile("ObjetoMarcel.json", objetoSTR2, 'utf8', function (err) {
                if (err) {
                    console.log("Error!!!");
                    return console.log(err);
                };
                 console.log("El objeto se guardó correctamente :D");
                 fs.readFile("ObjetoMarcel.json", (error, data)=> {
                    if(error) throw error;
                    console.log(data.toString());
                })
            })
        })})})




