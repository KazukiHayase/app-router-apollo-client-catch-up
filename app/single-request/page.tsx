import gql from "graphql-tag";
import {getClient} from "@/app/ApolloClient";
import Link from "next/link";

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

// cacheオプションも機能する
export default async function Page() {
  const {data} = await getClient().query({
    query: userQuery,
    context: {fetchOptions: {cache: "force-cache"}},
  });

  return (
    <>
      <p>data received during Home render: {JSON.stringify(data)}</p>
      <Child />
      <Link href="/">Home</Link>
    </>
  );
}

const userIdQuery = gql`
  query {
    getUser(id: "1") {
      id
    }
  }
`;

const Child = async function () {
  const {data} = await getClient().query({
    query: userIdQuery,
    context: {fetchOptions: {cache: "force-cache"}},
  });

  return (
    <div>
      <p>data received during Child render: {JSON.stringify(data)}</p>
    </div>
  );
};
