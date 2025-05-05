import gql from "graphql-tag";
import {getClient} from "@/app/ApolloClient";

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

export default async function Page() {
  const {data} = await getClient().query({
    query: userQuery,
    context: {
      fetchOptions: {
        next: {revalidate: 10},
      },
    },
  });

  return <p>data received during Page render: {JSON.stringify(data)}</p>;
}
