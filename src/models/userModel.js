import db from '../database/db';

const getById = async (id) => {
    return await db.query("SELECT nome, email FROM users WHERE id = ?", [id])
};

export default {getById};