export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

export interface Friend {
  id: string;
  name: string;
  messages: Message[];
}
