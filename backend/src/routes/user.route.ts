import { Router, Request, Response } from "express";
import { createUser, signin } from "../repository/user.repository";

const router = Router();

router.get("/signin", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await signin(username, password);
    res.json(user);
  } catch (err: any) {
    res.json({ message: err.message });
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    await createUser(username, password);
    res.json({ message: "Sucess creating user" });
  } catch (err: any) {
    res.json({ message: err.message });
  }
});

export default router;
