import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { useState } from 'react';

function MovieItems({}) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log('in movie details', details);

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const getMovie = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                url: url,
                description: description
            }
        })
        history.push('/details')
    }

    return (
        <div>
            
        </div>
    )
}
export default MovieItems;