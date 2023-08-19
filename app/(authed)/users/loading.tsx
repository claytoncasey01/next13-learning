import LoadingCard from "@/components/LoadingCard";

export default function Loading() {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </>
  );
}
