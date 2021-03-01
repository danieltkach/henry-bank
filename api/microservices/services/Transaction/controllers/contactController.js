const ContactModel = require('../models/ContactModel') 

// obtener todos los contactos 

const getAllContacts = (req,res) => { 

    let user = req.params.id 

    ContactModel.find() 

        .then(res => { 

            res.status(200).json({res}) 

        }) 

        .catch( () =>res.status(400).send('Error al obtener los contactos') ) 

} 

 

module.exports = { 

    getAllContacts 

} 