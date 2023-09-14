import user from '../../models/userModel.js'


const postUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.insert(userData)
        if (result.affectedRows === 1) {
            res.json({
                success: "Usuário inserido com Sucesso!",
                user: {
                    id: result.insertId,
                    ...userData
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Erro no Servido!'
        })
    }
}

export default postUser;