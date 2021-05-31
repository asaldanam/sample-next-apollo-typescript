import HeadTag from 'components/core/Head';
import Animes from 'components/views/Animes';
import { ReactElement } from 'react';
import { ProviderAnilistMediaList } from 'state/contexts';

// return useContext(AppContext);
export default function AnimesPage(): ReactElement {
  // const router = useRouter();
  return (
    <div>
      <HeadTag />
      <main>
        <ProviderAnilistMediaList variables={{ search: 'monster' }}>
          <Animes />
        </ProviderAnilistMediaList>
      </main>
    </div>
  );
}
