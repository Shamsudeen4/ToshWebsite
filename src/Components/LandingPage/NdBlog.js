import React from 'react'
// import Blogexp from './Blogexp'
import BlogPostt from './BlogPostt'
import NavBar from '../NavBar'
import Ndfooter from '../Ndfooter'
import NdBlogS from './NdBlogS'
import NdBlogT from './NdBlogT'
import SSfifth from './SSfifth'
function BlogPost() {
  return (
    <div>
        <NavBar/>
     <BlogPostt/>
     
    <div className='flex w-[100%] justify-center gap-[70px] p-[7%] sm:flex-col sm:gap-[10px]'>
        <NdBlogS/>
        <NdBlogT/>
    </div>
    <SSfifth/>
     <Ndfooter/>
    </div>
  )
}

export default BlogPost
