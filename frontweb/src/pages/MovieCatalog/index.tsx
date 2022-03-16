import { NavLink } from 'react-router-dom';

import './styles.css';

const MovieCatalog = () => {

    return (
        <div className="container my-4 movies-container">

            <div className="row movies-title-container">
                <h1>Tela listagem de filmes</h1>
            </div>

            <div className="row movie-link">
                <NavLink to="/movies/1">Acessar /movies/1</NavLink>
                <NavLink to="/movies/2">Acessar /movies/2</NavLink>
            </div>
        </div>
    );
};

export default MovieCatalog;