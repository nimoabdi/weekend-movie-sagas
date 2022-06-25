const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const queryText =
  `SELECT movies.id, movies.title, genres.name FROM movies 
       JOIN movies_genres ON movies.id = movies_genres.movie_id 
        JOIN genres ON genres.id = movies_genres.genre_id 
             WHERE movies.id= $1;`;
  pool.query(queryText, [req.params.id])
  .then((result)=> {
    res.send(result.rows);
  })          
  .catch((error)=> {
    console.log('error in GET genre DB', error)
  }) 
  res.sendStatus(500)
});

module.exports = router;