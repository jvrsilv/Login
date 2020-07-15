const knex = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { name, email, password } = req.body;

        const consult = await knex('users')
            .select('email')
            .where('email', email)
            .first();

        if (!consult) {
            await knex('users').insert({
                name,
                email,
                password
            });
            return res.json({ sucesso: "cadastrado com sucesso" });
        }
        return res.status(400).json({ error: "E-mail já castrado, tente entrar no sistema" });

    },
    async login(req, res) {
        const { email, password } = req.body;

        const consult = await knex('users')
            .select('*')
            .where('email', email)
            .where('password', password)
            .first();

        if (!consult) {
            return res.status(400).json({ error: "Dados incorretos, confira e tente novamente!" });
        }

        return res.json(consult);
    },
    async alterar(req, res) {
        const email = req.headers.email;
        const { password, newpass, confnewpass } = req.body;

        const consultar = await knex('users')
            .select('*')
            .where('email', email)
            .where('password', password)
            .first();
        if (!consultar) {
            res.status(400).json({ erro: 'Dados não conferem' });
        }
        if (newpass !== confnewpass) {
            res.status(400).json({ error: 'As senhas não conferem, tente novamente!' });
        }
        try {
            await knex('users').update('password', newpass);
            await knex('users').update('updated_at', Date.now());
            res.json({ success: `Senha alterada com sucesso para -> ${newpass}` });
        }
        catch (err) {
            res.json({ err: "erro" });
        }

    }
}
