import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("No API key found in .env");
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    try {
        // The SDK doesn't have a direct listModels method on the main class in all versions,
        // but we can try to instantiate a model and see if it works, OR use the raw API.
        // Actually, for the Node SDK, we might need to use the model manager if available, 
        // but simpler is to just try a standard 'gemini-pro' which is usually the fallback.
        // However, to be precise, let's try to fetch the model list via REST if the SDK is ambiguous.

        console.log("Testing API Key with model: gemini-pro");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hello");
        console.log("Success with gemini-pro:", result.response.text());

    } catch (error: any) {
        console.error("Error with gemini-pro:", error.message);
    }

    try {
        console.log("Testing API Key with model: gemini-1.5-flash");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello");
        console.log("Success with gemini-1.5-flash:", result.response.text());
    } catch (error: any) {
        console.error("Error with gemini-1.5-flash:", error.message);
    }
}

listModels();
