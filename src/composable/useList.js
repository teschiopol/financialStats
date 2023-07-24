import {pb} from "@/db";

export async function useListAll(filter = ['', '', '', '', '', '']) {

    let tmp_list;

    let list = await pb.collection('list').getFullList({
        sort: '-date',
        expand: 'category',
    });

    // Apply filter
    // from date, to date, from amount, to amount, description, category
    tmp_list = list.filter((el) => {
        el.category = el.expand.category.name;
        if (filter[0] !== '') {
            if (el.date < filter[0]) {
                return false;
            }
        }
        if (filter[1] !== '') {
            if (el.date > filter[1]) {
                return false;
            }
        }
        let split = el.date.split(' ')[0].split('-');
        el.date = split[2] + '/' + split[1] + '/' + split[0];
        if (filter[2] !== '') {
            if (el.amount < filter[2]) {
                return false;
            }
        }
        if (filter[3] !== '') {
            if (el.amount > filter[3]) {
                return false;
            }
        }
        if (filter[4] !== '') {
            if (!el.description.toLowerCase().includes(filter[4].toLowerCase())) {
                return false;
            }
        }
        if (filter[5] !== '') {
            if (el.category !== filter[5]) {
                return false;
            }
        }
        return true;
    });

    return tmp_list;
}
