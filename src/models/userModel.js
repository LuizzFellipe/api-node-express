import db from '../database/db.js';

const getById = async (id) => {
    return await db.query("SELECT * FROM users WHERE id = ?", [id])
};

const getAll = async () => {
    return await db.query("SELECT * FROM users")
};

const insert = async (user) => {
    const { name, email, senha, photo } = user
    return await db.query("INSERT INTO users ( nome, email, senha, photo) VALUES ( ?, ?, ?, ?);", [name, email, senha, photo])
};

const update = async (user) => {
    const { id, nome, email, senha, photo } = user
    return await db.query("UPDATE users SET nome = ?, email = ?, senha = ?, photo = ? WHERE id = ?", [nome, email, senha, id, photo])
};

const remove = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ?", [id])
};

export default { getById, getAll, insert, update, remove };