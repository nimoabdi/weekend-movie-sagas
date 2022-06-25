import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
function MovieDetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const fetchDetails = useSelector(store => store.movieDetails);
    
    useEffect(()=> {
        dispatch({
            type: 'GET_DETAILS',
            payload: params.id
        })
    },[])

    // const backToHome = () => {
    // }

    return (
        <div>
            <h2>Movie view {params.id}</h2>
            {fetchDetails.map(movie =><div key={item.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster}/>
                    <p>{movie.description}</p>
                </div>
                )}
        </div>
    )
}
export default MovieDetails;