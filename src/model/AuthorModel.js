const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@aryaapp.wepur.mongodb.net/LIBAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;