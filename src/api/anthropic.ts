import Anthropic from "@anthropic-ai/sdk";
import { API_URL } from '@env';

const anthropic = new Anthropic({
    apiKey: API_URL
});

export default async function generateAiResponse(result: string) {
    const response = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 400,
        temperature: 1,
        system: "You are a personal AI assistant.",
        messages: [
            {
                role: 'user',
                content: result
            }
        ]
      });
    console.log("this is ai response in anthropic file: ", response);
    return response;
}
