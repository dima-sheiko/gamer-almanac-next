import Search from '../components/search';

export default function Home() {
  return (
    <main className="mt-10 flex flex-col items-center justify-start gap-10">
      <div className="w-full max-w-[400px]">
        <Search />
      </div>
    </main>
  );
}
