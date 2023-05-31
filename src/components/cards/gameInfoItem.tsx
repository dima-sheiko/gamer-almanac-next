import Image from 'next/image';

interface GameInfoItemProps {
  src: string;
  alt: string;
  title: string | number;
}

export default function GameInfoItem({
  src,
  alt,
  title,
}: GameInfoItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="rounded-t-md"
        src={src}
        alt={alt}
        width={16}
        height={16}
      />
      {title}
    </div>
  );
}
