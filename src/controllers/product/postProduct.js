import product from '../../models/productModel.js'


const postProduct = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await product.insert(userData)
        if (result.affectedRows === 1) {
            res.json({
                success: "Produto inserido com Sucesso!",
                user : {
                    id : result.insertId,
                    ...userData                    
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error : 'Erro no Servido!'
        })
    }
}

export default postProduct;