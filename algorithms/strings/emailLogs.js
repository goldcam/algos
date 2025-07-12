function organizeInbox(inboxString) {
    // TODO: Your solution
    const emailData = inboxString.split('; ')
    const emails = {};
    const result = [];

    for (let item of emailData) {
        const itemArr = item.split(', ');
        const emailAddress = itemArr[0];

        if (emails[emailAddress]) {
            emails[emailAddress]++
        } else {
            emails[emailAddress] = 1;
        }
        
    }
    
    for(let address in emails ) {
        result.push(`${address} ${emails[address]}`)
    }

    return result.sort((a, b) => {
        const [emailA, countA] = a.split(' ');
        const [emailB, countB] = b.split(' ');
        if (Number(countB) !== Number(countA)) {
            return Number(countB) - Number(countA);
        }
        console.log({localeCompare: emailA.localeCompare(emailB), a, b})
        return emailA.localeCompare(emailB);
    });
        
}

// Usage example
const inboxString = "sender1@example.com, Subject1, 09:00; sender2@example.com, Subject2, 10:00; sender3@example.com, Subject3, 12:00; sender3@example.com, Subject1, 09:00; sender2@example.com, Subject2, 10:00; sender4@example.com, Subject2, 10:00; sender14@example.com, Subject2, 10:00;";



// Expected output: ["sender1@example.com 2", "sender2@example.com 1"]
console.log(organizeInbox(inboxString));