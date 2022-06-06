const { menu, ingresaPalabra, añadirOtraPalabra, continuar } = require('./menu')
const { Diccionario } = require('./class')

const main = async() => {

    const dic = new Diccionario

    while (true) {
        let { opt } = await menu()

        if (opt == '1') {

            do {

                let resp = await ingresaPalabra()
                dic.añadirPalabra(resp)

            } while (await añadirOtraPalabra() == 'Si')

        } else if (opt == '2') {

            dic.mostrarTabla()
            await continuar()


        } else if (opt == '3') {

            let resp = await ingresaPalabra()
            dic.buscarPalabra(resp)
            await continuar()

        } else break;

        console.clear()

    }


}

main()