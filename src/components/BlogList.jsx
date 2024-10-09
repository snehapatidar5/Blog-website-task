// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts, deletePost } from '../redux/BlogSlice';
// import { Link } from 'react-router-dom';
// import Pagination from './Pagination'; 
// import Blog from '../assets/blog.png'

// const BlogList = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.blog.posts);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(6);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await dispatch(fetchPosts());
//       } catch (error) {
//         console.error('Failed to fetch posts:', error);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h2 className='text-center text-blue-900 font-bold text-2xl p-4'>Blog Posts</h2>

//       <Link to="/create" className='text-center text-blue-900 font-bold text-2xl p-2 cursor-pointer border-2 border-blue-900 rounded-xl mt-14 m-10'>
//         Create New Post
//       </Link>

//       <div className='mt-6'>
//         <ul className='  p-4 grid grid-cols-3 gap-4 w-[100%] '>

//           {currentPosts.map((post, index) => (
//             <div key={post.id} className='p-4 border-2 border-blue-900 h-[250px] rounded-lg '>
//             <img src={Blog} className='w-14 h-14 mx-auto'/>

//               <li className='h-[100px]'>
//                 <Link to={`/post/${post.id}`}>{`${indexOfFirstPost + index + 1}. ${post.title}`}</Link>
//               </li>
//               <div className='flex justify-center gap-4'>
//                 <Link
//                   to={`/edit/${post.id}`}
//                   className='border-2 border-blue-900 rounded-2xl px-4 p-0 sm:px-3 sm:py-1 sm:text-sm md:px-5 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg transition-all duration-300 ease-in-out'>
//                   Edit
//                 </Link>

//                 <button
//                   onClick={() => dispatch(deletePost(post.id))}
//                   className='border-2 border-blue-900 rounded-2xl px-4 p-0 sm:px-3 sm:py-1 sm:text-sm md:px-5 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg transition-all duration-300 ease-in-out'>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </ul>

//         <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
//       </div>
//     </div>
//   );
// };

// export default BlogList;

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../redux/BlogSlice';
import { Link } from 'react-router-dom';
import Pagination from './Pagination'; 
import Blog from '../assets/blog.png';

const BlogList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
         dispatch(fetchPosts());
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className='text-center text-blue-900 font-bold text-2xl p-4'>Blog Posts</h2>

      <Link to="/create" className='text-center text-blue-900 font-bold text-2xl p-2 cursor-pointer border-2 border-blue-900 rounded-xl mt-14 m-10'>
        Create New Post
      </Link>

      <div className='mt-6'>
        <ul className='p-4 grid grid-cols-3 gap-4 w-[100%] '>
          {currentPosts.map((post, index) => (
            <div key={post.id} className='p-4 border-2 border-blue-900 h-[250px] rounded-lg '>
              <img src={Blog} className='w-14 h-14 mx-auto' />
              <li className='h-[100px]'>
                <Link to={`/post/${post.id}`}>{`${indexOfFirstPost + index + 1}. ${post.title}`}</Link>
              </li>
              <div className='flex justify-center gap-4'>
                <Link
                  to={`/edit/${post.id}`}
                  className='border-2 border-blue-900 rounded-2xl px-4 p-0 sm:px-3 sm:py-1 sm:text-sm md:px-5 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg transition-all duration-300 ease-in-out'>
                  Edit
                </Link>

                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  className='border-2 border-blue-900 rounded-2xl px-4 p-0 sm:px-3 sm:py-1 sm:text-sm md:px-5 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg transition-all duration-300 ease-in-out'>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>

        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default BlogList;

