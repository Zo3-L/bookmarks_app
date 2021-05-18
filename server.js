const express = require('express');
const app = express();

const {syncAndSeed} = require('./db');

const run = async() => {
    try{
        await syncAndSeed();
        console.log('synced and seeded');
        const port = process.env.PORT || 3000;
        app.listen(port, () =>{})
    }
    catch(ex){
        console.log(ex);
    }
};

run();