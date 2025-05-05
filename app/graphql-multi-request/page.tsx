import gql from "graphql-tag";
import {getClient} from "@/app/ApolloClient";
import Link from "next/link";

const userIdQuery = gql`
  query {
    getUser(id: "1") {
      id
    }
  }
`;

export default async function Page() {
  const {data} = await getClient().query({query: userIdQuery});

  return (
    <>
      <p>data received during Page render: {JSON.stringify(data)}</p>
      <Child />
      <Link href="/">Home</Link>
    </>
  );
}

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

const Child = async function () {
  // Pageコンポーネントで実行したQueryのキャッシュではデータが足りないので、リクエストが実行される
  const {data} = await getClient().query({query: userQuery});

  return (
    <div>
      <p>data received during Child render: {JSON.stringify(data)}</p>
    </div>
  );
};
