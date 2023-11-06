import db from '../database/db.js';

const getById = async (id) => {
    return await db.query("SELECT * FROM users WHERE id = ?", [id])
};

const getByEmail = async (email) => {
    return await db.query("SELECT * FROM users WHERE email = ?;", [email])
}

const getAll = async () => {
    return await db.query("SELECT * FROM users")
};

const insert = async (user) => {
    const { nome, email, senha, photo } = user
    return await db.query("INSERT INTO users ( nome, email, senha, photo) VALUES ( ?, ?, ?, ?);", [nome, email, senha, photo])
};

const update = async (user) => {
    const { id, nome, email, photo } = user
    return await db.query("UPDATE users SET nome = ?, email = ?, photo = ? WHERE id = ?", [nome, email, photo, id])
};

const remove = async (id) => {
    return await db.query("DELETE FROM users WHERE id = ?", [id])
};

export default { getById, getByEmail, getAll, insert, update, remove };