import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <>
      {users.map(({ id, name, age, image }) => (
        <UserCard id={id} name={name} age={age} image={image} key={id} />
      ))}
    </>
  );
}
