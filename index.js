let student = {
    firstName:'Basil',
    lastName: 'Varghese',
    rollNumber: 103
}

exports.handler = async (event) => {
    console.log(">>>> Inside Lambda Function >>>>>>");
    if(event.httpMethod=='GET'){
        return getStudentRecord(event);
    }
    if(event.httpMethod == 'POST'){
       return createStudentRecord(event);
    }
    
  
};

function createStudentRecord(event){
   const body = JSON.parse(event.body);
   const response = {
       statusCode: 200,
       body: JSON.stringify({
           message:"Succesfully Created A Student Record",
           details:body
       })
   };
   
   return response;
}

function getStudentRecord(event){
    
    const response = {
        statusCode:200,
        body: JSON.stringify({
            student_details:student
            })
    };
    return response
    
}
