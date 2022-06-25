import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

function MovieDetails({}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store=> store.details);
    console.log('in movie details', details);

    const getMovie = () => {
        dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    return (
        <>
        
        </>
    )
}
export default MovieDetails;