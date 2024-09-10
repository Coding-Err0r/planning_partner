import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri: any = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

export const POST = async (request: Request) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("planning_partner");
    const collection = db.collection("planning_partner_collection");

    const data = await request.json();
    const result = await collection.insertOne(data);

    await client.close();

    return NextResponse.json({
      message: "Data uploaded successfully",
      id: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload data" },
      { status: 500 }
    );
  }
};
