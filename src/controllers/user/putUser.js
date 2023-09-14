import user from '../../models/userModel.js';

const putUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.update(userData)
        if (result.affectedRows === 1) {
            res.json({
                success: "Usuário atualizado com Sucesso!",
                user: {
                    ...userData
                }
            })
        };
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Erro no Servido!'
        });
    };
};


export default putUser;