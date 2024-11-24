const {auth, db} = require('../config/firebase');

exports.register = async (req, res) => {
    const {email, password, displayName} = req.body;

    try{
        const userRecord = await auth.createUser({
            email,
            password,
            displayName,
        });

        await db.collection('users').doc(userRecord.uid).set({
            email,
            displayName,
           createdAt: new Date(),
        });

        res.status(201).json({message: 'Pengguna berhasil terdaftar', uid: userRecord.uid});
    }

    catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        

        res.status(200).json({ message: 'Login request received. Use Firebase SDK on the client-side.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};