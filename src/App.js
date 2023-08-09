import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {Route, Routes} from "react-router-dom";
import LoginForm from "./screens/loginForm";
import Layout from "./components/layout/layout";
import MainComponent from "./components/main/mainComponent";
import {navConfig} from "./components/layout/header/header";
import WellInputPage from "./screens/wellInput";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={MainComponent}/>
                    <Route path={navConfig.inputs.wellInput} element={<WellInputPage/>}/>
                    <Route path={navConfig.inputs.stringInput} element={<div>String Input page</div>}/>
                </Route>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/registration" element={<div>Register page</div>} />
            </Routes>

            <ToastContainer/>
        </>
    );
}

export default App;
