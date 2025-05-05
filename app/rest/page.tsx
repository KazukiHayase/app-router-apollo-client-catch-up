import Link from "next/link";

const endpoint = "http://localhost:3000/api/rest";

export default async function Page() {
  const res = await fetch(endpoint);
  const data = await res.json();

  return (
    <>
      <p>data received during Page render: {JSON.stringify(data)}</p>
      <Child />
      <Link href="/">Home</Link>
    </>
  );
}

const Child = async function () {
  // Request Memoizationにより、リクエストは実行されない
  const res = await fetch(endpoint);
  const data = await res.json();

  return (
    <div>
      <p>data received during Child render: {JSON.stringify(data)}</p>
    </div>
  );
};
