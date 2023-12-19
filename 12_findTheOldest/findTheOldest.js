const findTheOldest = function(people) {
    return people.reduce( (prev, cur) =>{
        if (!("yearOfDeath" in cur)) cur["yearOfDeath"] = new Date().getFullYear();
        if (!("yearOfDeath" in prev)) prev["yearOfDeath"] = new Date().getFullYear();
        return prev.yearOfDeath - prev.yearOfBirth > cur.yearOfDeath - cur.yearOfBirth ? prev : cur;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
