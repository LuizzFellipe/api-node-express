import product from '../../models/productModel.js';

const putProduct = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await product.update(userData)
        if (result.affectedRows === 1) {
            res.json({
                success : "Produto atualizado com Sucesso!",
                product : {
                    ...userData
                }
            })
        };
    } catch (err) {
        console.log(err)
        res.status(500).json ({
            error : 'Erro no Servido!'
        });
    };
};


export default putProduct;