// A CRM holds 10 contacts, and 4 of them are marked as duplicates.
// Write a function that returns the percentage that's clean.

function crmHandler(contacts, duplicates) {
    let cleanContacts = contacts - duplicates;
    let percentage = (cleanContacts / contacts) * 100;
    return percentage;
}

console.log(crmHandler(10, 4));