import { ReactElement, useContext } from 'react';
import { contextAnilistMediaList } from 'state/contexts';
import AnimesSearch from './Search';

function Animes(): ReactElement {
  const { data } = useContext(contextAnilistMediaList);

  return (
    <div>
      <div>
        <AnimesSearch />
      </div>
      <ul>
        {data?.Page?.media?.map((item) => (
          <li key={item.id}>{item.title.romaji}</li>
        ))}
      </ul>
    </div>
  );
}

export default Animes;
