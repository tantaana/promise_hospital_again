import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import { Toast } from 'react-toastify/dist/components';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toast></Toast>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
