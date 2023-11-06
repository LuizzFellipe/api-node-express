import user from '../../models/userModel.js';
import session from '../../models/sessionModel.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../../config.js';

const login = async (req, res) => {
    try {
        const userData = req.body
        const [rows] = await user.getByEmail(userData.email)
        if(rows.length === 0) {
            return res.status(400).json({
                error: `Usuário ou senha inválidos!`
            })
        }
        const userFound = rows[0]
        console.log('Usuário Encontrado', userFound)
        let passIsValid = false
        try {
            passIsValid = await compare(userData.pass, userFound.pass)
            console.log(passIsValid)
        }
    }
}