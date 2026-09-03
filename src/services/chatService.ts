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

  return {
    response: `Recebi sua mensagem: "${message}"`,
    timestamp: new Date().toISOString(),
  }
}