export type ChatResponse = {
  response: string
  timestamp: string
}

export async function sendMessage(
  message: string,
): Promise<ChatResponse> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  if (message.toLowerCase() === 'teste erro') {
    throw new Error('Falha simulada na comunicação com o chatbot.')
  }

  return {
    response: `Recebi sua mensagem: "${message}"`,
    timestamp: new Date().toISOString(),
  }
}