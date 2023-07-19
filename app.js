const path = require ('path')
const express = require ('express')
const app = express ()


const PORT = 3030

/* RUTA ESTÁTICA  */
app.use(express.static('public'))


/* RUTAS  */
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")) )
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")) )
app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, "views", "profile.html")) )

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "views", "404.html")) )


/* LEVANTA SERVIDOR  */
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))
