let dispersion = (palabra) => {

    let suma = 0

    for (let i = 0; i < palabra.length; i++) {
        suma += palabra.charCodeAt(i) - 96
    }

    return suma % 20
}

module.exports = dispersion