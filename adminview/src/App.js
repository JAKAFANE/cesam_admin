import { RouterProvider } from 'react-router-dom';
import CustomRouter from './routes/CustomRouter';

function App() {
  return (
    <div className="text-center flex justify-center w-screen h-screen">
     <RouterProvider router={CustomRouter} /> 
    </div>
  );
}

export default App;
