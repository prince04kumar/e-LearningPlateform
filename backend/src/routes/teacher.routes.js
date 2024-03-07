import {Router} from "express";
import {signup, mailVerified, login, logout, addTeacherDetails} from "../controllers/teacher.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { authTeacher } from "../middlewares/teacherAuth.middleware.js";
import { authSchema } from "../middlewares/joiLogin.middleware.js";

const router = Router()

router.route("/signup").post(
    signup
)

router.route("/verify").get(
    mailVerified
)

router.route("/login").post(
    authSchema, login
)

router.route("/logout").post(
    authTeacher, logout
)

router.route("/verification/:id").post(authTeacher,
    upload.fields([
        {
            name:"Aadhaar",
            maxCount:1,
        },
        {
            name:"Secondary",
            maxCount:1,
        },
        {
            name:"Higher",
            maxCount:1
        },
        {
            name:"UG",
            maxCount:1
        },
        {
            name:"PG",
            maxCount:1
        }
    ]) ,
     addTeacherDetails)

export default router;