const addRoute =
  {
    path: '/',
    name: 'myPageMain',
    meta: {layout: 'NoneLayout'},
    component: () => import(/* webpackChunkName: "myPageMain" */ '@/views/myPage/Main'),
    children: [
      {
        path: 'login',
        name: 'Login',
        prop: true,
        meta: {layout: 'LoginLayout'},
        component: () => import(/* webpackChunkName: "myPage" */ '@/views/myPage/Login'),
      },
      {
        path: 'join',
        name: 'Join',
        prop: true,
        meta: {layout: 'LoginLayout'},
        component: () => import(/* webpackChunkName: "join" */ '@/views/myPage/Join'),
        children: [
          {
            path: 'step1',
            name: 'Step1',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step1" */ '@/views/myPage/Step1'),
          },
          {
            path: 'step2',
            name: 'Step2',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step2" */ '@/views/myPage/Step2'),
          },
          {
            path: 'step3',
            name: 'Step3',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step3" */ '@/views/myPage/Step3'),
          },
        ]
      },
    ]
  }
export default addRoute