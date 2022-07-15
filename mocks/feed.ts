// constants
import { MessageType } from '../constants/rooms';

// types
import { RoomMessage } from 'tools/types/room';

const emojis = ['😀', '💯', '👍', '🥶', '🔥', '🦍', '🙈', '🙉', '🙊', '💫'];

export const mockFeed = (): { data: Array<RoomMessage>; nextCursor: any } => {
  return {
    data: [
      {
        id: '68af0602-9e17-47e5-9f66-62ed8a050721',
        content: 'Never gonna give you up',
        createdAt: '2022-07-15T20:30:04.532Z',
        type: MessageType.Text,
        status: 'A',
        sender: {
          avatar: null,
          badges: [],
          id: '74f5ed20-4ba9-45b5-9f14-0f0e0a025d4e',
          username: 'carlosv',
        },
        mentions: [],
        reactions: [],
      },
      {
        id: '68af0602-9e17-47e5-9f66-62ed8a050721',
        content: 'Never gonna let you down',
        createdAt: '2022-07-15T20:31:04.532Z',
        type: MessageType.Text,
        status: 'A',
        sender: {
          avatar: null,
          badges: [],
          id: '74f5ed20-4ba9-45b5-9f14-0f0e0a025d4e',
          username: 'carlosv',
        },
        mentions: [],
        reactions: [
          {
            count: Math.floor(Math.random() * 10) + 1,
            emoji: {
              id: null,
              name: emojis[Math.floor(Math.random() * emojis.length)],
            },
            me: [true, false][Math.floor(Math.random() * 2)],
          },
        ],
      },
      {
        id: '68af0602-9e17-47e5-9f66-62ed8a050721',
        content: 'Never gonna run around and desert you',
        createdAt: '2022-07-15T20:32:04.532Z',
        type: MessageType.Text,
        status: 'A',
        sender: {
          avatar: null,
          badges: [],
          id: '74f5ed20-4ba9-45b5-9f14-0f0e0a025d4e',
          username: 'carlosv',
        },
        mentions: [],
        reactions: [
          {
            count: Math.floor(Math.random() * 10) + 1,
            emoji: {
              id: null,
              name: emojis[Math.floor(Math.random() * emojis.length)],
            },
            me: [true, false][Math.floor(Math.random() * 2)],
          },
        ],
      },
      {
        id: '68af0602-9e17-47e5-9f66-62ed8a050721',
        content: 'Never gonna make you cry',
        createdAt: '2022-07-15T20:33:04.532Z',
        type: MessageType.Text,
        status: 'A',
        sender: {
          avatar: null,
          badges: [],
          id: '74f5ed20-4ba9-45b5-9f14-0f0e0a025d4e',
          username: 'carlosv',
        },
        mentions: [],
        reactions: [
          {
            count: Math.floor(Math.random() * 10) + 1,
            emoji: {
              id: null,
              name: emojis[Math.floor(Math.random() * emojis.length)],
            },
            me: [true, false][Math.floor(Math.random() * 2)],
          },
        ],
      },
      {
        id: '68af0602-9e17-47e5-9f66-62ed8a050721',
        content: 'Never gonna say goodbye',
        createdAt: '2022-07-15T20:34:04.532Z',
        type: MessageType.Text,
        status: 'A',
        sender: {
          avatar: null,
          badges: [],
          id: '74f5ed20-4ba9-45b5-9f14-0f0e0a025d4e',
          username: 'carlosv',
        },
        mentions: [],
        reactions: [
          {
            count: Math.floor(Math.random() * 10) + 1,
            emoji: {
              id: null,
              name: emojis[Math.floor(Math.random() * emojis.length)],
            },
            me: [true, false][Math.floor(Math.random() * 2)],
          },
        ],
      },
      {
        id: '68af0602-9e17-47e5-9f66-62ed8a050721',
        content: 'Never gonna tell a lie and hurt you',
        createdAt: '2022-07-15T20:35:04.532Z',
        type: MessageType.Text,
        status: 'A',
        sender: {
          avatar: null,
          badges: [],
          id: '74f5ed20-4ba9-45b5-9f14-0f0e0a025d4e',
          username: 'carlosv',
        },
        mentions: [],
        reactions: [
          {
            count: Math.floor(Math.random() * 10) + 1,
            emoji: {
              id: null,
              name: emojis[Math.floor(Math.random() * emojis.length)],
            },
            me: [true, false][Math.floor(Math.random() * 2)],
          },
        ],
      },
    ],
    nextCursor: null,
  };
};
