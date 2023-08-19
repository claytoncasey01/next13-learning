"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  if (isFollowing) {
    return (
      <button
        className="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mx-2"
        onClick={unfollow}
      >
        {!isMutating ? "Unfollow" : "..."}
      </button>
    );
  } else {
    return (
      <button
        className="text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mx-2"
        onClick={follow}
      >
        {!isMutating ? "Follow" : "..."}
      </button>
    );
  }
}
