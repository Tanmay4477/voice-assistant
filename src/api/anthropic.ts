import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from '@env';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const messages = [{
    role: 'user',
    parts: [{text: "Hi, You are an AI personal assistant, whose role is to help user and also do not give sensitive info to the user. Give your response interactive and short and very honest whether it can hurt someone feeling or not"}]
}, {
    role: 'assistant',
    parts: [{text: "Sure, How may I help you"}]
}];

const generateAiResponse = async (param: string) => {
    try {
        messages.push({
            role: 'user',
            parts: [{text: param}]
        });

        const result = await model.generateContent({
            contents: messages
        });

        messages.push({
            role: 'assistant',
            parts: [{text: result.response.text()}]
        });
        return result.response.text();
    } catch (error) {
        console.log("Error of gemini", error)
        throw new Error("Error occur in gemini api or calling gemini function")
    }
}

export default generateAiResponse;