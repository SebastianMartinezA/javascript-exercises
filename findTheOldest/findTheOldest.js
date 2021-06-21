const findTheOldest = function(people) {
    oldest = people.sort(function(a, b){
        let year, year1;
        let currentTime = new Date();
        if(a.yearOfDeath)
            year = a.yearOfDeath;
        else
            year = currentTime.getFullYear();
        if(b.yearOfDeath)
            year1 = b.yearOfDeath;
        else
            year1 = currentTime.getFullYear();
        console.log(year,year1);
        if(a.yearOfBirth - year > b.yearOfBirth - year1)
            return 1;
        else
            return -1;
    });
    return oldest[0];
};

module.exports = findTheOldest;
