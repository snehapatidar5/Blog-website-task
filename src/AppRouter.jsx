import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Header from './components/Header';
import Footer from './components/Footer';


const AppRouter = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost />} />
    </Routes>
  <Footer/>
  </Router>
);

export default AppRouter;
