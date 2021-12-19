import { useLocation } from 'react-router';

export default function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');
  console.log(keyword);
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
