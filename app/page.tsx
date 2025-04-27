import gql from "graphql-tag";
import {getClient} from "./ApolloClient";

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

const userIdQuery = gql`
  query {
    getUser(id: "1") {
      id
    }
  }
`;

export default async function Home() {
  const {data} = await getClient().query({query: userQuery});
  /* const {data} = await getClient().query({query: userIdQuery}); */

  return (
    <div>
      <p>data received during Home render: {JSON.stringify(data)}</p>
      <Child />
    </div>
  );
}

const Child = async function () {
  /* const {data} = await getClient().query({query: userQuery}); */
  const {data} = await getClient().query({query: userIdQuery});

  return (
    <div>
      <p>data received during Child render: {JSON.stringify(data)}</p>
    </div>
  );
};
