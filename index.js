// Your code here



function createEmployeeRecord (employeeData) {

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
    return dataEmployees.map((employee) => createEmployeeRecord (employee))
}


function createTimeInEvent(employeeObject, timeIn) {
    employeeObject.timeInEvents.push(createTimeInObject(timeIn))
    return employeeObject
}


function createTimeInObject(timeIn) {
    let timeInConversion = timeIn.split(" ")
    let date = timeInConversion[0]
    let hour = timeInConversion[1]

   let newTimeObject = {}
    newTimeObject.type = "TimeIn"
    newTimeObject.date = date 
    newTimeObject.hour = parseInt(hour)

    return newTimeObject
}

function createTimeOutEvent(employeeObject, timeOut) {
    employeeObject.timeOutEvents.push(createTimeOutObject(timeOut))
    return employeeObject
}

function createTimeOutObject(timeOut) {
    let timeInConversion = timeOut.split(" ")
    let date = timeInConversion[0]
    let hour = timeInConversion[1]

   let newTimeObject = {}
    newTimeObject.type = "TimeOut"
    newTimeObject.date = date 
    newTimeObject.hour = parseInt(hour)

    return newTimeObject
}



    let hoursWorkedOnDate = function(employee, soughtDate){
        let inEvent = employee.timeInEvents.find(function(e){
            return e.date === soughtDate
        })
    
        let outEvent = employee.timeOutEvents.find(function(e){
            return e.date === soughtDate
        })
    
        return (outEvent.hour - inEvent.hour) / 100
    }
    
    let wagesEarnedOnDate = function(employee, dateSought){
        let rawWage = hoursWorkedOnDate(employee, dateSought)
            * employee.payPerHour
        return parseFloat(rawWage.toString())
    }



 function allWagesFor(employee){
     let  availableDates = employee.timeInEvents.map((time) => time.date);
     const sum = availableDates.reduce((prevDate, currentDate) => wagesEarnedOnDate(employee,prevDate) + wagesEarnedOnDate(employee,currentDate));
    return sum
}


function findEmployeeByFirstName(employeeRecords, firstName) {

    let employeefirstName = employeeRecords.find(function(e) {
        return e.firstName === firstName
    })
    debugger
    return employeefirstName
}


function calculatePayroll(arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function(memo, record){
    
        console.log(memo + allWagesFor(record))
        return memo + allWagesFor(record)
        
    }, 0)
}