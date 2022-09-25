import Layout from './components/Layout';
import Movies from './containers/movies';

export default function App() {
  return (
    <>
      <Layout>
        <h1>App</h1>
        <Movies />
      </Layout>
    </>
  );
}
