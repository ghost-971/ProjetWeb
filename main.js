document.querySelector('.btn-login').addEventListener('click', login);
document.querySelector('.btn-inscription').addEventListener('click', inscription);
document.querySelector('.btn-activation').addEventListener('click', activation);
document.querySelector('.btn-contact').addEventListener('click', ajout)
document.querySelector('.btn-ajout').addEventListener('click', ajout_relation)
document.getElementById('section-login').hidden = false;
document.getElementById('section-activation').hidden = true;
document.getElementById('section-inscription').hidden = false;
document.getElementById('section-ajout').hidden = true;
document.getElementById('header').hidden = false;
document.getElementById('footer').hidden = false;
document.querySelector('.form-message').hidden = true;
document.querySelector('.rectangle').hidden = true;





function login(){
    var id = document.getElementById('id').value
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?information&identifiant=' + id, true);
    
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);
                console.log(response);
                tchat();
                listRelation();
            }
            else{
                console.log("Error");
            }
        }
    }
}

function listRelation(){
    var id = document.getElementById('id').value
    var xhr = new XMLHttpRequest();


    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?relations&identifiant=' + id, true);
    
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);
                console.log(response.relations)
                let i = 0
                for (let i = 0; i < response.relations.length; i++){
                    let a = document.querySelector('.y')
                    let p = document.createElement('p');
                    p.className = "test" 
                    a.appendChild(p).innerHTML = response.relations[i].identite;

                }               
            }
            else{
                console.log("Error");
            }
        }
    }
    
}

function inscription(){
    var pseudo = document.getElementById('pseudo').value;
    var mail = document.getElementById('mail').value;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?inscription&identite=' + pseudo + '&mail=' + mail, true);
    
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);
                document.getElementById('section-login').hidden = true;
                document.getElementById('section-inscription').hidden = true;
                document.getElementById('section-activation').hidden = false;
                
                console.log(response);
            }
            else{
                console.log("Error");
            }
        }
    } 
}

function activation(){
    var id = document.getElementById('activation').value;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?activation=' + id, true);
    
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);                
                console.log(response);
                tchat();
            }
            else{
                console.log("Error");
            }
        }
    } 
}


function tchat(){
    document.getElementById('section-login').hidden = true;
    document.getElementById('section-inscription').hidden = true;
    document.getElementById('section-activation').hidden = true;
    document.getElementById('section-ajout').hidden = true;
    document.getElementById('header').hidden = true;
    document.getElementById('footer').hidden = true;
    document.querySelector('.form-message').hidden = false;
    document.querySelector('.rectangle').hidden = false;

};

function ajout(){
    document.getElementById('section-ajout').hidden = false;
    document.querySelector('.form-message').hidden = true;
    document.querySelector('.rectangle').hidden = true;   
};


function ajout_relation(){
    var id = document.getElementById('identifiant').value;
    var mail = document.getElementById('mail_relation').value; 
    let div = document.querySelector('div');

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://trankillprojets.fr/wal/wal.php?lier&identifiant=' + id + '&mail=' + mail, true);
    
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);        
                div.classList.toggle('contact')        
                console.log(response);
                console.log(id)
                console.log(mail)
                tchat();
            }
            else{
                console.log("Error");
            }
        }
    }
}

function ecrireMessage(){
    var id = document.getElementById('activation').value;
    console.log(id)

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?activation=' + id, true);
    
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);                
                console.log(response);
            }
            else{
                console.log("Error");
            }
        }
    }
}