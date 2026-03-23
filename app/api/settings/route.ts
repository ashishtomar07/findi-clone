import { NextResponse } from "next/server";
import settings from "@/data/settings.json";

export async function GET() {
  return NextResponse.json(settings);
}
