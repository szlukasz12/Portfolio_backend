import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "./dtos/createContact.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ContactBook } from "./entities/contactBook.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContactBookService {
    constructor(@InjectRepository(ContactBook) private contactBookRepository : Repository<ContactBook>) {}

    getContacts() {
        return this.contactBookRepository.find();
    }

    getById(id: string) {
        return this.contactBookRepository.findOneBy({ id: parseInt(id) });
    }

    addContact(contact: CreateContactDto) {
        return this.contactBookRepository.insert({
            Name: contact.Name,
            Tel: contact.Tel,
            City: contact.City
        });
    }

    editContact(id: string, contact: CreateContactDto) {
        return this.contactBookRepository.update(parseInt(id), { ...contact})
    }
}