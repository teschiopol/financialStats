import {pb} from "@/db";

let relevance;

async function initRel() {
    relevance = await pb.collection('relevance').getFullList({
        sort: '-total'
    });
}

export async function useRelevance() {

    let tmp_rel;

    if (relevance === undefined) {
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
            rel.push([el.name, el.description]);
        } else {
            rel.push(el.name);
        }
    })

    return rel;
}
