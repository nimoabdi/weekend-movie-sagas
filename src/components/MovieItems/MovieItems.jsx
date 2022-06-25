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
            <h2>Add a movie 🎥</h2>
                <form onSubmit={getMovie}>
                     <input type='text' value={title} placeholder='Title' onChange={(e)=> {setTitle(e.target.value)}}/>
                     <input type='text' value={url} placeholder='Url'  onChange={(e)=> {setUrl(e.target.value)}}/>
                     <input type='text' value={description} placeholder='Description'  onChange={(e)=> {setDescription(e.target.value)}}/>
        
                     <select>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space Opera</option>
                        <option value="13">Superhero</option>
                     </select>
                     <button>Add a New Movie</button>
                 </form>
        </div>
        )
    }
    export default MovieItems;