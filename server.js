const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

class BaseDeDatos {
    constructor() {

        if (BaseDeDatos.instancia) {
            return BaseDeDatos.instancia;
        }

        this.personas = [];

        BaseDeDatos.instancia = this;
    }
    agregarPersona(persona) {
        this.personas.push(persona);
    }
    obtenerPersonas() {
        return this.personas;
    }
}

const bd = new BaseDeDatos();
app.get('/personas', (req, res) => {
    res.json(bd.obtenerPersonas());
});
app.post('/personas', (req, res) => {
    bd.agregarPersona(req.body);

    res.json({
        mensaje: "Persona guardada correctamente en la instancia única"
    });
});


app.listen(PORT, () => {

    console.log(`Servidor encendido. Entra a

http://localhost:${PORT}/prueba`);
});