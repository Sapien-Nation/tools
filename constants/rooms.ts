export enum AboutObject {
  Content = 'CONTENT',
  Party = 'PARTY',
}

export enum MessageType {
  Optimistic,
  OptimisticWithAttachment,
  Text,
}

export enum WSEvents {
  NewMessage = 'room.new-message',
}
