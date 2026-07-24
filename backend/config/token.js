import jwt from "jsonwebtoken"

const genToken = async (userId) => {
    try {
        const token = jwt.sign({useerId}, process.env.JWT_SECRET, {expiresIn:"7d"})
        return token
    } catch (error) {
        console.log(error)
    }
}

export default genToken