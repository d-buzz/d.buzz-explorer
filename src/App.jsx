// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/actions/userActions';

const App = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSetUser = () => {
        // Example usage of setUser action
        dispatch(setUser({ id: 1, name: 'John Doe' }));
    };

    return (
        <div>
            <h1>Hello, {user ? user.name : 'Guest'}!</h1>
            <button onClick={handleSetUser}>Set User</button>
        </div>
    );
};

export default App;
