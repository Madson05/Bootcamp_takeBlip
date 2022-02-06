function getAdmins(mapDeMembros){
    let listaAdmins = [];
    for (let [key, value] of mapDeMembros){
        if(value === "Admin"){
            listaAdmins.push(key);
        };
    };
    return listaAdmins;

}

const membros = new Map();

membros.set("João" , "Admin");
membros.set("Maria" , "User");
membros.set("Clara" , "Admin");
membros.set("Francisco" , "Admin");
membros.set("Joséfina" , "User");

console.log(getAdmins(membros));
