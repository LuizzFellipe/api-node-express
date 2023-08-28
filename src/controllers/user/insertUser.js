import user from '../../models/userModel.js'


const postUser = async (req, res) => {
    const userInsert = req.body
    const [rows, fields] = await user.postById(userInsert)
    res.json({
        
    })
}

export default postUser;