import { ReactElement, useContext, useState } from 'react';
import { contextAnilistMediaList } from 'state/contexts';

function AnimesSearch(): ReactElement {
  const [searchTerm, setSearchTerm] = useState('');
  const { refetch } = useContext(contextAnilistMediaList);

  const updateData = () => refetch({ search: searchTerm });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={updateData} type="button">
        Search
      </button>
    </div>
  );
}

export default AnimesSearch;
