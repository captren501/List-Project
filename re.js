class list {
    constructor(firstName, lastName, id) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
    }
  }
  
  
  let arr = []
  let count = 1;
  function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if (firstName != "" && lastName != "") {
      let temp = new list(firstName, lastName, count);
      count++;
      arr.push(temp);
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
    }
  }
  
  
  
  
  function print() {
    let space = "";
    for (let i = 0; i < arr.length; i++) {
      space += `<div><span> ${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}</div>`
    }
    document.getElementById("printSpace").innerHTML = space;
  }
  
function clearFields(){
    document.getElementById('head').checked = false
    document.getElementById('second').checked = false
    document.getElementById('extra').checked = false
    document.getElementById('window').checked = false
    document.getElementById('vegetarian').checked = false
    document.getElementById('chicken').checked = false
    document.getElementById('fish').checked = false
    document.getElementById('bags?').value = ''
    document.getElementById('return').value = ''
    document.getElementById('leaving').value = ''
    document.getElementById('arriving').value = ''
    document.getElementById('departing').value = ''
    document.getElementById('dateofbirth').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('firstName').value = ''
    document.getElementById('Dateofbirth').value = ''
    document.getElementById('first_last').value = ''
    document.getElementById('bagnumber').value = ''
    document.getElementById('Departing').value = ''
    document.getElementById('Arriving').value = ''
    document.getElementById('Leaving').value = ''
    document.getElementById('Return').value = ''
    document.getElementById('meal').value = ''
    document.getElementById('Extras').value = ''
} 


Math.ceil((dateReturn - dateLeave) / (8.66 * Math.pow(10, 7)))