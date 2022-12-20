const addRoute =
  {
    path: '/',
    name: 'challengeMain',
    component: () => import(/* webpackChunkName: "challengeMain" */ '@/views/challenge/Main'),
    children: [
      {
        path: 'challenge',
        name: 'ChallengeList',
        prop: true,
        component: () => import(/* webpackChunkName: "challengeList" */ '@/views/challenge/List'),
      },
      {
        path: 'challenge/detail',
        name: 'ChallengeDetail',
        prop: true,
        component: () => import(/* webpackChunkName: "challengeDetail" */ '@/views/challenge/Detail'),
      },
    ]
  }
export default addRoute