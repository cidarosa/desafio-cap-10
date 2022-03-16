import { ReactComponent as MainImage } from 'assets/images/auth-image.svg';
import { Route, Switch } from 'react-router';
import Login from './Login';

import './styles.css';

const Home = () => {

    return (
        <div className="home-container">
            <div className="home-banner-container">
                <h1>Avalie Filmes</h1>

                <p>Diga o que você achou do seu filme favorito</p>
                <MainImage />
            </div>

            <div className="home-form-container">
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>

                </Switch>
            </div>
        </div>
    );
};

export default Home;