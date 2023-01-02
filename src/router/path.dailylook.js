const addRoute =
  {
    path: '/',
    name: 'dailyLookMain',
    component: () => import(/* webpackChunkName: "dailyLookMain" */ '@/views/dailyLook/Main'),
    children: [
      {
        path: 'dailyLook',
        name: 'DailyLookList',
        prop: true,
        component: () => import(/* webpackChunkName: "dailyLookList" */ '@/views/dailyLook/List'),
      },
      {
        path: 'dailyLook/detail',
        name: 'DailyLookDetail',
        prop: true,
        component: () => import(/* webpackChunkName: "dailyLookDetail" */ '@/views/dailyLook/Detail'),
      },
    ]
  }
export default addRoute