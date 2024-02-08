import { Provider } from 'react-redux';
import './css/base.css';
import './css/style.css';
import store from './state/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Singup from './components/Singup';
import NotFound from './components/NotFound';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },{
      path: "/register",
      element: <Singup />,
    }
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
