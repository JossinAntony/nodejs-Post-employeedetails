const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send('Welcome');
});

app.post('/employee_details', (req, res)=>{
    var getName = req.body.emp_name;
    var getId = req.body.emp_id;
    var getCode = req.body.emp_code;
    var getDesig = req.body.emp_desig;
    var getSalary = parseInt(req.body.emp_salary);
    var getAdrs = req.body.emp_adrs;
    var getPhone = req.body.emp_phone;

    res.status(200).send({
        'name': getName,
        'id': getId,
        'code': getCode,
        'desig': getDesig,
        'salary': getSalary,
        'adrs': getAdrs,
        'phone': getPhone,
    });
});

app.listen(3000, (e)=>{
    if(e){
        console.log('error..');
    }else{
        console.log('Server running at http://localhost:3000/');
    }
})