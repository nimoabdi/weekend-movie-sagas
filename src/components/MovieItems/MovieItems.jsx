import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

function MovieDetails() {
    const history = useHistory();
    const dispatch = dispatch();
    const details = useSelector(store=> store.details);
    console.log('in movie details', details);

    return (
        <>
        
        </>
    )
}
export default MovieDetails;