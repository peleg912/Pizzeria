const express = require('express');
const next =  require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

mongoose.connect("mongodb+srv://peleg123:peleg123@pizza1.zyjda.mongodb.net/pizzaSite?retryWrites=true&w=majority",
 {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('connected');
}).catch((err)=> {
    console.log(err);
});

//Models
const Pizza = require('./models/pizza');
const Site = require('./models/site');
const Messsage = require('./models/messages');


app.prepare()
 .then(()=> {
    const server = express();
    server.use(bodyParser.json());

    server.post('/api/v1/pizza', async(req, res)=> {
        const pizza = new Pizza(req.body);
        try{
            await pizza.save();
            res.send(pizza);
        }catch(err){
            res.status(500).send(err);
        }
    });

    server.get('/pizzas/pizza/:name', (req, res)=> {
        const actualPage = "/pizzas/pizza";
        const queryParams = {pizzaName: req.params.name};

        app.render(req, res, actualPage, queryParams);
    });

    server.get('/api/v1/pizza', async(req, res)=> {
        try{
            const pizzas = await Pizza.find({});
            res.send(pizzas);
        }catch(err){
            res.status(500).send(err);
        }
    });

    server.get('/api/v1/pizza/:name', async(req, res)=> {
        try {
            const pizza = await Pizza.find({idName: req.params.name});
            res.send(pizza);
        } catch (error) {
            res.status(500).send(err);
        }
    });

    server.get('/api/v1/site', async (req, res)=> {
        try {
            const info  = await Site.find({});
            res.send(info);
        } catch (error) {
            res.status(500).send(err);
        }
    });

    server.post('/api/v1/msg', async (req, res)=> {
        const msg = new Messsage(req.body);
        try {
            await msg.save();
            res.send({status: 'done'});
        } catch (error) {
            res.status(500).send(err);
        }
    })

    server.get('*', (req, res)=> {
        return handle(req, res);
    })

    server.listen(3000, (err)=> {
        if (err) throw err;
        console.log('server is listening on port:3000');
    })
 })
 .catch((ex)=> {
     console.error(ex.stack);
     process.exit(1);
 })
