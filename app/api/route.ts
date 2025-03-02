import { NextResponse } from 'next/server';

import { client } from '@/lib/mongodb/client';

// Disabled caching for endpoint
export const dynamic = 'force-dynamic';

export const GET = async (req: Request): Promise<NextResponse> => {
  try {
    await client.connect();
    await client.db('default').command({ ping: 1 });
    return NextResponse.json({ message: 'Connected to MongoDB' });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
