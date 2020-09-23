module.exports = app =>{

    app.get('/personagem/id',app.api.personagem.getById);
    app.get('/personagem/location',app.api.personagem.getByLocation); // This function has filter
    
}
