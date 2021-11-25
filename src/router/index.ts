import { Router } from "express";

import testRouters from "./testRouters";
import emailRouters from "./emailRouters";

const router = Router();

router.use(testRouters);
router.use(emailRouters);

export default router;