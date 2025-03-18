import Image from "next/image";

export const TechIcon = ({ name }: { name: string }) => {
    return (
      <Image
        src={`/techstackicons/${name}.png`}
        alt={name}
        width={40}
        height={40}
        className="opacity-75 group-hover:opacity-100 transition-opacity"
      />
    );
  };
  