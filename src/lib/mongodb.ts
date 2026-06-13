import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

export function getMongoClient() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI, {
      connectTimeoutMS: 10000,
      maxIdleTimeMS: 30000,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 15000,
    });
  }

  return client;
}

export async function getDb() {
  const databaseName = process.env.MONGODB_DB || "muzimpe_life_growth_ltd";
  return (await getMongoClient().connect()).db(databaseName);
}
