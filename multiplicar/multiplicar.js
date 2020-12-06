//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    console.log('======================================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('======================================'.green);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido como base (${base}) es inválido`)
            return
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`);
        }
    })

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`El archivo`, colors.green(`tabla-${base}.txt`), `ha sido grabado`);
            }

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}