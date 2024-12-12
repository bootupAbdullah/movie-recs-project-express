// <------------------------------------------- Imports and Configuration ------------------------------->
const  mongoose = require ('mongoose');
// <------------------------------------------- Schemas ------------------------------------------------->

const movieSchema = new mongoose.Schema({
        title: String,
        plot: String,
        runtime: String,
        rated: String,
        released: Date,
        genre: String,
        poster: String,
    watched: {
        type: Boolean,
        default: false
    }, 
    addtionalIndfo: {
        director: String, 
        actors: String,
        awards: String,
    }
});

// <------------------------------------------- Model ---------------------------------------------------->
const Movie = mongoose.model('Movie', movieSchema);
// <------------------------------------------- Export --------------------------------------------------->
module.exports = Movie;