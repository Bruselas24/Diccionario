//!---IMPORTANTE---!
//Este archivo es unicamente para desarrollar la interfaz de usuario

const inquire = require('inquirer')

const menu = async() => {

    const opciones = [{
        type: 'list',
        name: 'opt',
        message: 'Seleccione una opcion',
        choices: [{
                value: '1',
                name: '1.Ingresar palabra'
            },
            {
                value: '2',
                name: '2.Mostrar tabla'
            },
            {
                value: '3',
                name: '3.Buscar palabra'
            },
            {
                value: '4',
                name: '4.Salir'
            }
        ]
    }]

    const resp = await inquire.prompt(opciones)
    return resp
}

const ingresaPalabra = async() => {

    const output = [{
        type: 'input',
        name: 'palabra',
        message: 'Ingrese la palabra',
        validate: function(input) {

            var done = this.async();

            if (input == '') {
                done('No puede ingresar nada...');
                return;
            }
            // Pass the return value in the done callback
            done(null, true);
        }
    }]

    const resp = await inquire.prompt(output)
    return resp;

}

const añadirOtraPalabra = async() => {

    const output = [{
        type: 'list',
        name: 'value',
        message: '¿Quiere ingresar otra palabra?',
        choices: [{
                key: 'S',
                name: 'Si'
            },
            {
                key: 'N',
                name: 'No'
            }
        ]
    }]

    const { value } = await inquire.prompt(output)
    return value

}

const continuar = async() => {

    const output = [{
        type: 'confirm',
        name: 'value',
        message: 'Presione una tecla para continuar'
    }]

    await inquire.prompt(output)

}

module.exports = {
    menu,
    ingresaPalabra,
    añadirOtraPalabra,
    continuar
}