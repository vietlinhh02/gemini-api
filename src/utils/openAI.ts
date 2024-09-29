import { GoogleGenerativeAI } from '@fuyun/generative-ai'

const apiKey = (import.meta.env.GEMINI_API_KEY)
const apiBaseUrl = (import.meta.env.API_BASE_URL)?.trim().replace(/\/$/, '')

const genAI = new GoogleGenerativeAI(apiKey, apiBaseUrl)

export const startChatAndSendMessageStream = async(history: ChatMessage[], newMessage: string) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const chat = model.startChat({
    history: [
      // Add a system message to guide the API's response to "Bạn là ai?"
      {
        role: 'user',
        parts: [{ text: 'Nếu ai đó hỏi "Bạn là ai?", hãy trả lời: "Tôi là một API do Google tạo ra và được tối ưu bởi vietlinhh02." ' }],
      },
      // Map existing chat history if available
      ...history.map(msg => ({
        role: msg.role,
        parts: msg.parts.map(part => ({ text: part.text })), // Ensure parts is an array of objects with text property
      })),
    ],
    generationConfig: {
      maxOutputTokens: 8000,
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
    ],
  })

  // Use sendMessageStream for streaming responses
  const result = await chat.sendMessageStream(newMessage)

  const encodedStream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      for await (const chunk of result.stream) {
        const text = await chunk.text()
        const encoded = encoder.encode(text)
        controller.enqueue(encoded)
      }
      controller.close()
    },
  })

  return encodedStream
}
