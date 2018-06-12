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
        "key": "prediction",
        "icon": "line-chart",
        "title": "洪水预报",
        "children": [{
            "key": "/prediction/programManagement",
            "name": "模型方案管理"
        },{
            "key": "/prediction/jobForecast",
            "name": "实时作业预报"
        },{
            "key": "/prediction/resultManagement",
            "name": "预报结果管理"
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
        "prediction": "洪水预报", 
        "settinglist": "配置列表"
    },

    "itemToName": {
        "curd": "增删查改",
        "administration": "方案管理",
        "contrast": "方案对比",

        "programManagement": "模型方案管理",
        "jobForecast": "实时作业预报",
        "resultManagement": "预报结果管理",

        "objectSetting": "对象配置",
        "moduleSetting": "模块配置",
        "modelSetting": "模型配置"
    }
}