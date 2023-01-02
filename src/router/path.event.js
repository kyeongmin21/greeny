const addRoute =
  {
    path: '/',
    name: 'eventMain',
    component: () => import(/* webpackChunkName: "eventMain" */ '@/views/event/Main'),
    children: [
      {
        path: 'event',
        name: 'EventList',
        prop: true,
        component: () => import(/* webpackChunkName: "eventList" */ '@/views/event/List'),
      },
      {
        path: 'event/detail',
        name: 'EventDetail',
        prop: true,
        component: () => import(/* webpackChunkName: "eventDetail" */ '@/views/event/Detail'),
      },
    ]
  }
export default addRoute