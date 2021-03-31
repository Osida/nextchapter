const express=require('express');
const { Pool, Client } = require("pg");
const bodyParser=require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


const app= express()

var corsOptions ={
    origin: "*"
}

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres_2",
    password:"postgres",
    port:"5432"
})
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expended:true}))
// Define PORT
const PORT = process.env.PORT || 8080;

// Listen to the defined PORT
var server=app.listen(PORT,'localhost',() => {
  console.log(`Server is running on port ${PORT}`);
});
var io = require('socket.io').listen(server)
function validate_phone(username){
    return username
}
io.on('connection',(socket)=>{
    console.log("Socket connection")
    socket.on("lead",data=>{
        console.log("lead")
        //check username exists if not register as lead
       check_username(data)
    })

    socket.on('join_room',(username,security_token)=>{
    
        //.Please ask your question


    //     username=validate_phone(username);

    //     //check if username 
        query='select u.username,u.id,s.name,s.security_token from administration_user as u inner join  administration_systemcompany as s on s.id=u."systemCompany_id" where s.security_token=$1 and u.username=$2';
        pool.query(query,[security_token,username],(err,res)=>{
            if(err){
            console.error(err);
            return;
            }
            for (let row of res.rows) {
               /// if username exists get ticket and broad cast message history else send ticket history
            }
    
    })


})

// create ticket and assign room when customer first texts after cookie expires
socket.on('chatMessage',data=>{

if(!data['room_id']){

console.log("ge")
get_company(data)

}else{
    // broadcast message
    socket.emit("broadCastMessage",data) 
    // get ticket obj
    get_ticket_obj(data)
   
}

});

//get chat history to display on clients side
socket.on('chatHistory',data =>{
    console.log(data)
    query="select u.username as username,u.first_name as first_name,td.message as message,td.time_created as time_created,td.ticket_id from administration_user as u inner join bridge_ticket as t on t.customer_id=u.id inner join bridge_ticketdetail as td on td.ticket_id=t.id where t.id=$1;";
    pool.query(query,[data['room_id']],(err,res)=>{
        if(err){
            console.error(err);
            return;
            }
        socket.emit("chatHistory",res.rows)
    })

})


// receive message from admin store and broadcast it to whoever is listening
socket.on('adminMessage',data=>{
    console.log(data);
    console.log("Admin data")

    // store ticket detail 
    create_ticket_detail({"room_id":data['ticket'],"user":data['frm'],"message":data['message']})
    // Broadcast to listeners
});
// function get_all_tickets(data){
//     query="select * from bridge_ticket as t inner join "
// }
function get_ticket_obj(data){
    query="select * from bridge_ticket where id=$1";
    pool.query(query,[data['room_id']],(err,res)=>{
        if(err){
            console.error(err);
            return;
            }
        for(let row of res.rows){
            // create ticket
            data['user']=row['customer_id'];
            create_ticket_detail(data)
        }
    })
}
function check_username(data){
    console.log("check_username")
    username=data['username']
    console.log(data['username'])
    p=data['username']
    q='select u.id from administration_user as u inner join administration_systemcompany as a on  u."systemCompany_id"=a.id where u.username=$1 or u.phone=$2 and a.security_token=$3';
    pool.query(q,[username,p,data['security_token']],(err,res)=>{
        if(err){
            console.error(err);
            return;
        } 
        if(res.rowCount==0){
            get_company_by_security_token(data)
        }
        console.log(res)
    })
}
function create_lead(company,data){
    console.log("create lead")
    query='insert into administration_user(id,username,date_joined,is_lead,"systemCompany_id",password,is_superuser,first_name,last_name,email,is_staff,is_active,other_name,skip_crb_report,is_from_old_system,location_verified,password_reset) values($1,$2,now(),$3,$4,now(),false,now(),now(),now(),false,false,false,false,false,false,false)';
    pool.query(query,[uuidv4(),data['username'],true,company],(err,res)=>{
        if(err){
            console.error(err);
            return;
        }

    })
}

function get_company_by_security_token(data){
    query='select id  from   administration_systemcompany  where security_token=$1';
    pool.query(query,[data['security_token'],],(err,res)=>{
        if(err){
        console.error(err);
        return;
        }
        console.log("2")
        for (let row of res.rows) {
           /// if username exists get ticket and broad cast message history else send ticket history
        create_lead(row.id,data)

        }

})
}


function get_company(data){
    query='select u.username as username,u.id as id,s.name,s.security_token,s.id as company from administration_user as u inner join  administration_systemcompany as s on s.id=u."systemCompany_id" where s.security_token=$1 and u.username=$2';
    pool.query(query,[data['security_token'],data['username']],(err,res)=>{
        if(err){
        console.error(err);
        return;
        }
        console.log("2")
        for (let row of res.rows) {
           /// if username exists get ticket and broad cast message history else send ticket history
        
           console.log("3")
        create_ticket(row.id,row.company,data)
       

        }

})
}

function get_user_open_ticket(socket,company,user_id,data) {
    query="select ticket_no,status,subject,message from bridge_ticket where company=$1 and customer=$2 and subject not ='Resolved'";
    pool.query(query,[company,user_id],(err,res)=>{
        if(err){
        console.error(err);
        return;
        }
        if(res.rowCount==0){
            // create new black  ticket 
        }else{
            for (let row of res.rows) {
                // get 
            }
        }
    })


}

function create_ticket(user,company,data) {
    console.log(4)
    ticket_no=new Date().toLocaleString();
    origin=data['origin']
    data['room_id']=uuidv4();
    query="insert into bridge_ticket(id,subject,message,status,origin,priority,customer_id,ticket_no,company_id,time_created,timestamp) values($1,'New Ticket',$2,'New',$3,'Medium',$4,$5,$6,now(),now())"
    pool.query(query,[data['room_id'],data['message'],origin,user,ticket_no,company],(err,res)=>{
        if(err){
            console.error(err);
            return;
        }
    console.log("asantaaaaaaaa")
    socket.emit("room_id",data);
  

    console.log("asante")
    data['user'] = user
    create_ticket_detail(data);
    })
}
function create_ticket_detail(data){


query="insert into bridge_ticketdetail(id,ticket_id,message,time_created,timestamp,frm_id) values($1,$2,$3,now(),now(),$4)";
pool.query(query,[uuidv4(),data['room_id'],data['message'],data['user']],(err,res)=>{
    console.log(err)
    console.log("===========================")
    if(err){
        console.error(err);
        return;
    }
    console.log("receive now sending")
    broadcast_detail(data);
   
})
}
function broadcast_detail(data){
    q="select * from administration_user where id=$1"
    pool.query(q,[data['user']],(err,res) => {
        if(err){
            console.error(err);
            return;
        }
    for(let k of res.rows){
        data['frm_name']=k["username"];
        data['time_created']= new Date();
        socket.broadcast.emit("receiveMessage",data)
    }

    })   
}



})
