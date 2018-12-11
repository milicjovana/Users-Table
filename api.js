function API(){

}

API.prototype.getUsers = function(){
    return new Promise((resolve, reject) =>{
        fetch('https://reqres.in/api/users?page=1')
        .then(res => res.json())
        .then(data => resolve(data.data))
        .catch(err => reject(err));
    });
}



API.prototype.deleteUser = function(id){
    return new Promise((resolve,reject) => {
        fetch(`https://reqres.in/api/users/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            }
        })
        //.then(res => res.json())
        .then(() => resolve(`User with id = ${id} deleted`))
        .catch(err => reject(err));
    });
}

API.prototype.updateUser = function(id, data){
    return new Promise((resolve,reject) => {
        fetch(`https://reqres.in/api/users/${id}`,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    }
    );
}

API.prototype.insertUser = function (data){
    return new Promise((resolve,reject) =>{
        fetch('https://reqres.in/api/users',{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}