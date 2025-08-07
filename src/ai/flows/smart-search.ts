// A smart search tool provides type-ahead suggestions and filters by user type (student, teacher, parent).

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartSearchInputSchema = z.object({
  query: z.string().describe('The user search query.'),
});
export type SmartSearchInput = z.infer<typeof SmartSearchInputSchema>;

const SmartSearchOutputSchema = z.object({
  filteredResults: z.string().describe('The search results filtered by user type.'),
});
export type SmartSearchOutput = z.infer<typeof SmartSearchOutputSchema>;

export async function smartSearch(input: SmartSearchInput): Promise<SmartSearchOutput> {
  return smartSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartSearchPrompt',
  input: {schema: SmartSearchInputSchema},
  output: {schema: SmartSearchOutputSchema},
  prompt: `You are a search assistant for SaudiEdu, an educational platform.

  The user is searching for "{{query}}".

  Determine if the user is likely a student, teacher, or parent, based on their query.

  If the query indicates a specific user type (student, teacher, or parent), filter the search results to only show resources relevant to that user type.

  If the query does not indicate a specific user type, return general search results.

  Return the filtered search results.
  `,
});

const smartSearchFlow = ai.defineFlow(
  {
    name: 'smartSearchFlow',
    inputSchema: SmartSearchInputSchema,
    outputSchema: SmartSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
