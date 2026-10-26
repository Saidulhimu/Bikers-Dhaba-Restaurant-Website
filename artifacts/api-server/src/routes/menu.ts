import { Router, type IRouter } from "express";
import { GetMenuResponse } from "@workspace/api-zod";
import { menuData } from "../data/menu";

const router: IRouter = Router();

router.get("/menu", (req, res) => {
  const result = GetMenuResponse.safeParse(menuData);

  if (!result.success) {
    req.log.error(
      { issues: result.error.issues },
      "Configured menu data does not match the API contract",
    );
    res.status(500).json({ error: "Menu data is temporarily unavailable." });
    return;
  }

  res.json(result.data);
});

export default router;
