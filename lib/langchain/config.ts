import 'server-only';

import { isNonemptyString } from '@/utils/is-nonempty-string';

// Verify OpenAI API key is present in the environment
if (!isNonemptyString(process.env.OPENAI_API_KEY)) {
  throw new Error('OPENAI_API_KEY is not defined or empty in the environment');
}

export const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY as string;
export const OPENAI_LITE_MODEL: string = 'gpt-4o-mini';
export const OPENAI_REGULAR_MODEL: string = 'gpt-4o';

// Verify Anthropic API key is present in the environment
if (!isNonemptyString(process.env.ANTHROPIC_API_KEY)) {
  throw new Error(
    'ANTHROPIC_API_KEY is not defined or empty in the environment',
  );
}

export const ANTHROPIC_API_KEY: string = process.env
  .ANTHROPIC_API_KEY as string;
export const ANTHROPIC_LITE_MODEL: string = 'claude-3.5-haiku-latest';
export const ANTHROPIC_REGULAR_MODEL: string = 'claude-3.5-sonnet-latest';
