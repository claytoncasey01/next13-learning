import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProfileForm from "./ProfileForm";

export default async function UserEditProfile() {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  return (
    <>
      <h1> Edit Profile</h1>
      <ProfileForm user={user} />
    </>
  );
}
