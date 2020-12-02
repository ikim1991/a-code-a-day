const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./middleware/logger');
const membersRouter = require('./router/members');
const members = require('./models/Members');

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Home page Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    })
});

//Body parser middleware
app.use(express.json());
// Form Submissions
app.use(express.urlencoded({extended: false}));

app.use(membersRouter);



// Set static folder
// app.use(express.static(path.resolve(__dirname, '../public')));

// app.get('/', (req, res) => {
//     try{
//         return res.sendFile(path.resolve(__dirname, '../public/index.html'));
//     } catch(e){
//         console.error(e);
//         return res.send("Error")
//     }
// })


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}...`)
})