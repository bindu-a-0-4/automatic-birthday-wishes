export interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  birthday: string; // ISO format: YYYY-MM-DD
  notes?: string;
  group?: string;
}

export interface MessageTemplate {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  lastUsed?: string;
}

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john@example.com',
    birthday: '1990-06-15',
    notes: 'Best friend since college',
    group: 'Friends'
  },
  {
    id: '2',
    name: 'Jane Smith',
    phone: '+1987654321',
    email: 'jane@example.com',
    birthday: '1985-07-22',
    group: 'Family'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    phone: '+1122334455',
    birthday: '1978-11-05',
    notes: 'Work colleague',
    group: 'Work'
  },
  {
    id: '4',
    name: 'Emily Davis',
    phone: '+1555666777',
    email: 'emily@example.com',
    birthday: '1992-03-18',
    group: 'Friends'
  },
  {
    id: '5',
    name: 'Michael Brown',
    phone: '+1777888999',
    birthday: '1982-09-30',
    notes: 'College roommate',
    group: 'Friends'
  },
  {
    id: '6',
    name: 'Sarah Wilson',
    phone: '+1444555666',
    email: 'sarah@example.com',
    birthday: '1995-01-12',
    group: 'Family'
  },
  {
    id: '7',
    name: 'David Miller',
    phone: '+1222333444',
    birthday: '1975-08-25',
    notes: 'High school friend',
    group: 'Friends'
  },
  {
    id: '8',
    name: 'Lisa Taylor',
    phone: '+1999000111',
    email: 'lisa@example.com',
    birthday: '1988-12-03',
    group: 'Work'
  },
  {
    id: '9',
    name: 'James Anderson',
    phone: '+1666777888',
    birthday: '1980-04-20',
    notes: 'Cousin',
    group: 'Family'
  },
  {
    id: '10',
    name: 'Jessica White',
    phone: '+1333444555',
    email: 'jessica@example.com',
    birthday: '1993-05-17',
    group: 'Friends'
  }
];

export const mockTemplates: MessageTemplate[] = [
  {
    id: '1',
    name: 'Birthday Wish - Casual',
    content: 'Hey {{name}}! 🎉 Happy Birthday! 🎂 Wishing you a fantastic day filled with joy and laughter. Have an amazing celebration! 🎁',
    createdAt: '2023-01-15T10:30:00Z',
    lastUsed: '2023-06-10T14:20:00Z'
  },
  {
    id: '2',
    name: 'Birthday Wish - Formal',
    content: 'Dear {{name}}, Wishing you a very Happy Birthday and a wonderful year ahead. May all your dreams and wishes come true. Best regards.',
    createdAt: '2023-02-22T09:15:00Z',
    lastUsed: '2023-05-25T11:45:00Z'
  },
  {
    id: '3',
    name: 'Birthday Wish - Funny',
    content: 'HBD {{name}}! 🎂 They say age is just a number, but in your case, it\'s a really BIG number! 😂 Just kidding! Have an awesome birthday!',
    createdAt: '2023-03-10T16:20:00Z'
  },
  {
    id: '4',
    name: 'Birthday Wish - Family',
    content: 'Happy Birthday to the best {{relation}} ever! 🎉 {{name}}, you mean the world to me and I\'m so grateful to have you in my life. Love you lots! ❤️',
    createdAt: '2023-04-05T13:10:00Z',
    lastUsed: '2023-06-01T10:30:00Z'
  },
  {
    id: '5',
    name: 'Birthday Wish - Inspirational',
    content: 'Happy Birthday, {{name}}! 🌟 May this new year of your life bring you new opportunities, success, and happiness. Believe in yourself and aim for the stars!',
    createdAt: '2023-05-17T08:45:00Z'
  }
];