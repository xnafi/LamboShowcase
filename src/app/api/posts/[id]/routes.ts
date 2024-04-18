import { NextResponse } from "next/server";
import { lamborghiniCars } from "../../lamborghiniCars";

export async function GET(req: Request, context: any) {
  const { params } = context;
  return NextResponse.json({
    posts: lamborghiniCars.find((x: any) => x.id.toString() === params.id),
  });
}
