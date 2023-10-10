import { Router, Request, Response } from "express";
import authService from  "../services/auth.service";
import userService from "../services/user.service";

const router = Router();
const auth = authService.auth;

router.get("/signin", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await authService.authenticate(username, password)
    res.json({token:token});
});

router.post("/create", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await userService.createUser(username, password);
    res.json({ message: user });
});

router.get("/logged", auth, async (req: Request, res: Response) => {
  res.json({message: 'logged user'})
})

export default router;
