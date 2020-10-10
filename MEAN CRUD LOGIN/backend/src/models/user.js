const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    email: {
        type: String,
        trim: true,
        unique: ['Existe ya un correo con ese dominio', true]
    },
    password: String
},{
    timestamps:true
});

module.exports = model('Administradores', userSchema);