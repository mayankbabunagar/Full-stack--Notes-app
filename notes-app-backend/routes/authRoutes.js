import Express  from "express";
import { loginUser, registeredUser} from '../controllers/authController.js'
const router = Express.Router();
router.post('/register', registeredUser)
router.post('/login', loginUser);

export default router;
