import Icon from './shared/icon';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-xl">
      <p>It&apos;s empty here.</p>
      <p>But here&apos;s a cute little bird instead!</p>
      <Icon
        href="icons/sprites/utils-sprite.svg#bird"
        width="40"
      />
    </div>
  );
}
