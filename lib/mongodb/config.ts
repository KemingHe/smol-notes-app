import 'server-only';

import type { MongoClientOptions } from 'mongodb';

// Verify MongoDB URI is present in the environment
if (!process.env.MONGODB_ATLAS_URI) {
  throw new Error('MONGODB_ATLAS_URI is not defined in the environment');
}

export const uri: string = process.env.MONGODB_ATLAS_URI;
export const options: MongoClientOptions = {};
