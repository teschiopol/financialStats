import {pb} from "@/db";

let categories;

async function initCat() {
    categories = await pb.collection('category').getFullList({
        sort: '-total',
        expand: 'relevance',
    });
}

export async function useCategory(filter = ['', '', '', '', ''], force = false) {

    let tmp_cat;

    if (categories === undefined || force) {
        await initCat();
    }

    tmp_cat = categories.filter((el) => {
        el.relevance = el.expand.relevance.name;
        if (filter[0] !== '') {
            if (!el.name.toLowerCase().includes(filter[0].toLowerCase())) {
                return false;
            }
        }
        if (filter[1] !== '') {
            if (!el.description.toLowerCase().includes(filter[1].toLowerCase())) {
                return false;
            }
        }
        if (filter[2] !== '') {
            if (el.relevance !== filter[2]) {
                return false;
            }
        }
        if (filter[3] !== '') {
            if (el.total < filter[3]) {
                return false;
            }
        }
        if (filter[4] !== '') {
            if (el.total > filter[4]) {
                return false;
            }
        }
        return true;
    });

    return tmp_cat;
}

export async function useCatStruct(full = false) {

    let cat = [];

    if (categories === undefined) {
        await initCat();
    }

    categories.forEach(el => {
        if (full) {
            cat.push([el.name, el.description, el.id]);
        } else {
            cat.push(el.name);
        }
    })

    return cat;
}

export async function getCatId(label) {
    const record = await pb.collection('category').getFirstListItem('name="' + label + '"');
    return record.id
}
