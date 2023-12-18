const { register } = require('../../../controllers/userController')

async function registerUser(req, res) {
    try {
        const response = await register(req)
        if (response.errors) throw new Error(response)
        return res.status(200).json(response,{success:true})
    } catch (error) {
        console.error(error)
        return res.status(400).json('Check the Backend log for the error')
    }
}

export default registerUser;
