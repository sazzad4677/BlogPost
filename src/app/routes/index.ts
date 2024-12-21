import Router, { IRouter } from 'express';
import AuthRouter from '../modules/auth/auth.router';
import UsersRouter from '../modules/users/users.router';

const router = Router();

interface IRoute {
  path: string;
  route: IRouter;
}

const routes: IRoute[] = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/user',
    route: UsersRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
