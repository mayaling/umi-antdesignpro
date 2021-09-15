import { request } from 'umi';

/** 获取当前的用户 */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.CurrentUser>('/api/auth/user/userinfo', {
    method: 'GET',
    ...(options || {}),
  });
 
}

// 获取菜单
export async function getMenuData(options?: { [key: string]: any }) {
  return request<API.MenuData>('/api/getMenu', {
    method: 'GET',
    ...(options || {}),
  });
 
}


/** 工厂数据*/
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    pageNum?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/schedule/plant/queryByPage', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


