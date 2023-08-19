import FollowButton from "@/components/Button/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });

  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfilePage({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div>
      <h1 className="font-semibold text-lg">{name}</h1>
      <Image
        width={300}
        height={300}
        src={image ?? ""}
        className="rounded-md my-4"
        alt={`${name}'s profile`}
      />
      <h3 className="font-bold">Bio</h3>
      <p>{bio ?? "This user has no bio, very mysterious they are."}</p>
      <FollowButton targetUserId={user?.id ?? ""} />
    </div>
  );
}
