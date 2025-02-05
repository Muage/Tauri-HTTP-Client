import "./App.css";
import {fetch} from '@tauri-apps/plugin-http';

function App() {

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/users', { method: 'GET' });

            const users = await response.json();
            console.log(users)
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();

    return (
        <></>
    );
}

export default App;
