import './App.css';
import Area from './components/Area/Area';
import CardsContainer from './components/CardsContainer/CardsContainer';

function App() {
    return (
        <div className="App">
            <Area>
                <CardsContainer />
            </Area>
        </div>
    );
}

export default App;
