import { Router, Request, Response } from "express";
import { createUser } from "../repository/user.repository";

const router = Router();

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
