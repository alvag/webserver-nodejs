const http = require( 'http' );

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let response = {
        nombre: 'Max Alva',
        url: req.url
    };

    res.write(JSON.stringify(response));
    res.end();
})
.listen(8080);

console.log( 'Escuchando el puerto 8080' );
