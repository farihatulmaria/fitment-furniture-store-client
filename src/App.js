import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProducts from './Pages/AddProducts/AddProducts';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItem from './Pages/MyItem/MyItem';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/Products/ProductDetails';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header/>
      <main style={{marginTop:'125px'}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/inventory' element={<Products/>}/>
          <Route path='/inventory/:id' element={
            <RequireAuth>
              <ProductDetails/>
            </RequireAuth>
          }/>
          <Route path='/manage-inventory' element={
            <RequireAuth>
              <ManageInventories/>
            </RequireAuth>
          }/>
          <Route path='/add-products' element={
            <RequireAuth>
              <AddProducts/>
            </RequireAuth>
          }/>

          <Route path='/my-item' element={
            <RequireAuth>
              <MyItem/>
            </RequireAuth>
          }/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
      <ToastContainer/>
      <Footer/>
    </>
  );
}

export default App;
