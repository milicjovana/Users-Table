const api = new API();
const ui = new UI();
let idEU; //ovo mi se ne svidja ali samo ovako radi

document.addEventListener('DOMContentLoaded', getUsers);

ui.table.addEventListener('click', deleteUser);
ui.table.addEventListener('click', editUser);
ui.editModal.addEventListener('click', closeEditModal);
ui.btnCreateModal.addEventListener('click', createUser);
ui.createModal.addEventListener('click', closeCreateModal);
ui.btnSubmitE.addEventListener('click', submitEditModal);
ui.btnSubmitC.addEventListener('click', submitCreateModal);


function getUsers(){
    api.getUsers()
    .then(users => {
        ui.showUsers(users)
    });
}

//Delete User
function deleteUser(e){    
    if(e.target.parentElement.classList.contains('deleteUser')){        
        if(confirm('Remove user?')){
           console.log(e.target.parentElement.parentElement.parentElement.firstElementChild.textContent);
            api.deleteUser(e.target.parentElement.parentElement.parentElement.firstElementChild.textContent)
            .then((msg) => {
                console.log(msg);
                ui.removeUser(e.target.parentElement.parentElement.parentElement);
            });
        }        
   }   
}

//Edit Modal
function editUser(e){
    if(e.target.parentElement.classList.contains('editUser')){  
        ui.showModal(ui.editModal);  
        
        idEU = e.target.parentElement.parentElement.parentElement.firstElementChild.textContent;
        console.log(idEU);
        
        /*
        ui.btnSubmit.addEventListener('click', function submitEditModal(){
            console.log('usao u submit edit modal');
            api.updateUser(id, ui.collectDataEdit(ui.editModal))
            .then(response => {
                console.log('pre response');
                console.log(response);
                ui.editUser(id,response);
            });
                    
        });
        */          
   }   
}

function submitEditModal(){
    api.updateUser(idEU, ui.collectDataEdit(ui.editModal))
    .then(response => {
        console.log(response);
        ui.editUser(idEU,response);
    });            
}

function closeEditModal(e){
    if(e.target.parentElement.classList.contains('closeModal')){        
       // console.log(e.target.parentElement);  
        ui.hideModal(ui.editModal);
   }     
}

//Create Modal
function createUser(){
    ui.showModal(ui.createModal);
}

function submitCreateModal(){
    api.insertUser(ui.collectDataCreate(ui.createModal))
    .then(response => {
        console.log(response);
        ui.addUser(response);
    });
}

function closeCreateModal(e){
    if(e.target.parentElement.classList.contains('closeModal')){        
        //console.log(e.target.parentElement);  
        ui.hideModal(ui.createModal);   
   } 
}
