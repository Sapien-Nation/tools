export enum AboutObject {
  Content = 'CONTENT',
  Party = 'PARTY',
}

export enum MessageType {
  Optimistic,
  OptimisticWithAttachment,
  OptimisticWithError,
  Text = 'C',
  Join = 'J',
}

export enum WSEvents {
  NewMessage = 'room.new-message',
  DeleteMessage = 'room.message-deleted',
  RoomMention = 'room.mention',
  RoomInvite = 'room.invite',
  RoomNewMemberJoin = 'room.new-member-join',
  RoomReaction = 'room.reaction',
  RoomMessageReply = 'room.message-reply',
  RoomReportMessage = 'room.report-message',
}

export enum RoomMemberType {
  Admin = 'A',
  Participant = 'P',
  Viewer = 'V',
}

export enum RoomType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}
