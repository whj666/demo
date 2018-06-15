export default {
    "list": [{
        "key": "funModule",
        "icon": "logout",
        "title": "功能模块",
        "children": [{
            "key": "/funModule/curd",
            "name": "增删查改"
        },{
            "key": "/funModule/administration",
            "name": "方案管理"
        },{
            "key": "/funModule/contrast",
            "name": "方案对比"
        }]
    },{
        "key": "usercenter",
        "icon": "line-chart",
        "title": "用户中心",
        "children": [{
            "key": "/usercenter/userInfo",
            "name": "个人信息"
        },{
            "key": "/usercenter/securitySet",
            "name": "安全设置"
        }]
    },{
        "key": "settinglist",
        "icon": "appstore-o",
        "title": "配置列表",
        "children": [{
            "key": "/settinglist/objectSetting",
            "name": "对象配置"
        },{
            "key": "/settinglist/moduleSetting",
            "name": "模块配置"
        },{
            "key": "/settinglist/modelSetting",
            "name": "模型配置"
        }]
    }],

    "titleToName": {
        "funModule": "功能模块", 
        "usercenter": "用户中心", 
        "settinglist": "配置列表"
    },

    "itemToName": {
        "curd": "增删查改",
        "administration": "方案管理",
        "contrast": "方案对比",

        "userInfo": "个人信息",
        "securitySet": "安全设置",

        "objectSetting": "对象配置",
        "moduleSetting": "模块配置",
        "modelSetting": "模型配置"
    }
}