const { menu, ingresaPalabra, añadirOtraPalabra, continuar } = require('./menu')
const { Diccionario } = require('./class')


//Funcion principal
const main = async() => {

    //Iniciamos nuestro objeto diccionario
    const dic = new Diccionario

    while (true) {

        //mostramos el menu y pedimos la opcion
        let { opt } = await menu()

        //Ingresar palabra
        if (opt == '1') {

            //Iremos ingresando palabras con el metodo 'añadirPalabra'
            //hasta que el usuario no quiera mas
            do {

                let resp = await ingresaPalabra()
                dic.añadirPalabra(resp)

            } while (await añadirOtraPalabra() == 'Si')

            //Mostrar tabla
        } else if (opt == '2') {

            dic.mostrarTabla()
            await continuar()

            //Buscar palabra
        } else if (opt == '3') {

            //Usamos el metodo 'buscarPalabra'
            let resp = await ingresaPalabra()
            dic.buscarPalabra(resp)
            await continuar()

        } else break;

        console.clear()

    }


}

main()