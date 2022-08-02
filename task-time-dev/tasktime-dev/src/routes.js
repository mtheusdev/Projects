import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskCreation from './pages/TaskCreation';
import TaskHistory from './pages/TaskHistory';
import TaskList from './pages/TaskList';
import News from './pages/News';
import Profile from './pages/Profile';

export default function MainRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/history" element={<TaskHistory />} />
        <Route path="/creation" element={<TaskCreation />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
