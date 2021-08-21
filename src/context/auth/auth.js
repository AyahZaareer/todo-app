import React from 'react'
export const AuthContext = React.createContext();

function Auth(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState({});
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = cookie.load('auth')
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div>

        </div>
    )
}

export default Auth
