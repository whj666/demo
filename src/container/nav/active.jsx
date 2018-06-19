import navData from "./menuList";

export default function routerNav (){
    let openKeys = null;
    let hash = location.hash.substr(1);
    let titleKeyArr = Object.keys(navData.titleToName);

    titleKeyArr.forEach(item => {
        if(hash.includes(item)){
            openKeys = item;
        }
    })

    return [hash, openKeys]
}
    