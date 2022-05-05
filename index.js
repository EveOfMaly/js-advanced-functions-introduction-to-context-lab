// Your code here

testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])

function createEmployeeRecord (employeeData) {

    let employeeObject = initializeEmployee(employeeData) 
    



    return employeeObject
    
}

let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]

  let employeeRecords = createEmployeeRecords(dataEmployees)



function initializeEmployee(employeeData) {
    let employeeObject = {}
        employeeObject.firstName = employeeData[0]
        employeeObject.familyName = employeeData[1]
        employeeObject.title = employeeData[2]
        employeeObject.payPerHour = employeeData[3]
        employeeObject.timeInEvents = []
        employeeObject.timeOutEvents = []
    return employeeObject
}

function createEmployeeRecords (dataEmployees){
    // let employeeRecords = {}
    
   let employeeRecords = dataEmployees.forEach((employee) => {
        return  Object.assign({}, employee)
    })

    debugger

    return employeeRecords
}
