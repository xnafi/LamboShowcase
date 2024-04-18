import { NextResponse } from "next/server";
import { lamborghiniCars } from "../lamborghiniCars";

export async function GET(req: Request, context: any) {
  return NextResponse.json({
    cars: lamborghiniCars, // Return all cars in the array
  });
}
