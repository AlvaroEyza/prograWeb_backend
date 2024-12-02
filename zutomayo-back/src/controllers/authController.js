import repository from '../repository/usuario.js';

const login = (req, res) => {
    const { email, password } = req.body;
    const user = repository.findByEmailAndPassword(email, password);

    if (user) {
        res.json({ message: 'Login successful', role: user.role, idUser: user.id});
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

const authController = { login };

export default authController;