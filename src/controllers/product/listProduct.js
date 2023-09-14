import product from '../../models/productModel.js';

const listProduct = async (req, res) => {
    try {
        const [rows] = await product.productAll()
        if (rows.length === 0) {
            res.status(404).json({
                error: "Nenhum Produto encontrado!"
            })
        } else {
            res.json({
                success: "Produto(s) Encontrado(s) com Sucesso!",
                users: rows
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Erro no Servido!'
        });
    }
}

export default listProduct;