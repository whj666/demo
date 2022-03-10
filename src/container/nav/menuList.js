export default {
  list: [
    {
      key: "funModule",
      icon: "logout",
      title: "管理中心",
      children: [
        {
          key: "/funModule/curd",
          name: "简历列表",
        },
      ],
    },
    {
      key: "usercenter",
      icon: "user",
      title: "用户中心",
      children: [
        {
          key: "/usercenter/userInfo",
          name: "个人信息",
        },
      ],
    },
  ],

  titleToName: {
    funModule: "管理中心",
    usercenter: "用户中心",
  },

  itemToName: {
    curd: "简历列表",
    userInfo: "个人信息",
  },
};
