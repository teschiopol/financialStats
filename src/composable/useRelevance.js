import {pb} from "@/db";

let relevance;

async function initRel() {
    relevance = await pb.collection('relevance').getFullList({
        sort: '-total',
        expand: 'relevance',
    });
}

export async function useRelevance() {

    let tmp_rel = null;

    if (relevance === undefined) {
        await initRel();
    }

    return tmp_rel;
}

export async function useRelStruct(full = false) {

    let rel = [];

    if (relevance === undefined) {
        await initRel();
    }

    relevance.forEach(el => {
        if (full) {
            rel.push([el.name, el.description]);
        } else {
            rel.push(el.name);
        }
    })

    return rel;
}
