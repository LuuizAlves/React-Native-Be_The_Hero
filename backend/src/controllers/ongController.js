const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //REQUEST: Guarda todos os dados através da requisição do usuário
    //RESPONSE: Responsável por enviar uma resposta ao usuário

    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //Usando desetruturação, o que permite que o usuário não passe mais valores que o normal
        const id = crypto.randomBytes(4).toString('HEX'); //crio automaticamente o meu ID com 4 bytes em formato de Hexadecimaal

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({id});
    }
};