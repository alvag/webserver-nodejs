const express = require( 'express' );
const app = express();

app.use( express.static( __dirname + '/public' ) );

// Express HBS engine
app.set( 'view engine', 'hbs' );

app.get( '/', ( req, res ) => {
    res.render( 'home', {
        nombre: 'Max Alva',
        year: new Date().getFullYear()
    } );
} );

app.listen( 3000, () => {
    console.log( 'Escuchando peticiones en el puerto 3000' );
} );
