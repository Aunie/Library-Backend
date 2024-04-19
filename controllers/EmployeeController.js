const EmployeeSchema = require('../models/EmployeeSchema');

const registerEmployee = (req,res) => {
  try {
    // console.log(req.body);
    

    const {name,employeeId,gender,designation} = req.body;
    
    const employee = new EmployeeSchema({
        name,employeeId,gender,designation
    });

    employee.save();
    
    res.json({
        message: 'Employee Data received successfully',
        EmployeeData : employee
    })
  } catch (error) {
    res.json(error)
  }
};

const getEmployeeList = async(req,res)=>{
  try { 
      const employee = await EmployeeSchema.find()
      // console.log(employee);
      res.json({
        message:'Employee data received',
        EmployeeData:employee
      })
  
  } catch (error) {
      
      res.json(error)
  };
  
};

const deleteEmployee = async(req,res) => {
try {

  const  {employeeId}  = req.body;

  const employee = await EmployeeSchema.findByIdAndDelete(employeeId)
  console.log(employee);
   
  res.json({message:"employee deleted" })
  
} catch (error) {
  
}
};

const updateEmployee  =  async (req,res)=>{

  try {
      
      // const {id} = req.body._id
      // const book = await BookSchema.findById(req.body._id)
      // console.log(book);

      const {name,employeeId,gender,designation,_id} = req.body
      // console.log({name,employeeId,gender,designation,_id});
      // console.log({title,author,publishedYear,genre,_id} );
      const updatedEmployee = await EmployeeSchema.findByIdAndUpdate(_id, {
        name: name,
        employeeId: employeeId,
        gender: gender,
        designation: designation,
        }, { new: true }
        
        );

        console.log(updatedEmployee);

      res.json({message:'Employee has been updated successfully'})



  } catch (error) {
      
  }


}




module.exports = {registerEmployee,getEmployeeList,deleteEmployee,updateEmployee}
