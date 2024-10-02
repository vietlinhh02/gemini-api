import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.GEMINI_API_KEY
const apiBaseUrl = (import.meta.env.API_BASE_URL || '')?.trim().replace(/\/$/, '')
export const modelapi = import.meta.env.MODEL_GEMINI || ' gemini-pro '

const genAI = apiBaseUrl
  ? new GoogleGenerativeAI(apiKey, apiBaseUrl)
  : new GoogleGenerativeAI(apiKey)

export const startChatAndSendMessageStream = async(
  history: ChatMessage[],
  newMessage: string,
) => {
  try {
    const model = !modelapi ? genAI.getGenerativeModel({ model: modelapi }) : genAI.getGenerativeModel({ model: 'gemini-pro' })
    const chat = await model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
              text: 'Nếu ai đó hỏi "Bạn là ai?", hãy trả lời: "Tôi là một API do Google tạo ra và được tối ưu bởi vietlinhh02.", Hãy trả lời bằng tiếng việt',
            },
          ],
        },
        ...history.map(msg => ({
          role: msg.role,
          parts: Array.isArray(msg.parts) // Check if msg.parts is an array
            ? msg.parts.map(part => ({ text: part.text }))
            : [{ text: '' }], // Provide a default if not an array
        })),
      ],
      generationConfig: {
        maxOutputTokens: 8000,
      },
      safetySettings: [
        // Consider adjusting safety thresholds as needed
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      ],
    })

    const result = await chat.sendMessageStream(newMessage)

    const encodedStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const chunk of result.stream) {
            const text = await chunk.text()
            const encoded = encoder.encode(text)
            controller.enqueue(encoded)
          }
        } finally {
          controller.close()
        }
      },
    })

    return encodedStream
  } catch (error) {
    console.error('Error in startChatAndSendMessageStream:', error)
    // Handle the error appropriately, e.g., return an error stream or message
    throw error
  }
}
