import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const clock = await fetch('http://worldclockapi.com/api/json/cet/now').then((res) => res.json());
  return {
    props: {
      clock,
    },
  };
};

// return useContext(AppContext);
export default function StaticPage({ clock }: { clock: any }): ReactElement {
  // const router = useRouter();
  return (
    <div>
      <h1>Static page (build time)</h1>
      {Object.entries(clock).map(([key, value]) => (
        <li>
          <strong>{key}: </strong>
          <span>{value}</span>
        </li>
      ))}
    </div>
  );
}
