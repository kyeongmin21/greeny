const addRoute =
  {
    path: '/',
    name: 'myPageMain',
    meta: {layout: 'NoneLayout'},
    component: () => import(/* webpackChunkName: "myPageMain" */ '@/views/myPage/Main'),
    children: [
      {
        path: '/login',
        name: 'Login',
        prop: true,
        meta: {layout: 'NoneLayout'},
        component: () => import(/* webpackChunkName: "myPage" */ '@/views/myPage/Login'),
      },
      {
        path: 'join',
        name: 'Join',
        prop: true,
        meta: {layout: 'NoneLayout'},
        component: () => import(/* webpackChunkName: "join" */ '@/views/myPage/Join'),
      },
    ]
  }
export default addRoute