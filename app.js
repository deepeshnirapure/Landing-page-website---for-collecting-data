const express = require("express");
const path = require("path");
const fs = require('fs')
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // ========Enable static folder or Serving static file=========
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // -----set the template engine as pug-----
app.set('views', path.join(__dirname, 'views')); //----set the view directory--

//END POINT 
app.get('/', (req, res)=>{
    const con = "This is best content in the internet as far as widely used";
    const params = {'title':'gym form','content': con};
    res.status(200).render('index.pug',params);
});

app.post('/', (req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address= req.body.address
    more = req.body.more
    

    let outputToWrite = (`The name of the user ${name}, ${age} year old ,  ${gender}, and residensing ${address} and more about him/her ${more}`);
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message':'your details have been submit successfully'};
    res.status(200).render('index.pug',params);
})


//START THE SERVER
 app.listen(port ,()=>{
     console.log(`The Application is started successfully on ${port}`);
 })   