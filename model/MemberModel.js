const data = require('../database/data');

class MemberModel{
    
    last_id = 4;

    getAll(){
        return data;
    }

    getMember(id){

        const found = data.some(member => member.id == id);

        if(found){
            return data.filter(mb => mb.id == id);
        }else{
            return null;
        }

    }

    getByName(name){

        const found = data.some(member => member.name == name);

        if(found){
            return data.filter(mb => mb.name == name);
        }else{
            return null;
        }

    }

    addMember(name, email, status = 'active'){

        let new_member = {
            id: this.id,
            name: name,
            email: email,
            status: status
        };

        data.push(new_member);
        last_id += 1;

    }

    updateMember(id, name, email, status){

        const found = data.some(member => member.id == id);
        let found_member = null;

        if(found){
            
            data.forEach(member => {

                if(member.id == id){
                    member.name = name;
                    member.status = status;
                    member.email = email;

                    found_member = member;
                }

            });

        }

        return found_member;

    }

    deleteMember(id){

        let found = data.some(member => member.id == id);

        return data.filter(mb => mb.id != id);

    }

}

module.exports = MemberModel;