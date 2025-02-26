import type { MongoClient } from 'mongodb';

// This extends the global namespace in TypeScript
declare global {
  var _mongoClient: MongoClient | undefined;
}
