const mongoose = require('mongoose');

// Step 2 => UserSchema create kia 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:"Blog"
    }]
});

// Step 3 => model ko export krna
module.exports = mongoose.model('User', UserSchema);