//路径
//mock/menu.ts


export default {
    '/api/getMenuDataNew': [
        {
            resourceId: "1",
            resourceName: "菜单",
            url: null,
            parentId: "",
            sort: 1,
            icon: "appstore",
            resourceType: "MENU",
            openType: "INNER",
            valid: "YES",
            systemCode: null,
            subResources: [
              // 工厂建模
              {
                resourceId: "1210c5bcd31fb7947e9680a0a0f60392",
                resourceName: "工厂建模",
                url: "/",
                parentId: "1",
                sort: 1,
                icon: "appstore",
                resourceType: "MENU",
                openType: "INNER",
                valid: "YES",
                systemCode: null,
                subResources: [
                  {
                    resourceId: "8915c9358c85a75ed6bae2f3bd8de52a",
                    resourceName: "基本信息",
                    url: "/dashboard/analysis",
                    parentId: "1210c5bcd31fb7947e9680a0a0f60392",
                    sort: 1,
                    // "icon": "appstore",
                    resourceType: "MENU",
                    openType: "INNER",
                    valid: "YES",
                    systemCode: null,
                    subResources: [
                      {
                        resourceId: "8915c9358c85a75ed6bae2f3bd8de52a1",
                        resourceName: "工厂",
                        url: "/dashboard/analysis",
                        parentId: "8915c9358c85a75ed6bae2f3bd8de52a",
                        sort: 1,
                        // "icon": "appstore",
                        resourceType: "MENU",
                        openType: "INNER",
                        valid: "YES",
                        systemCode: null,
                      },
                      {
                        resourceId: "8915c9358c85a75ed6bae2f3bd8de52a2",
                        resourceName: "库存点",
                        url: "/dashboard/workplace",
                        parentId: "8915c9358c85a75ed6bae2f3bd8de52a",
                        sort: 1,
                        // "icon": "appstore",
                        resourceType: "MENU",
                        openType: "INNER",
                        valid: "YES",
                        systemCode: null,
                      },
                    ],
                    systemName: null,
                  },
                ],
                systemName: null,
              },
            ],
            systemName: null,
          },
    ]
  };
  
  
  