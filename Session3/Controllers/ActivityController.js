const userData = require("../userData");

function GetAllUsers (req, res) {
   const usersData = userData.data;
    res.json({data: usersData, size: usersData.length});
}

function GetUserByFirstName (req, res) {
    const routeParams = req.params;
    const queriedFirstName = routeParams.firstNamezzzzzzz;

    const filteredData = userData.data.filter((user) => user.name.first === queriedFirstName);
    res.json({data: filteredData, size: filteredData.length});
}

function GetUserByGender (req, res) {
    const queries = req.query;
    const queriedGender = queries.gender;

    const filteredData = userData.data.filter((user) => user.gender === queriedGender);
    res.json({data: filteredData, size: filteredData.length});
    
}

module.exports = {GetAllUsers, GetUserByFirstName, GetUserByGender};