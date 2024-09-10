"use server";

import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const data = await request.json();
  return NextResponse.json(data);
};

export const GET = async () => {
  const data = await fetch("https://api.example.com/clients");
  const clientData = await data.json();
};
