export function useListAll(){

    let list = localStorage.getItem('list');
    list = JSON.parse(list);

    if(list === null){
        return [];
    }

    // sort by date asc
    list = list.sort(
        (e1, e2) => {

            let s1 = e1.Date.split('-');
            let s2 = e2.Date.split('-');

            // year
            if(s1[0] < s2[0]){
                return -1;
            }else if(s1[0] > s2[0]){
                return 1;
            }else{
                // month
                if(s1[1] < s2[1]){
                    return -1;
                }else if(s1[1] > s2[1]){
                    return 1;
                }else{
                    // day
                    if(s1[2] < s2[2]){
                        return -1;
                    }else if(s1[2] > s2[2]){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            }
        }
    );

    return list;
}
