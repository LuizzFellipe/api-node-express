import db from '../database/db.js';

const product = async (id) => {
    return await db.query("SELECT marca, modelo, preco FROM product WHERE id = ?", [id])
};

const productAll = async () => {
    return await db.query("SELECT id, marca, modelo FROM product")
};

const insert = async (user) => {
    const {marca, modelo, preco} = user
    return await db.query("INSERT INTO product ( marca, modelo, preco) VALUES ( ?, ?, ?);", [marca, modelo, preco])
};

const update = async (user) => {
    const {id, marca, modelo, preco} = user
    return await db.query("UPDATE product SET marca = ?, modelo = ?, preco = ? WHERE id = ?", [marca, modelo, preco, id])
};

const remove = async (id) => {
    return await db.query("DELETE FROM product WHERE id = ?", [id])
};

export default {product, productAll, insert, update, remove};