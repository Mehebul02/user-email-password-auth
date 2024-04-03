
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <div className=''>
            <Header/>
            </div>
            
            <div className="min-h-[calc(100vh-120px)] ">
            <Outlet/>
            <Footer/>
            </div>
        </div>
    );
};

export default Root;