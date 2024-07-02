interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// api
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 8201011112222,
        },
        office: {
          num: 8201033334444,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 8201055556666,
        },
        office: {
          num: 8201077778888,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 82010777788888,
        },
        office: {
          num: 8201099990000,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }
  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }
  // phones:{
  //         home: {
  //           num: 8201011112222,
  //         },
  //         office: {
  //           num: 8201033334444,
  //         },
  //       },
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    // return this.contacts.filter(
    //   (contact) => contact.phones[phoneType].num === phoneNumber
    // );
    return this.contacts.filter((contact) => {
      // Check if phoneType exists in phones dictionary of contact
      if (phoneType in contact.phones) {
        return contact.phones[phoneType].num === phoneNumber;
      }
      return false;
    });
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByname(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListbyAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
}

let addressBook: AddressBook = new AddressBook();
// let byName: Contact[] = addressBook.findContactByName("마동석");
// Fetching contacts asynchronously, so we need to wait for them to be fetched
setTimeout(() => {
  let byName: Contact[] = addressBook.findContactByName("마동석");
  console.log(byName);
}, 2000);
