import product from '../../models/productModel.js'

const getProduct = async (req, res) => {
    try {
        const userData = req.body
        const [rows] = await product.product(userData.id)
        if (rows.length === 0) {
            res.json({
                error: `Produto id: ${userData.id} não Encontrado`
            })
        } else {
            res.json({
                success: 'Produto Encontrado com Sucesso',
                user: rows[0]
            });
        };
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Erro no Servido!'
        })
    };
};

export default getProduct;