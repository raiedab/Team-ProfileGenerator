const employee = require("./employee");

class intern extends employee {
    constructor(name,id, email, school) {
        super(name, id, email,);
        this.school = school;
        this.role = "intern";
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }

}

module.exports = Intern;