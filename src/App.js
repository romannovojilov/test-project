import './App.css';
import Area from './components/Area/Area';
import UsersList from './components/UsersList/UsersList';

function App() {
    return (
        <div className="App">
            <Area>
                <UsersList />
            </Area>
        </div>
    );
}

export default App;
