function UI(){
    this.table = document.getElementById('users-table');

    this.editModal = document.getElementById('editModal');
    this.btnSubmitE = document.getElementById('submitEForm');
    this.inputNameE = document.getElementById('nameEInput');
    this.inputJobE = document.getElementById('jobEInput');

    this.createModal = document.getElementById('createModal');
    this.btnCreateModal = document.getElementById('btnCreateUser'); //otvara CreateModal
    this.btnSubmitC = document.getElementById('submitCForm');
    this.inputNameC = document.getElementById('nameCInput');
    this.inputJobC = document.getElementById('jobCInput');
}

UI.prototype.showUsers = function(users){
    let output = `
    <tr>
        <td class="col-id">
            ID
        </td>
        <td class="col-avatar">
            Avatar
        </td>
        <td class="col-first-name">
            First Name
        </td>
        <td class="col-last-name">
            LastName
        </td>
        <td class="col-job">
        Job
        </td>
        <td class="col-edit">
            Edit
        </td>
        <td class="col-delete">
            Delete
        </td>
    </tr>`;
    users.forEach(user => {
        output += `
        <tr class="user-row">
            <td class="col-id">${user.id}</td>
            <td class="col-avatar">
            <img src=${user.avatar} alt="img">        
            </td>
            <td class="col-first-name">
            ${user.first_name}
            </td>
            <td class="col-last-name">
            ${user.last_name}
            </td>
            <td class="col-job"></td>
            <td class="col-edit">
            <span class = "editUser my-button"><i class="fas fa-user-edit"></i></span>
            </td>
            <td class="col-delete">
            <span class = "deleteUser my-button"><i class="fas fa-user-times"></i></span>
            </td>
        </tr>
        `;
    });
    
    this.table.innerHTML = output;
}

UI.prototype.removeUser = function(user){
    console.log(user);
    user.remove();
}

UI.prototype.editUser = function(id, user){
    users = document.querySelectorAll('.user-row');
    users.forEach((u) => {
        if(u.firstElementChild.textContent == id){
            //u.firstElementChild.nextElementSibling.nextElementSibling.textContent = user.name;
            //u.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = user.job;
            let child = u.firstElementChild;
            while(child){
                if(child.classList.contains('col-first-name'))
                {
                    child.textContent = user.name;
                }
                if(child.classList.contains('col-job'))
                {
                    child.textContent = user.job;
                }
                child = child.nextElementSibling;
            }
        }
    });
}

UI.prototype.addUser = function(user){
    let userRow = document.createElement('tr');
    userRow.innerHTML = `
    <td class="col-id">${user.id}</td>
    <td class="col-avatar">       
    </td>
    <td class="col-first-name">
    ${user.name}
    </td>
    <td class="col-last-name">
    </td>
    <td class="col-job">
    ${user.job}</td>
    <td class="col-edit">
    <span class = "editUser my-button"><i class="fas fa-user-edit"></i></span>
    </td>
    <td class="col-delete">
    <span class = "deleteUser my-button"><i class="fas fa-user-times"></i></span>
    </td>`;
    this.table.appendChild(userRow);
}

UI.prototype.showModal = function(modalTipe){
    modalTipe.style.display = 'block';
    this.table.style.visibility = 'hidden';
}

UI.prototype.hideModal = function(modalTipe){
    modalTipe.style.display = 'none';
    this.table.style.visibility = 'visible';
}

UI.prototype.collectDataEdit = function(modalTipe){
    //console.log(this.inputNameE.value);
    //console.log(this.inputJobE.value);
    const nameU = this.inputNameE.value;
    const jobU = this.inputJobE.value;
    this.inputNameE.value = '';
    this.inputJobE.value = '';
    this.hideModal(modalTipe);
    return {
        name :  nameU,
        job : jobU
    }
}

UI.prototype.collectDataCreate = function(modalTipe){
    const nameU = this.inputNameC.value;
    const jobU = this.inputJobC.value;
    this.inputNameC.value = '';
    this.inputJobC.value = '';
    this.hideModal(modalTipe);
    return {
        name :  nameU,
        job : jobU
    }
}