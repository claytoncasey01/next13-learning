import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="w-full max-w-sm pt-4 border rounded-lg shadow bg-gray-800 border-gray-700 mx-3">
      <div className="flex flex-col items-center pb-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          width={64}
          height={64}
          src={image ?? ""}
          alt={`${name}'s profile`}
        />
        <Link href={`/users/${id}`}>
          <h5 className="mb-1 text-xl font-medium text-white">{name}</h5>
        </Link>
        <span className="text-sm text-gray-400">{age ?? "Ageless"}</span>
      </div>
    </div>
  );
}
