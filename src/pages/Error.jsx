import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section>
      <h2>An error has occurred</h2>
      <p>There is an error</p>
    </section>
  );
}
