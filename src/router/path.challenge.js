const addRoute =
  {
    path: '/',
    name: 'challengeMain',
    component: () => import(/* webpackChunkName: "challengeMain" */ '@/views/challenge/Main'),
    children: [
      {
        path: 'challenge/list',
        name: 'ChallengeList',
        prop: true,
        component: () => import(/* webpackChunkName: "challengeList" */ '@/views/challenge/ChallengeList'),
      },
    ]
  }
export default addRoute