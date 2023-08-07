import {pb} from "@/db";

export async function useToSave(from, type, content, id) {
    let record;
    if (type === 'C') {
        record = await pb.collection(from).create(content);
    } else {
        record = await pb.collection(from).update(id, content);
    }
    if (record?.id !== null) {
        // TODO: if okay
        // update cat
        // update rel
    }
    console.log(record);

    return true;
}

export async function useToDelete(from, id) {
    let record;
    if (from === 'list') {
        record = await pb.collection(from).delete(id);
    } else {
        record = await pb.collection(from).delete(id);
    }
    // TODO: if okay
    // update cat
    // update rel
    console.log(record);

    return true;
}
