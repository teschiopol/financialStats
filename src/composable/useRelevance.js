import {pb} from "@/db";

let relevance;

async function initRel() {
    relevance = await pb.collection('relevance').getFullList({
        sort: '-total'
    });
}

export async function useRelevance(force = false) {

    let tmp_rel;

    if (relevance === undefined || force) {
        await initRel();
    }

    tmp_rel = relevance;

    return tmp_rel;
}

export async function useRelStruct(full = false) {

    let rel = [];

    if (relevance === undefined) {
        await initRel();
    }

    relevance.forEach(el => {
        if (full) {
            rel.push([el.name, el.description, el.id]);
        } else {
            rel.push(el.name);
        }
    })

    return rel;
}

export async function getRelId(label) {
    const record = await pb.collection('relevance').getFirstListItem('name="' + label + '"');
    return record.id
}
