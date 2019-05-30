let fs = require("fs");

let listado = [];

let crear = descripcion => {
    cargar();
    let porHacer = {
        descripcion,
        completado: false
    };

    listado.push(porHacer);
    guardar();

    return porHacer;
};

let getListado = () => {
    cargar();
    return listado;
}

let actualizar = (descripcion, completado = true) => {
    cargar();

    let tarea = listado.find( t => t.descripcion === descripcion);
    
    if(!tarea){
        throw new Error(`Tarea "${descripcion}" no encontrada`);
    }

    tarea.completado = completado;
    guardar();
}

let borrar = (descripcion) => {
    cargar();
    
    let nuevoListado = listado.filter(tarea => tarea.descripcion !== descripcion);

    if (listado.length === nuevoListado.length){
        return false;
    }else{
        listado = nuevoListado;
        guardar();
        return true;
    }    
}

let cargar = () => {
    try {
        listado = require("../db/data.json");
    } catch (error) {
        listado = [];
    }
};

let guardar = () => {
    let json = JSON.stringify(listado);
    let data = new Uint8Array(Buffer.from(json));

    fs.writeFile("db/data.json", data, err => {
        if (err) throw new Error(err);
        else console.log("guardo en bd");
    });
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};
