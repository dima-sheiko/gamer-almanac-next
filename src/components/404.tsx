import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-xl">
      <p>It&apos;s empty here.</p>
      <p>But here&apos;s a cute little bird instead!</p>
      <Image
        src="/bird.svg"
        alt="no data"
        width={40}
        height={40}
      />
    </div>
  );
}
