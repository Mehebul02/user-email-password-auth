
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div className='min-h-[calc(100vh-130px)] '>
          
            <Header/>
         
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;