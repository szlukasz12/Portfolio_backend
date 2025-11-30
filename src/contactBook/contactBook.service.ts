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

    async addContact(contact: CreateContactDto) {
        const result = await this.contactBookRepository.insert({
            Name: contact.Name,
            Tel: contact.Tel,
            City: contact.City
        });
        return result.raw.insertId;
    }

    editContact(id: string, contact: CreateContactDto) {
        return this.contactBookRepository.update({ id: parseInt(id) }, { ...contact})
    }

    deleteContact(id: string) {
        return this.contactBookRepository.delete({ id: parseInt(id) });
    }
}