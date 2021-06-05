import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  const clock = await fetch('http://worldclockapi.com/api/json/cet/now').then((res) => res.json());
  return {
    props: {
      clock,
    },
  };
};

// return useContext(AppContext);
export default function ServerSidePage({ clock }: { clock: any }): ReactElement {
  // const router = useRouter();
  return (
    <div>
      <h1>Server side Page (On every request)</h1>
      {Object.entries(clock).map(([key, value]) => (
        <li>
          <strong>{key}: </strong>
          <span>{value}</span>
        </li>
      ))}
    </div>
  );
}
