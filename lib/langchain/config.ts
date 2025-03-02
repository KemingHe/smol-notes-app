import 'server-only';

import { env } from '@keminghe/tsutils';

export const OPENAI_API_KEY: string = env('OPENAI_API_KEY');
export const OPENAI_LITE_MODEL: string = 'gpt-4o-mini';
export const OPENAI_REGULAR_MODEL: string = 'gpt-4o';

export const ANTHROPIC_API_KEY: string = env('ANTHROPIC_API_KEY');
export const ANTHROPIC_LITE_MODEL: string = 'claude-3.5-haiku-latest';
export const ANTHROPIC_REGULAR_MODEL: string = 'claude-3.5-sonnet-latest';
