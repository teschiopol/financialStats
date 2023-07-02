export function useListAll(){

    let list = localStorage.getItem('list');
    list = JSON.parse(list);

    if(list === null){
        return [];
    }

    return list;
}
