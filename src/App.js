import { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
const INITIAL_USERS = [
    {
        id: 'a1',
        name: 'Aadil',
        age: 26,
    },
    {
        id: 'a2',
        name: 'Shoiab',
        age: 23,
    },
];
function App() {
    const [users, setUsers] = useState(INITIAL_USERS);
    const onAddUser = (data) => {
        // console.log(data);
        setUsers((prevUsers) => {
            return [data, ...prevUsers];
        });
    };
    return (
        <div>
            <AddUsers onAddUser={onAddUser} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
