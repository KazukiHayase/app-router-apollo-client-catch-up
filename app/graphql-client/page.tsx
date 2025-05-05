"use client";

import gql from "graphql-tag";
import {useSuspenseQuery} from "@apollo/client";
import {Suspense} from "react";

const userQuery = gql`
  query {
    getUser(id: "1") {
      id
      name
    }
  }
`;

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Content />
    </Suspense>
  );
}

const Content = () => {
  const {data} = useSuspenseQuery(userQuery);

  return <p>data received during Page render: {JSON.stringify(data)}</p>;
};
