const biodata = {
    name: "Foo",
    age: 91,
    hobbies: ["gaming"],
    isMarried: false,
    schoolList: [{
        name: "Elementary",
        yearIn: 2072,
        yearOut: 2083,
        major: null
    }, {
        name: "Middle school",
        yearIn: 2083,
        yearOut: 2086,
        major: null
    }, {
        name: "High school",
        yearIn: 2086,
        yearOut: 2089,
        major: "Software Engineer"
    }],
    skills: [{
        skillName: "Programming",
        level: "beginner"
    }],
    interestInCoding: true
}

console.log(biodata.schoolList[1].yearIn);