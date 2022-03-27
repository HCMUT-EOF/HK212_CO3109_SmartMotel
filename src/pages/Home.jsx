import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDisplay from "../components/ProductDisplay";
import { useState } from 'react';

const Home = () => {
    const [gender, setGender] = useState('all');
    const [searchValue, setSearchValue] = useState('');


    return (
        <div>
            <Navbar/>
            <ProductDisplay option = {gender} value = {searchValue} /> {/* onChange success */}
            <Footer />
        </div>
    );
};

export let cartArr = [];
export let quanArr = [];

export default Home;
