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
    ]
  }
export default addRoute