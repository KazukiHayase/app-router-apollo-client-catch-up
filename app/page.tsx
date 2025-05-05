import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Link href="/graphql">Graphql Page</Link>
      <Link href="/graphql-single-request">Graphql Single Request Page</Link>
      <Link href="/graphql-multi-request">Graphql Multi Request Page</Link>
      <Link href="/graphql-cache-option">Graphql Cache Options Page</Link>
      <Link href="/graphql-revalidate">Graphql Revalidate Page</Link>
      <Link href="/rest">REST Page</Link>
    </>
  );
}
