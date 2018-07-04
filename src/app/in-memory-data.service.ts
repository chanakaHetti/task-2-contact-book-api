import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const users = [
            {
                id: 1,
                email: 'mail@gmail.com',
                password: 123456789
            }
        ]
        const contacts = [
            {
                id: 1,
                name: 'Jhone Doe',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 3,
                name: 'Christ Ronald',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 4,
                name: 'Ruzzel Chapling',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 5,
                name: 'Peter Petty',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 6,
                name: 'Diana Ann',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 7,
                name: 'Jhone Doe',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 8,
                name: 'Jane Doe',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 9,
                name: 'Christ Ronald',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 10,
                name: 'Ruzzel Chapling',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 11,
                name: 'Peter Petty',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 12,
                name: 'Diana Ann',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 13,
                name: 'Jhone Doe',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 14,
                name: 'Jane Doe',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 15,
                name: 'Christ Ronald',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 16,
                name: 'Ruzzel Chapling',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 17,
                name: 'Peter Petty',
                email: 'mail@gmail.com',
                number: 2012345678
            },
            {
                id: 18,
                name: 'Diana Ann',
                email: 'mail@gmail.com',
                number: 2012345678
            }
        ];
        return {users, contacts};
    }
}