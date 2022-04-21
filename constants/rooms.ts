export enum AboutObject {
  Content = 'CONTENT',
  Party = 'PARTY',
}

export enum MessageType {
  Optimistic,
  OptimisticWithAttachment,
  Text,
  Join = 'join',
}

export enum WSEvents {
  NewMessage = 'room.new-message',
  RoomMention = 'room.mention',
  RoomInvite = 'room.invite',
  RoomNewMemberJoin = 'room.new-member-join',
  RoomReaction = 'room.reaction',
  RoomMessageReply = 'room.message-reply',
  RoomReportMessage = 'room.report-message',
}
