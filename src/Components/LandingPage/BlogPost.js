import React from 'react'
import Blogexp from './Blogexp'
import BlogPostt from './BlogPostt'
import NavBar from '../NavBar'
import SSfifth from './SSfifth'
import Ndfooter from '../Ndfooter'
import { Helmet } from 'react-helmet'
function BlogPost() {
  return (
    <div>
      <Helmet>  
        <title>Blog | Toshconsult Technologies Inc</title>  
        
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
      <NavBar blog="active"/>
     <BlogPostt/>
     <Blogexp/> 
     <SSfifth/>
     <Ndfooter/>
    </div>
  )
}

export default BlogPost
