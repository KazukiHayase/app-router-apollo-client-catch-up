import {NextResponse} from "next/server";

export async function GET(_: Request) {
  console.log("GET /api/rest");
  return NextResponse.json({result: "ok"});
}
