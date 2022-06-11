const findTheOldest = people => people.reduce((oldest, current) => {
       const oAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
       const cAge = getAge(current.yearOfBirth, current.yearOfDeath)
       return oAge > cAge ? oldest : current;
    });

const getAge = (birth, death) => {
    death = death || new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
