import { useQuery } from 'react-query';
import styled from '@emotion/styled';

import { getMovies } from '../api';

export default function Home() {
  const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getMovies);
  console.log(data, isLoading);
  return (
    <Layout>
      <h1></h1>
    </Layout>
  );
}

const Layout = styled.div`
  height: 200vh;
`;
