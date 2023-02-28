import { useState } from 'react';
import Card from './components/UI/Card';
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
    const deleteHandler = (deleteId) => {
        setUsers((prevUsers) => {
            const updateusers = prevUsers.filter(
                (item) => item.id !== deleteId
            );
            return updateusers;
        });
    };
    return (
        <>
            <AddUsers onAddUser={onAddUser} />
            {/* <UsersList users={users} onDelete={deleteHandler} /> */}
            {users.length > 0 ? (
                <UsersList users={users} onDelete={deleteHandler} />
            ) : (
                <Card
                    style={{
                        textAlign: 'center',
                        padding: '10px',
                        width: '500px',
                        margin: '0 auto',
                        color: 'red',
                    }}
                >
                    <p>No Username and password exist</p>
                </Card>
            )}
        </>
    );
}

export default App;
