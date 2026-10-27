const app = require('./app');

const port = app.get('port');
const host = process.env.DEMO_MODE === 'true' ? '127.0.0.1' : undefined;

app.listen(port, host, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
