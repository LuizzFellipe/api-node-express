import db from '../database/db.js';

const getById = async (id) => {
    return await db.query("SELECT nome, email FROM users WHERE id = ?", [id])
};

// const postById = async () => {
//     return await db.query("INSERT INTO users (id, nome, email, senha) VALUES (?, ?, ?, ?")
// };

export default {getById};