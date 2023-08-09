import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import {useState} from "react";

const BASE_NAME = "https://rsbtest.xyz"

const API_CLIENT = axios.create({
    baseURL: BASE_NAME,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})


const API = {
    login: '/login'
}

function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const isLogin = localStorage.getItem('token') || ''

    console.log({isLogin})

    const handleSubmit = async (e) => {
        e.preventDefault()


        console.log({username, password})

        try {
            setIsLoading(true)

            if(username && password) {
                const response = await API_CLIENT.post(API.login, {username, password})

                if(response.data) {
                    localStorage.setItem('token', JSON.stringify(response.data.access_token))
                    return toast.success('You are successfully login...')
                }
            } else {
                return toast.warn('Please fill all data')
            }

            return toast.error('Something was wrong... Try again later')

        } catch (e) {
            toast.error('Something was wrong...')
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <>
            {isLogin && <pre>Token: {isLogin}</pre>}
            <div className="App">
                {isLoading ? <div>Loading...</div> : <form onSubmit={handleSubmit}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <button type="submit" disabled={!username || !password}>Увійти</button>
                </form>}

                <ToastContainer/>
            </div>
        </>
    );
}

export default LoginForm;