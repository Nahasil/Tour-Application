import express from 'express'; 
import auth from '../middleware/auth.js';

const router=express.Router();

import { createTour,deleteTour,getRelatedTours,getTour,getTourBySearch,getTourByTag,getTourByUser,getTours, likeTour, updateTour } from "../controllers/tour.js";

router.get("/search", getTourBySearch)
router.get("/tag/:tag", getTourByTag)
router.post("/relatedTours",getRelatedTours)
router.get("/", getTours);
router.get("/:id", getTour);

router.post("/",auth, createTour);
router.delete("/:id",auth,deleteTour);
router.patch("/:id",auth,updateTour);
router.get("/userTours/:id", auth, getTourByUser);
router.patch("/like/:id",auth, likeTour );

export default router;