const app = require('./config/express')();
const port = app.get('port');

// RODANDO A APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`[Servidor rodando na porta - ${(new Date()).toISOString()}] The server is running on port: ${port}`)
});
