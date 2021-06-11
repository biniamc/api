const express = require('express');
const router = express.Router();
const MemberModel = require('../model/MemberModel');

router.get('/', (request, result) => {

    data = new MemberModel();
    result.json(data.getAll());

});

router.get('/:id', (request, result) => {

    data = new MemberModel();
    
    new_data = data.getMember(request.params.id);

    if(new_data != null){

        result.json(new_data);

    }

    result.json({message: `there is no user with the id ${request.params.id}`});
    
});

module.exports = router;