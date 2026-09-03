export type Message = {
  id: number
  sender: 'user' | 'bot'
  message: string
}

export type Conversation = {
  id: number
  title: string
  messages: Message[]
}