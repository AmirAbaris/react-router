import { Link, NavLink } from 'react-router-dom';

const UserList = () => {
    const users = [1, 2, 3, 4, 5];
    return (
        <button className='flex flex-col'>
            {users.map((user) => (
                <NavLink
                    key={user}
                    to={`/users/${user}`}
                    className={({ isActive }) => {
                        return isActive ? 'text-primary-700' : '';
                    }}
                >
                    User {user}
                </NavLink>
            ))}
            <Link to="/">Go to home page</Link>
        </button>
    );
}

export default UserList;
