import {pb} from "@/db";
import {useCategory} from "@/composable/useCategory";
import {useRelevance} from "@/composable/useRelevance";

export async function useToSave(from, type, content, id) {
    let record;
    if (type === 'C') {
        record = await pb.collection(from).create(content);
        await updateTotal(from, type, record);
    } else {
        await updateTotal(from, type, id)
        record = await pb.collection(from).update(id, content);
        await updateTotal(from, 'C', record)
    }
    return true;
}

export async function useToDelete(from, id) {
    await updateTotal(from, 'D', id);
    if (from === 'list') {
        await pb.collection(from).delete(id);
    } else {
        await pb.collection(from).delete(id);
    }

    return true;
}

async function updateTotal(from, type, record) {
    if (type === 'C') {
        if (from === 'list') {
            // add cat
            let cat = await pb.collection('category').getFirstListItem('id="' + record.category + '"');
            cat.total += record.amount;
            await pb.collection('category').update(cat.id, cat);
            // add rel
            let rel = await pb.collection('relevance').getFirstListItem('id="' + cat.relevance + '"');
            rel.total += record.amount;
            await pb.collection('relevance').update(rel.id, rel);
            await useCategory(['', '', '', '', ''], true);
            await useRelevance(true);
        }
    } else if (type === 'D') {
        if (from === 'list') {
            let list = await pb.collection('list').getFirstListItem('id="' + record + '"');
            // remove cat
            let cat = await pb.collection('category').getFirstListItem('id="' + list.category + '"');
            cat.total -= list.amount;
            await pb.collection('category').update(cat.id, cat);
            // remove rel
            let rel = await pb.collection('relevance').getFirstListItem('id="' + cat.relevance + '"');
            rel.total -= list.amount;
            await pb.collection('relevance').update(rel.id, rel);
            await useCategory(['', '', '', '', ''], true);
            await useRelevance(true);
        }
    } else {
        let list = await pb.collection('list').getFirstListItem('id="' + record + '"');
        let cat = await pb.collection('category').getFirstListItem('id="' + list.category + '"');
        if (from === 'list') {
            // update cat
            cat.total -= list.amount;
            await pb.collection('category').update(cat.id, cat);
        }
        // update rel
        let rel = await pb.collection('relevance').getFirstListItem('id="' + cat.relevance + '"');
        rel.total -= list.amount;
        await pb.collection('relevance').update(rel.id, rel);
    }
}
