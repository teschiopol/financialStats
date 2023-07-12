export function useListAll(filter = ['', '', '', '', '', '']) {

    let list = localStorage.getItem('list');
    list = JSON.parse(list);

    if (list === null) {
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
                    } else if (s1[2] > s2[2]) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        }
    );

    // Apply filter
    // from date, to date, from amount, to amount, description, category
    list = list.filter((el) => {
        if (filter[0] !== '') {
            if (el.Date < filter[0]) {
                return false;
            }
        }
        if (filter[1] !== '') {
            if (el.Date > filter[1]) {
                return false;
            }
        }
        if (filter[2] !== '') {
            if (el.Value < filter[2]) {
                return false;
            }
        }
        if (filter[3] !== '') {
            if (el.Value > filter[3]) {
                return false;
            }
        }
        if (filter[4] !== '') {
            if (!el.Description.toLowerCase().includes(filter[4].toLowerCase())) {
                return false;
            }
        }
        if (filter[5] !== '') {
            if (el.Category !== filter[5]) {
                return false;
            }
        }
        return true;
    });

    return list;
}
