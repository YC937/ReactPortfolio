import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bulma/css/bulma.min.css';
import './styles/index.css';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectList from './pages/ProjectList.jsx';
import Resume from './pages/Resume.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/projects',
        element: <ProjectList />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
