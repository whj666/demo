export default function routerNav (){
    let openKeys = null;
    let hash = location.hash.substr(1);
    let titleKeyArr = ["table", "prediction", "settinglist"];

    titleKeyArr.forEach(item => {
        if(hash.includes(item)){
            openKeys = item;
        }
    })

    return [hash, openKeys]
}
    