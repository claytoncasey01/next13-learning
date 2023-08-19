"use client";

import { FormEvent } from "react";

interface Props {
  user: any;
}

export default function ProfileForm({ user }: Props) {
  const updateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <>
      <h2 className="text-xl font-bold">Edit Your Profile</h2>
      <form onSubmit={updateUser}>
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
