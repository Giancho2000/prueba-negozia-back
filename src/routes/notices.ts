import { Router } from "express";

const router = Router();

router.get('/', (_req, res) => {
    res.json({
        msg:'Hola - GET'
    })
});

export default router