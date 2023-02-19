import { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
const INITIAL_USERS = [
  {
    name: "Aadil",
    age: 26
  },
  {
    name: "Shoiab",
    age: 23
  }
]
function App() {
  const [users, setUsers] = useState(INITIAL_USERS)
  return (
    <div>
      <AddUsers />
      <UsersList users={users} />
    </div>
  );
}

export default App;
