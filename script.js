document
.getElementById("formulaire")
.addEventListener("submit", function(e){

e.preventDefault();

const data = {
    nom: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    metier: document.getElementById("metier").value
};

fetch("save.php",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})
.then(res=>res.text())
.then(result=>{

    if(result === "success"){
        document.getElementById("message").innerHTML =
        "Données enregistrées avec succès";

        document.getElementById("formulaire").reset();
    }
    else{
        document.getElementById("message").innerHTML =
        "Erreur lors de l'enregistrement";
    }
});
});
