import user from '../../models/userModel.js';

const deleteUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.remove(userData.id)
        if (result.affectedRows === 1) {
            res.json({
                success: "Usuário Apagado com Sucesso!"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Erro no Servido!'
        });
    }
};

export default deleteUser;