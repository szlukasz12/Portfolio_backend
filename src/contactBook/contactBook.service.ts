import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "./dtos/createContact.dto";

const database = [
            { id: 1, name: "John Doe", phone: "123-456-7890" },
            { id: 2, name: "Jane Smith", phone: "987-654-3210" },
        ];

@Injectable()
export class ContactBookService {
    getContacts() {
        return database;
    }

    getById(id: string) {
        return database.find(contact => contact.id === parseInt(id));
    }

    addContact(contact: CreateContactDto) {
        const newId = database.length + 1;
        database.push({ id: newId, ...contact });

        return { message: "Contact added successfully", id: newId};
    }
}