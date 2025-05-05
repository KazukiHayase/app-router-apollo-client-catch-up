import gql from "graphql-tag";
import {getClient} from "@/app/ApolloClient";
import Link from "next/link";

export const revalidate = 10;

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

export default async function Page() {
  const {data} = await getClient().query({query: userQuery});

  return (
    <>
      <p>data received during Page render: {JSON.stringify(data)}</p>
      <Link href="/">Home</Link>
    </>
  );
}
