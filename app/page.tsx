import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Link href="/single-request">Single Request Page</Link>
      <Link href="/multi-request">Multi Request Page</Link>
    </>
  );
}
