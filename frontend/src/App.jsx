import AddMovie from './components/AddMovie';
import Layout from './components/Layout';
import Movies from './containers/movies';

export default function App() {
  return (
    <>
      <Layout>
        <Movies />
        <AddMovie />
      </Layout>
    </>
  );
}
