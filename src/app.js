import pg from 'pg'
import express from 'express'

const app = express()
app.use(express.json())

const { Pool } = pg

const connection = new Pool({
    user: 'bootcamp_role',
    password: 'senha_super_hiper_ultra_secreta_do_role_do_bootcamp',
    host: 'localhost',
    port: 5432,
    database: 'boardcamp'
})







app.listen(4000, () => {
    console.log("Server listening at port 4000")
})