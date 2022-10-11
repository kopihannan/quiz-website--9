
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './components/Quiz/Quiz';
import Topic from './components/Topic';
import Blog from './components/Blog';
import Static from './components/Static';
import Main from './components/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',element: <Main></Main>, children: [
      {path: '/',  loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      }, element: <Quiz></Quiz>},
      {path: '/topic', element: <Topic></Topic>},
      { path: '/static', element: <Static></Static> },
      { path: '/blog', element: <Blog></Blog> },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
