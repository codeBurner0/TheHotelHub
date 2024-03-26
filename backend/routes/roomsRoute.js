import { Router } from "express";
import { getallrooms} from "../controller/roomController.js";
import { getallroomsbyid} from "../controller/bookController.js";
import  Rooms from "../models/room.js";



const router  = Router()

router.get("/getallrooms",getallrooms);
router.post("/getallroomsbyid", getallroomsbyid);

router.post("/addroom" , async(req,res) =>{
    try {
        const newroom = new Rooms(req.body)
        await newroom.save()
        res.send("New Room Added Successfully")
    } catch (error) {
        return res.status(500).json({error})
    }
})

export default router;
//module.exports = router;