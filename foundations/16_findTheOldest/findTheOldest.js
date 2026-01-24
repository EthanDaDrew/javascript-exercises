const findTheOldest = function(people) {
    let maxIndex = 0;
    let maxAge = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            const currentDate = new Date();
            people[i].yearOfDeath = currentDate.getFullYear();
        }
        let age = people[i].yearOfDeath - people[i].yearOfBirth
        if (age > maxAge) {
            maxIndex = i
            maxAge = age
        }
    }
    return people[maxIndex];
};


module.exports = findTheOldest;
