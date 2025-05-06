import gql from "graphql-tag";
import {getClient} from "@/app/ApolloClient";

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

  return <p>data received during Child render: {JSON.stringify(data)}</p>;
};
