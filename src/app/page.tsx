import CardContainer from '../components/cards/cardContainer';
import Settings from '../components/settings';

export default function Home() {
  return (
    <main className="mt-10 flex flex-col items-center justify-start gap-20">
      <Settings />
      <CardContainer />
    </main>
  );
}
