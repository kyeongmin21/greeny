
const addRoute =
  {
    path: '/',
    name: 'magazineMain',
    component: () => import(/* webpackChunkName: "magazineMain" */ '@/views/magazine/Main'),
    children: [
      {
        path: 'magazine',
        name: 'MagazineList',
        prop: true,
        component: () => import(/* webpackChunkName: "magazineList" */ '@/views/magazine/List'),
      },
      {
        path: 'magazine/detail',
        name: 'MagazineDetail',
        prop: true,
        component: () => import(/* webpackChunkName: "magazineDetail" */ '@/views/magazine/Detail'),
      },
    ]
  }
export default addRoute