
function temp(obj){
  for(let key in obj){
    if(typeof(obj[key] === "object")){
      temp(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}



const temp = {
    empName: 'Ovaledge',
    Age: 21,
    subEmp: {
      empName: 'Ovaledge1',
      Age: 21,
      subEmp: {
        empName: 'Ovaledge2',
        Age: 21,
        subEmp: {
        empName: 'Ovaledge3',
        Age: 21,
        subEmp: {
          empName: 'Ovaledge4',
          Age: 21,
          }
        }
      }
    }
  }

  console.log(yes(temp));