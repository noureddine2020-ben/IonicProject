import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactList: Contact[] = [
    {
      name: 'noureddine',
      lastname: 'ben mahmoud',
      phone: 22462547,
      phone2: 21525466,
      img: 'https://t4.ftcdn.net/jpg/01/88/36/45/360_F_188364539_a9ymnQnUOIvio7pisoYdaX9yQTdZBuCb.jpg',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

    {
      name: 'mariem',
      lastname: 'hzami',
      phone: 55252536,
      phone2: 25236984,
      img: 'https://previews.123rf.com/images/bignoze/bignoze1703/bignoze170300014/74493194-illustration-de-l-ic%C3%B4ne-des-femmes-%C3%A0-long-style-de-cheveux-les-femmes-sont-confront%C3%A9es-logo-sur-fond.jpg',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

    {
      name: 'bassem',
      lastname: 'labidi',
      phone: 22526877,
      phone2: 25236984,
      img: 'https://t4.ftcdn.net/jpg/03/28/11/35/360_F_328113542_31B2IVU37qZ09cXXA6iMSXs62Optrwok.jpg',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

    {
      name: 'ahmed',
      lastname: 'fathi',
      phone: 32336666,
      phone2: 25236984,
      img: 'https://m.media-amazon.com/images/I/31bEY8VT3YL.jpg',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

  ];

  constructor() { }

  getAllContact() {
    return [...this.contactList];
  }

}
