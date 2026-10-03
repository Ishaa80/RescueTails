const express = require("express");
const router = express.Router();
const UserInfoController = require("../controllers/user-controller");
const UserDetailController = require("../controllers/rescuer-controller");
const UserContactController = require("../controllers/contact-controller");

// Fetching Userinfo
router.route('/rescuer').get(UserInfoController.getAllUserInfo);
// Deleting Userinfo by ID
router.route("/rescuer/delete/:id").delete(UserInfoController.deleteUserinfoById);
// Updating Userinfo by ID
router.route("/rescuer/update/:id").put(UserInfoController.updateUserById);


// Userdetail
router.route('/details').get(UserDetailController.getAllUsersData); //data base input
// Deleting Userinfo by ID
router.route("/details/delete/:id").delete(UserDetailController.deleteDetailfoById);


// Fetching contact data
router.route('/Contactus').get(UserContactController.getAllContactData);
// Deleting ContactUs data by ID
router.route("/Contactus/delete/:id").delete(UserContactController.deleteUserContactById);
// Updating Usercontact data by ID
router.route("/Contactus/update/:id").put(UserContactController.updateUsercontactById);


// Fetching responses
const getAllResponses = require("../controllers/responses-controller");
router.route('/responses').get(getAllResponses);

module.exports = router;
