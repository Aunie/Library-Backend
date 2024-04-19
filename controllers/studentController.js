const StudentSchema = require('../models/StudentSchema');


const registerStudents = (req, res) => {
    try {
        // console.log(req.body);
        const {name,memberId,gender,age,status} = req.body
        const student = new StudentSchema({  
            name,memberId,gender,age,status
        });

        // console.log(student);
        student.save();
        res.json({message:"DATA RECIEVED SUCCESSFULLY"})
    } catch (error) {
        
    }
};



const getStudentsController =async(req,res)=>{


try {
    
    const members = await StudentSchema.find()
    // console.log(members);
        res.json({mesasge:'students data recieved',StudentsData:members})

} catch (error) {
    
    res.json(error)
};

}

const deleteStudent = async(req,res) => {
    try {
    
      const  {id}  = req.body;
    
      const studentstudent = await StudentSchema.findByIdAndDelete(id)
      console.log(studentstudent);
       
      res.json({message:"Student deleted" })
      
    } catch (error) {
      
    }
    };



    const updateStudent  =  async (req,res)=>{

        
        try {
            
            // const {id} = req.body._id
            // const stundent = await StudentSchema.findById(id)
            // console.log(stundent);



            const {name,memberId,gender,age,status,_id} = req.body
            const updatedStudent = await StudentSchema.findByIdAndUpdate(_id, {
                name: name,
                memberId: memberId,
                gender: gender,
                age: age,
                status: status
              }, { new: true }
              
              );

              console.log(student);

            res.json({mesasge:'user upadted successfully'})



        } catch (error) {
            
        }


    }



    module.exports = {registerStudents,getStudentsController,deleteStudent  ,updateStudent}
