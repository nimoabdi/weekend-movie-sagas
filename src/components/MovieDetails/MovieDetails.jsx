import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const fetchDetails = useSelector(store => store.movieDetails);
    
    useEffect(()=> {
        dispatch({
            type: 'GET_DETAILS',
            payload: params.id
        })
       
    },[])

    const backToHome = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>Movie view {params.id}</h2>

          
            <div key={fetchDetails.id}>
                    <h2>{fetchDetails.title}</h2>
                    <img src={fetchDetails.poster}/>
                    <p>{fetchDetails.description}</p>
                    <Button type='submit' color='secondary' variant="contained" onClick= {backToHome}>home</Button>
                </div>
               
        
        </div>
    )
}

export default MovieDetails;