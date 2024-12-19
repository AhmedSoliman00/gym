import express from 'express'
import {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from '../controllers/userController.js'

import { getAllUsers, getUserById, updateUserByAdmin ,deleteUser} from '../controllers/adminController.js'

import {
  authenticate,
  authorizeAdmin,
  verifyUserId,
} from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/signup', createUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/users', authenticate, authorizeAdmin, getAllUsers)

router
  .route('/profile/:id')
  .get(authenticate, verifyUserId, getCurrentUserProfile)
  .put(authenticate, verifyUserId, updateCurrentUserProfile)

export default router

router.get('/admin/profile/:id', authenticate, authorizeAdmin, getUserById);
router.put('/admin/profile/:id', authenticate, authorizeAdmin, updateUserByAdmin);
router.delete('/admin/profile/:id', authenticate, authorizeAdmin, deleteUser);