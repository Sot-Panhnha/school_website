import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPageLayout from '../components/BlogPageLayout';


const BlogPage = () => {
    return(
        <>
            <Navbar/>
            <BlogPageLayout/>
            <Footer/>
        </>
    )
}
export default BlogPage;