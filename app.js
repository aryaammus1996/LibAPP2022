const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path'); 
const cors = require('cors');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouters= require('./src/routes/homerouter')(nav);//part1
const booksRouter = require('./src/routes/booksroute')(nav);//part2 point6
const authorsRouter = require('./src/routes/authorsroute')(nav);// part2 point6

const app = new express(); //Part#1 Point 1

app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());
app.use(bodyParser.urlencoded({extended:true})); //part1 point2
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouters); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





const PORT =process.env.PORT || 3000;
app.listen(PORT, ()=>{                  //Part#1 Point 5
    console.log("Server Ready on 3000"); 
});