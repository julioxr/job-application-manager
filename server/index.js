const server = require("./src/app.js")
const PORT = process.env.PORT || 3000;

//!Falta sincronizar esto con la base de datos

server.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});