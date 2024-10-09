import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginUserSchema, registerUsersSchema } from '../validation/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserController,
  registerUserController,
  logoutUserController,
  refreshUserSessionController,
  sendResetEmailController,
} from '../controllers/auth.js';

import { requestResetEmailSchema } from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUsersSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

router.post(
  // '/reset-password',
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(sendResetEmailController),
);

export default router;
