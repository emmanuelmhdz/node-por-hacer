
let  { argv }  = require('./config/yargs');
let { colors } = require('colors')
let { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case "crear":
        let tarea = crear(argv.descripcion)
        console.log(tarea);
        break;
    case "listar":
        let listado = getListado();
        for(let tarea of listado){
            console.log("==============================".green);
            console.log(tarea);
            console.log("==============================".green);
        }
        break;
    case "actualizar":
        actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        borrar(argv.descripcion);
        break;
    default:
        console.log('comando no reconocido');
        break;
}