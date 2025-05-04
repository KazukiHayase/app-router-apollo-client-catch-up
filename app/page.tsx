import Link from "next/link";

export default async function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "100vh",
      }}
    >
      <Link href="/single-request">Single Request Page</Link>
      <Link href="/multi-request">Multi Request Page</Link>
    </div>
  );
}
