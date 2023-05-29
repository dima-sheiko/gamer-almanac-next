import CardContainer from '../components/cards/cardContainer';
import Settings from '../components/settings';

export default async function Home() {
  return (
    <main className="mt-10 flex flex-col items-center justify-start gap-10">
      <Settings />
      <CardContainer />
    </main>
  );
}
