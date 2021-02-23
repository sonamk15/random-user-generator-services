
const express = require("express")
var cors = require('cors')
const app = express()

app.use(cors())

const knex = require('./connectWithDB');

app.use(express.json());
app.post("/add",(req,res,next)=>{
    const user = {
        name:req.body.name,
        image:req.body.image,
        phone:req.body.phone,
        gender:req.body.gender,
        email:req.body.email,
        address:req.body.address,
        dob:req.body.dob
    }
    knex('users').insert(user).then(() => {
        console.log("done")
    })
    return res.json(user)

})

app.get('/get',(req,res,next)=>{
    knex.select("*").from('users').then((users)=>{
       return res.send(users)
    })
})


app.delete('/delete/:userId',(req,res,next)=>{
    var userId = (req.params.userId)
    console.log(userId);
    knex.select("*").from('users').where('id',userId).delete().then(()=>{
        console.log("user deleted")
        return res.send("User has been deleted!")
    })
})


app.delete('/deleteAll',(req,res,next)=>{
      knex.select("*").from('users').delete().then(()=>{
        console.log("deleted all users")
        return res.send("deleted all users!")
    })
})


app.listen(9000, () => console.log('server is listening'));
