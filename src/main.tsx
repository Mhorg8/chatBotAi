import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {Toaster} from "react-hot-toast";

const router = createBrowserRouter([
    {path: '/', element: <App/>, errorElement: <div>Error</div>}
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <Toaster position="bottom-right"/>
        </Provider>
    </StrictMode>,
)
