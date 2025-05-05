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
  // Pageコンポーネントで実行したQueryのキャッシュがあるので、リクエストは実行されない
  const {data} = await getClient().query({query: userIdQuery});

  return (
    <div>
      <p>data received during Child render: {JSON.stringify(data)}</p>
    </div>
  );
};
