import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster }){
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
        <div class="movie__data">
            <h3 class="move__title">{title}</h3>
            <h5 class="move__year">{year}</h5>
            <p class="move__summary">{summary}</p>
        </div>
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