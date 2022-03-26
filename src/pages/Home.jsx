import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductDisplay from "../components/ProductDisplay";
import { useState } from 'react';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (val) => {
        setSearchValue(val);
    };

    return (
        <div>
            <Banner onChange = {handleSearch}/>
            <ProductDisplay value = {searchValue} />
            <Footer />
        </div>
    );
};

export let cartArr = [];
export let quanArr = [];

export default Home;