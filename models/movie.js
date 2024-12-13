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
        director: String, 
        actors: String,
        awards: String,
    watched: {
        type: Boolean,
        default: false
    }
});

// <------------------------------------------- Model ---------------------------------------------------->
const Movie = mongoose.model('Movie', movieSchema);
// <------------------------------------------- Export --------------------------------------------------->
module.exports = Movie;