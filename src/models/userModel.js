import db from '../database/db.js';

const getById = async (id) => {
    return await db.query("SELECT nome, email FROM users WHERE id = ?", [id])
};

const insert = async (user) => {
    const {name, email, senha} = user
    return await db.query("INSERT INTO users ( nome, email, senha) VALUES ( ?, ?, ?);", [name, email, senha])
};

const update = async (user) => {
    const {id, nome, email, senha} = user
    return await db.query("UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?", [nome, email, senha, id])
};

const remove = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ?", [id])
};

export default {getById, insert, update, remove};