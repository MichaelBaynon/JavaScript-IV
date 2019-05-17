// CODE here for your Lambda Classes

// CODE here for your Lambda Classes


//class Person===================================================
class Person {
    constructor(baseClass) {
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}

//  CLASSES instuctor ==========================================

class Instructor extends Person {
    constructor(baseInst) {
        super(baseInst)

        this.specialty = baseInst.specialty;
        this.favLanguage = baseInst.favLanguage;
        this.catchPhrase = baseInst.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(subject) {
        return `${this.name} receives a perfect score on ${subject}`;
    }
}


//   Class student========================================================
class Student extends Person {
    constructor(baseStudent) {
        super(baseStudent)

        this.previousBackground = baseStudent.previousBackground;
        this.className = baseStudent.className;
        this.favSubjects = baseStudent.favSubjects;

    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

// Project Manager ==================================================

class ProjectManager extends Instructor {
    constructor(basePM) {
        super(basePM)

        this.gradClassName = basePM.gradClassName;
        this.favInstuctor = basePM.favInstuctor;
    }
    standUp(channel) {
        return `${name} announces to ${channel}, at channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


// CONSTS =========================================================




const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});


const bob = new Student({
    name: 'Bob',
    previousBackground: 'Elf',
    className: 'Larp20',
    favSubjects: 'Larping, Html, CSS',
    subject: 'redux'
});

const jack = new ProjectManager({
    location: 'england',
    name: 'Jack',
    gradClassName: 'Larp19',
    favInstuctor: 'Dan Shermnmnm',
})






// CONSOLE LOGS =================================================

console.log(fred.speak());
console.log(jack.speak());
console.log(bob.className);
console.log(bob.sprintChallenge);


console.log(fred.grade('reduxSprint'))
console.log(jack.debugsCode(bob, 'his html'))