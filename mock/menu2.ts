//路径
//mock/menu.ts


export default {
    '/api/getMenu': [
        {
            path: '/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                name: 'factory',
                icon: 'fund',
                path: '/dashboard/factory',
                component: './dashboard/factory',
              },
              {
                name: 'monitor',
                icon: 'smile',
                path: '/dashboard/monitor',
                component: './dashboard/monitor',
              },
              {
                name: 'workplace',
                icon: 'smile',
                path: '/dashboard/workplace',
                component: './dashboard/workplace',
              },
            ],
          },
        {
          component: './404',
        }
    ]
  };
  
  
  