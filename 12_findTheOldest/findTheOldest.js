const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
       const currentYear = (new Date).getFullYear()
       const oDeath = oldest.yearOfDeath || currentYear;
       const cDeath = current.yearOfDeath || currentYear;
       const oAge = oDeath - oldest.yearOfBirth;
       const cAge = cDeath - current.yearOfBirth;
       return oAge > cAge ? oldest : current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
