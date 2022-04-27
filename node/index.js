const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    const nomes = ["Domingos","Ferreira","Rebimbas","Belém","Curvelo","Lucas","Pessoa","Frade","Barrocas","Canto","Prestes","Clementino","Mamouros","Seixas","Natal","Moita","Eanes","Barbalho","Anlicoara","Barroqueiro","Quinterno","Benevides","Rufino","Cruz","Laureano"]

    const sql = "INSERT INTO people(name) values('"+nomes[Math.floor(Math.random() * 25)]+"')"
    
    connection.query(sql)

    connection.query('SELECT * FROM people', (err, result) => {
        let arr = []
        result.forEach((i) => {
            arr.push('<p>'+i.name+'</p>')
        })
        res.send('<h1>Full Cycle Rocks!</h1>'+arr.join(''))
    })
    connection.end()
})


app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})