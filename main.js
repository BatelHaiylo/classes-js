// class Student {
//     name;
//     grade;
//     id;

//     constructor(name,grade,id){
//         this.name = name
//         this.grade = grade
//         this.id = id
//     }

// }

// const aby = new Student("Abby",8,"#4456385668")
// const dali = new Student("Dalia",10,"#5541288395")
// console.log(aby , dali)

// class User{
//     fName;
//     lName;
//     age;
//     email;

//     constructor(fName,lName,age,email){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//         this.email = email;
//     }

// }

// // const user1 = new Student("Abby","Lee",20,"abby@bang.com")
// // const user2 = new Student("Dalia","Zege",23,"dali@bang.com")
// // const user3 = new Student("Flore","Narcos",27,"flore@bang.com")

// // let h3print = document.createElement("h3")
// // document.body.append(h3print)

// // function printObjDataToWindow(obj){
// //     for(key in obj){
// //         h3print.innerText += `${key} : ${obj[key]} \b`
// //     }
// // }
// // printObjDataToWindow(user1)
// // printObjDataToWindow(user2)
// // printObjDataToWindow(user3)



// function createInputElement(){

// const dataArray = []

//     let userDataInput = document.createElement("input")
//     document.body.append(userDataInput)

//     let inputBtn = document.createElement("button")
//     inputBtn.innerText = "SAVE"
//     document.body.append(inputBtn)
//     inputBtn.addEventListener("click", ()=>{
//         dataArray.push(userDataInput.value)
//         userDataInput.value = ""

//         createUserDataBaseObject()
//     })

//     if(dataArray.length == 4){
//         inputBtn.disabled = true
//     }

// }

// function createUserDataBaseObject(){
//     const user2_0 = new User()
//     let i = 0

//         for(key in user2_0){
//             user2_0[key] = dataArray[i++]
//         }
//     console.log(user2_0)
//     console.log(dataArray)
//     printObjInTable()

// }

// 6.

// function printObjInTable(){

    // let userDataTable = document.createElement("table")
    // document.body.append(userDataTable)


//     for(key in user2_0){
//         userDataTable.InnerHTML += "<thead><th>"+ key +"</th></thead>"
//     }
//     userDataTable.InnerHTML += "\n" + "<tbody><tr><td>"+ user2_0[key] +"</td></tr></tbody>"   

// }

class Dog {
    constructor(dogName, dogType, dogDateOfBirth){
        this.dogName = dogName;
        this.dogType = dogType;
        this.dogDateOfBirth = dogDateOfBirth;
    }
}
 
function createObjArr(n, objClass){
    const objArray = []

    while(objArray.length<n){
        objArray.push(new objClass)
    }
    console.log(objArray)
}
createObjArr(5, Dog)

class Teacher {
    constructor(firstName,lastName,classRoom,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.classRoom = classRoom;
        this.mail = mail;
    }
}

// createObjArr(4, Teacher)

function createInputElement(){
const dataArray = []

    let userDataInput = document.createElement("input")
    document.body.append(userDataInput)

    let inputBtn = document.createElement("button")
    inputBtn.innerText = "SAVE"
    document.body.append(inputBtn)
    inputBtn.addEventListener("click", ()=>{
        dataArray.push(userDataInput.value)
        userDataInput.value = ""

        createUserDataBaseObject(teacherObj)
    })

    if(dataArray.length == 4){
        inputBtn.disabled = true
    }
}

const teacherObj = new Teacher()
function createUserDataBaseObject(objName){
    const teacherObjArray = []

    if(teacherObjArray.length<4){
        objArray.push(teacherObj)
    }
    console.log(objName)
    console.log(dataArray)
}

function printObjInTable(){

}

function printObjInTable(objName){

    let userDataTable = document.createElement("table")
    document.body.append(userDataTable)
    userDataTable.style = "font-family: Arial, Helvetica, sans-serif; border-collapse: collapse; width: 100%;"

    userDataTable.InnerHTML = "<thead>"
    for(key in objName){
        userDataTable.InnerHTML += "<th>"+ key +"</th>"
    }
    userDataTable.InnerHTML = "</thead>" + "\n"

    userDataTable.InnerHTML = "<tbody><tr>"
    for(key in objName){
        userDataTable.InnerHTML +="<td>"+ objName[key] +"</td>"   
    }
    userDataTable.InnerHTML = "</tr></tbody>"
}
printObjInTable(teacherObj)

11.
class Course {
    constructor(courseName,isThereALecturer,gradeArray,studentArray){
        this.courseName = courseName ;
        this.isThereALecturer = isThereALecturer ;
        this.gradesArray = gradeArray ;
        this.studentArray = studentArray ;
    }
}

const courseObj = new Course()
for(key in courseObj){
    document.body.innerText += `${key} : value \n`
}
