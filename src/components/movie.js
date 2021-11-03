import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({ title, year, summary, poster }){
    return (
        <div class="movie">
            <Link to={{
                pathname: '/movie-detail',
                state: { year, title, summary, poster, genres},
            }}
            >


            <img src={poster} alt={title} title={title} />
        <div class="movie__data">
            <h3 class="move__title">{title}</h3>
            <h5 class="move__year">{year}</h5>
            <ul class="move__genres"> 
                {genres.map((genres, index) => {
                    return <li key={index} className="move__genres"> 
                    {genres} </li>;
                })}
            </ul>
            <p class="move__summary">{summary.slice(0,180)}...</p>
        </div>
        </Link>
    </div>
    );
}
Movie.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;