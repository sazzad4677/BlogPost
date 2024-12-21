import Router, { IRouter } from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { UsersRouter } from '../modules/users/users.router';
import { BlogRouter } from '../modules/blog/blog.router';
import { AdminRouter } from '../modules/admin/admin.router';

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
  {
    path: '/blogs',
    route: BlogRouter,
  },
  {
    path: "/admin",
    route: AdminRouter
  }
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
