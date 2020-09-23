const axios = require('axios');
const Personagem = require('../model/Personagem');

module.exports = app => {

    let result = [];
    let json;
    let uri;
    let resJson = {
        content: []
    }

    app.use('/personagem/location', (req, res, next) => {
        uri = "https://rickandmortyapi.com/api/location/?name=";
        json = [];

        axios.get(uri + req.query.location)
            .then(response => {
                let resp = response.data.results;
                resp = resp[0].residents;
                uri = 'https://rickandmortyapi.com/api/character/';

                resp.forEach(element => {
                    let idPersonagem = element.split('https://rickandmortyapi.com/api/character/');
                    uri += ',' + idPersonagem[1];
                });

                next();
            })
            .catch(error => {
                res.status(400).send('<h1> A uri ' + uri + ' não foi encontrada.</h1>');
                console.log(error);
            });
    });

    app.use('/personagem/', (req, res, next) => {
        json = [];

        if (req.query.id != undefined) {
            uri = 'https://rickandmortyapi.com/api/character/';
            uri += req.query.id;
        }

        axios.get(uri)
            .then(response => {
                json.push(response.data);
                next();
            })
            .catch(error => {
                res.status(400).send('<h1> A uri ' + uri + ' não foi encontrada.</h1>');
                console.log(error);
            });
    });


    const getById = (req, res) => {
        result = [];
        result.push(json);
        final(res);
    }

    const getByLocation = (req, res) => {

        result = json;

        if (req.query.species != undefined) {
            const key = personagem => personagem.species === req.query.species;
            result = result.map(element => element.filter(key));
        }
        if (req.query.gender != undefined) {
            const key = personagem => personagem.gender === req.query.gender;
            result = result.map(element => element.filter(key));
        }
        if (req.query.origin != undefined) {
            const key = personagem => personagem.origin.name === req.query.origin;
            result = result.map(element => element.filter(key));
        }
        final(res);
    }


    const final = ((res) => {

        if (result[0].length > 0) {
            resJson.content = [];

            result[0].map(element =>
                resJson.content.push(new Personagem(element.name, element.status,
                    element.gender, element.image, element.episode)));

            res.status(200).json(resJson);
        } else res.status(404).send();

        json = [];
    });

    return { getById, getByLocation };
}
