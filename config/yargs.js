
let descripcion =  {
    demand: true,
    alias: "d",
    describe:'Descripción de la tarea'
};

let completado = {    
    alias: "c",
    describe: 'true = tarea completada, false = tarea no finalizada',
    default:true    
}

let argv = require("yargs")
  .command("crear", "Permite crear una nueva tarea por hacer", {
    descripcion
  })
  .command("actualizar", "Permite actualizar el estado de la tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Permite borrar una tarea", {
    descripcion    
  })
  .help()
  .argv;

module.exports = {
  argv
};
