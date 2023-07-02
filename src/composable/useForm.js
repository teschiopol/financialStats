import {ref} from "vue";

export const modOp = ref(false);
export const dataRow = ref([]);

export function setModOp(value) {
    modOp.value = value;
}

export function getModOp(){
    return modOp.value;
}

export function setDataRow(value) {
    dataRow.value = value;
}

export function getDataRow(){
    return dataRow.value;
}
