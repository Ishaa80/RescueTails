const express = require("express");
const router = express.Router();
// const authcontrollers = require("../controllers/auth-controller");
// const cors = require("cors")
const Rescuer = require("../model/RescuerSchema")

const Contact = require("../model/Contactschema")

const Details=require("../model/detailsSchema")

const Response=require("../model/responseSchema")

//New Code
router.post('/Contactus', async (req, res) => {

    console.log(req.body); // requiring data from frontened

    const { fname, email, message} = req.body //Initializing frontened data to our userSchema

    // Validiating frontended data in our server 
    if (!fname || !email || !message) {

        return res.json({ status: 422, error: "Cannot be Empty" })

    }
    try {
            const contact = new Contact({ fname, email, message})
            await contact.save();
            res.json({ status: 201, message: "user filled successfully" })
    }
    catch (err) {
        console.log(err);
    }

});

router.post('/rescuer', async (req, res) => {
    console.log(req.body); // requiring data from frontened
    const { fname, email, password} = req.body //Initializing frontened data to our userSchema

    // Validiating frontended data in our server 
    if (!fname || !email || !password) {

        return res.json({ status: 422, error: "Cannot be Empty" })

    }
    try {
            const rescuer = new Rescuer({ fname, email, password})
            await rescuer.save();            
            res.json({ status: 201, message: "user filled successfully" })
    }
    catch (err) {
        console.log(err);
    }

});

router.post('/Login', async (req, res) => {

    try {
        const { email, password } = req.body //Initializing frontened data to our userSchema

        // Validiating frontended data in our server
        if (!email || !password) {
            return res.status(400).json({ status: 400, error: "Cannot be Empty" })
        }

        // finding registered user in our database
        const userlogin = await Rescuer.findOne({ email: email });

        if (userlogin) {
             
            if(!await Rescuer.findOne({ password: password })){
                return res.status(400).json({ status: 400, error: "Cannot be Empty" })
            }
            else{
                res.json({ status: 201, message: "user signin successful" })
                res.status(201).json({status:201,message:"user signin successfully"})
        }
    }
        else {

            return res.status(400).json({ status: 400, error: "Invaild details Error" })

        }

    } catch (error) {

        console.log(error)

    }
});
router.post('/details', async (req, res) => {

    console.log(req.body); // requiring data from frontened

    const { fname, phone, reportdate, address,pincode,animal_found,wound_d} = req.body //Initializing frontened data to our userSchema

    // Validiating frontended data in our server 
    if (!fname || !phone || !reportdate || !address || !pincode || !animal_found || !wound_d) {

        return res.json({ status: 422, error: "Cannot be Empty" })

    }
    try {
        // if user is already register than we are showing the error that invaild details it means user cannot re-register in our app
        
            const details = new Details({ fname, phone, reportdate, address,pincode,animal_found,wound_d})

            //After all this validation we can store user data in our database
            // But before storing user data in database we use a hashing technique 
            //hashing technique basically hash the password of user and make it unreadable

            await details.save();
            res.json({ status: 201, message: "user filled successfully" })
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/responses', async (req, res) => {

    console.log(req.body); // requiring data from frontened

    const { fname, animal_type, injury, treatment_date} = req.body //Initializing frontend data to our userSchema

    // Validiating frontend data in our server 
    if (!fname || !animal_type || !injury || !treatment_date) {

        return res.json({ status: 422, error: "Cannot be Empty" })

    }
    try {
            const responses = new Response({ fname, animal_type, injury, treatment_date})
            await responses.save();
            res.json({ status: 201, message: "Data Entered Successfully" })
    }
    catch (err) {
        console.log(err);
    }

});


module.exports = router;