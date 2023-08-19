import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

interface Props {
  user: any;
}

export default function ProfileForm({ user }: Props) {
  // This can be extracted to its own file to be used in a client component
  async function updateUser(formData: FormData) {
    "use server";

    const data = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: Number(formData.get("age")),
      image: formData.get("image"),
    } as any;

    await prisma.user.update({
      where: {
        email: user?.email ?? "",
      },
      data,
    });

    redirect(`/users/${user.id}`);
  }

  return (
    <>
      <h2 className="text-xl font-bold">Edit Your Profile</h2>
      <form action={updateUser}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            defaultValue={user?.name ?? ""}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block mb-2 text-sm font-medium text-white"
          >
            Bio
          </label>
          <textarea
            name="bio"
            cols={30}
            className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            defaultValue={user?.bio ?? ""}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-white"
          >
            Age
          </label>
          <input
            type="text"
            name="age"
            className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            defaultValue={user?.age ?? 0}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-white"
          >
            Profile Picture Url
          </label>
          <input
            type="text"
            name="image"
            className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            defaultValue={user?.image ?? ""}
          />
        </div>
        <button
          type="submit"
          className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </>
  );
}
