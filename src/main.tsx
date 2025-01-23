import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {Toaster} from "react-hot-toast";
import LoginPage from "./Pages/LoginPage.tsx";
import RegisterPage from "./Pages/RegisterPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <App/>, errorElement: <div>Error</div>},
    {path: '/login', element: <LoginPage/>, errorElement: <div>Error</div>},
    {path: '/register', element: <RegisterPage/>, errorElement: <div>Error</div>},
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <Toaster position="bottom-right"/>
        </Provider>
    </StrictMode>,
)
