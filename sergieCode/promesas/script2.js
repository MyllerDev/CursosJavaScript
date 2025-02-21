
let promesa = new Promise((response, reject) => {
    let resp = {
        response: 200,
        descripcion: 'Esta info es importante'
    }
    response(resp)
    reject('Falló')
})

promesa.then(resp => {
    console.log(resp.descripcion)
}).catch(error => {
    console.error(error)
})