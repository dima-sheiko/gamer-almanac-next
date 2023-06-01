export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-xl">
      <p>It&apos;s empty here.</p>
      <p>But here&apos;s a cute little bird instead!</p>
      <svg
        height="40"
        width="40"
      >
        <use xlinkHref="/utils-sprite.svg#bird" />
      </svg>
    </div>
  );
}
