let openKeys = null;
let hash = location.hash.substr(1);
let titleKeyArr = ["dispatch", "prediction", "settinglist"];

titleKeyArr.forEach(item => {
    if(hash.includes(item)){
        openKeys = item;
    }
})

export {
    hash,
    openKeys
}