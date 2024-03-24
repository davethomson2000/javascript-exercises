function compareAge(personA, personB) {
    return (calculateAge(personA) - calculateAge(personB))
}

function calculateAge(person) {
    let age
    if (person.hasOwnProperty('yearOfDeath')) {
        age = person.yearOfDeath - person.yearOfBirth    
    }
    else {
        let thisYear = new Date().getFullYear()
        age = thisYear - person.yearOfBirth
    }

    return age
}

const findTheOldest = function(people) {
    people.sort(compareAge)
    people.reverse()
    return people[0]
};


// Do not edit below this line
module.exports = findTheOldest;
