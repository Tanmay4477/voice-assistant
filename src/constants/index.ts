export enum Role {
    USER = 'user',
    ASSISTANT = 'assistant'
}

export type messageType = {
    role: Role,
    content: string
}

export const dummyMessages = [{
    role: Role.USER,
    content: 'Hi, How are you',
},
{
    role: Role.ASSISTANT,
    content: 'Hi, I am Jhaat Bot, How may I help you today',
}, 
{
    role: Role.USER,
    content: 'Generate an image of cute pokemon',
}, {
    role: Role.ASSISTANT,
    content: 'https://media.makeameme.org/created/250/huh-25d89e8c27.jpg'
}]