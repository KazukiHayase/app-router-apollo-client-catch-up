import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Link href="/graphql">GraphQL Page</Link>
      <Link href="/graphql-single-request">GraphQL Single Request Page</Link>
      <Link href="/graphql-multi-request">GraphQL Multi Request Page</Link>
      <Link href="/graphql-cache-option">GraphQL Cache Options Page</Link>
      <Link href="/graphql-revalidate">GraphQL Revalidate Page</Link>
      <Link href="/graphql-client">GraphQL Client Page</Link>
      <Link href="/rest">REST Page</Link>
    </>
  );
}
