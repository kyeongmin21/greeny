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
            name: 'JoinStep1',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step1" */ '@/views/myPage/JoinStep1.vue'),
          },
          {
            path: 'step2',
            name: 'JoinStep2',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step2" */ '@/views/myPage/JoinStep2.vue'),
          },
          {
            path: 'step3',
            name: 'JoinStep3',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step3" */ '@/views/myPage/JoinStep3.vue'),
          },
        ]
      },
      {
        path: 'find',
        name: 'Find',
        prop: true,
        meta: {layout: 'LoginLayout'},
        component: () => import(/* webpackChunkName: "find" */ '@/views/myPage/Find'),
        children: [
          {
            path: 'id',
            name: 'FindId',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "step3" */ '@/views/myPage/FindId.vue'),
          },
          {
            path: 'pw',
            name: 'FindPw',
            prop: true,
            meta: {layout: 'LoginLayout'},
            component: () => import(/* webpackChunkName: "pw" */ '@/views/myPage/FindPw.vue'),
          },
        ]
      },

    ]
  }
export default addRoute