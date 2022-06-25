import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function MovieDetails() {
    const history = useHistory();
    const movie = useSelector(store => store.movie)
    const genres = useSelector(store => store.genres)

    const backToHome = () => {
        history.push('/')
    }

    return (
        <>
      
               
            
        </>
    )
}
export default MovieDetails;