import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import Footer from "../components/Footer";

const EditPage = () => {
    return (
        <div>
            <Navbar/>
                abcdef going to do 等我一下
            <Footer/>
        </div>
    );
};

export default EditPage;
