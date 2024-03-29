<template>
  <div class="pagination" id="pagination">
    <div id="operation" style="display: flex; width: 60%">
      <div class="pagination-btn">
        <ButtonStandard label="Create 🗒" @click="toggleModal('C')"/>
      </div>
      <div class="pagination-btn" v-show="selectOp">
        <ButtonStandard label="Edit ✍🏻" @click="toggleModal('E')"/>
      </div>
      <div class="pagination-btn" v-show="!selectOp" style="opacity: 0.3;">
        <ButtonStandard label="Edit ✍🏻"/>
      </div>
      <div class="pagination-btn" v-show="selectOp">
        <ButtonStandard label="Delete 🗑" @click="toggleModal('D')" type-class="typeTwo" style="float: none"/>
      </div>
      <div class="pagination-btn" v-show="!selectOp" style="opacity: 0.3;">
        <ButtonStandard label="Delete 🗑" type-class="typeTwo" style="float: none"/>
      </div>
    </div>
    <div id="filter" style="display: flex; width: 40%">
      <div class="filter-btn">
        <ButtonStandard label="Filter 🔍" @click="toggleModal('F')"/>
      </div>
    </div>
  </div>
  <ModalComponent @close="toggleModal" :isOpen="isOpen" @save="save" :operation="operation" @del="del"
                  @applyFilter="applyFilter">
    <div class="modal-content">
      <h2 v-if="operation === 'C'">Create</h2>
      <h2 v-else-if="operation === 'E'">Edit</h2>
      <h2 v-else-if="operation === 'F'">Filter</h2>
      <h2 v-else>Delete</h2>
      <form v-if="operation !== 'D'">
        <OperationFields :fields="fields"/>
        <div v-if="from==='L'" class="input-container ic1">
          <select class="input" v-model="category" required>
            <option value="">Seleziona</option>
            <option v-for="item in categoryOp" :key="item" :value="item[2]">{{ item[0] }} - {{ item[1] }}
            </option>
          </select>
          <div class="cut"></div>
          <label for="category" class="placeholder">Category</label>
        </div>
        <div v-if="from==='C'" class="input-container ic1">
          <select class="input" v-model="relevance" required>
            <option value="">Seleziona</option>
            <option v-for="item in relevanceOp" :key="item" :value="item[2]">{{ item[0] }} - {{ item[1] }}
            </option>
          </select>
          <div class="cut"></div>
          <label for="relevance" class="placeholder">Relevance</label>
        </div>
      </form>
      <div v-else>
        Sei sicuro di voler eliminare il record selezionato?
      </div>
    </div>
  </ModalComponent>
</template>

<script>

import ButtonStandard from "@/components/standard/ButtonStandard";
import ModalComponent from "@/components/standard/ModalStandard";
import {onMounted, ref, watch} from 'vue';
import {getCatId, useCatStruct} from "@/composable/useCategory";
import {modOp, getModOp, getDataRow} from "@/composable/useForm";
import OperationFields from "@/components/OperationFields";
import {getRelId, useRelStruct} from "@/composable/useRelevance";
import {useToDelete, useToSave} from "@/composable/usePagination";

export default {
  name: "PaginationNav",
  components: {OperationFields, ModalComponent, ButtonStandard},
  props: {
    modOp: Boolean,
    from: String
  },
  emits: ["updateElement", "init_parent"],
  setup(props, {emit}) {
    const isOpen = ref(false);
    const operation = ref('C');
    const hideButton = ref(false);
    const fields = ref([]);

    const fromDate = ref('');
    const toDate = ref('');
    const fromAmount = ref('');
    const toAmount = ref('');
    const descriptionSearch = ref('');
    const categorySearch = ref('');

    const date = ref('');
    const amount = ref('');
    const description = ref('');
    const category = ref('');
    const categoryOp = ref([]);

    const fromTotal = ref('');
    const toTotal = ref('');
    const desCSearch = ref('');
    const relevanceSearch = ref('');
    const nameSearch = ref('');

    const nameC = ref('');
    const relevance = ref('');
    const relevanceOp = ref([]);

    const init = async () => {
      categoryOp.value = await useCatStruct(true);
      relevanceOp.value = await useRelStruct(true);
    }

    const selectOp = ref(false);
    selectOp.value = getModOp();

    let today = new Date();

    const manageFields = async (set = '') => {
      if (props.from === 'L') {
        if (set === 'F') {
          fields.value = [
            {
              "classStyle": "display: inline-block; width: 50%;",
              "reference": "fromDate",
              "type": "date",
              "modelValue": fromDate,
              "required": "",
              "label": "From Date"
            },
            {
              "classStyle": "display: inline-block; width: 50%;",
              "reference": "toDate",
              "type": "date",
              "modelValue": toDate,
              "required": "",
              "label": "To Date"
            },
            {
              "classStyle": "display: inline-block; width: 50%;",
              "reference": "fromValue",
              "type": "number",
              "modelValue": fromAmount,
              "required": "",
              "label": "From Amount"
            },
            {
              "classStyle": "display: inline-block; width: 50%;",
              "reference": "toValue",
              "type": "number",
              "modelValue": toAmount,
              "required": "",
              "label": "To Amount"
            },
            {
              "classStyle": "",
              "reference": "descriptionSearch",
              "type": "text",
              "modelValue": descriptionSearch,
              "required": "",
              "label": "Description"
            },
          ];
          category.value = categorySearch.value;
          return;
        }

        if (set === 'E') {
          let dataToSet = getDataRow();
          let dataToSetParse = dataToSet[0].split('/');
          let actual = new Date(dataToSetParse[2], dataToSetParse[1] - 1, dataToSetParse[0]);
          date.value = actual.getFullYear() + '-' + (actual.getMonth() + 1).toString().padStart(2, '0') + '-' + actual.getDate().toString().padStart(2, '0');
          amount.value = dataToSet[3];
          description.value = dataToSet[1];
          category.value = await getCatId(dataToSet[2]);
        } else {
          date.value = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
          amount.value = '';
          description.value = '';
          category.value = '';
        }
        fields.value = [
          {
            "classStyle": "display: inline-block; width: 50%;",
            "reference": "date",
            "type": "date",
            "modelValue": date,
            "required": "required",
            "label": "Date"
          },
          {
            "classStyle": "display: inline-block; width: 50%;",
            "reference": "amount",
            "type": "number",
            "modelValue": amount,
            "required": "required",
            "label": "Amount"
          },
          {
            "classStyle": "",
            "reference": "description",
            "type": "text",
            "modelValue": description,
            "required": "required",
            "label": "Description"
          },
        ];
      } else if (props.from === 'C') {
        if (set === 'F') {
          fields.value = [
            {
              "classStyle": "",
              "reference": "nameSearch",
              "type": "text",
              "modelValue": nameSearch,
              "required": "",
              "label": "Name"
            },
            {
              "classStyle": "",
              "reference": "desCSearch",
              "type": "text",
              "modelValue": desCSearch,
              "required": "",
              "label": "Description"
            },
            {
              "classStyle": "display: inline-block; width: 50%;",
              "reference": "fromTotal",
              "type": "number",
              "modelValue": fromTotal,
              "required": "",
              "label": "From Total"
            },
            {
              "classStyle": "display: inline-block; width: 50%;",
              "reference": "toTotal",
              "type": "number",
              "modelValue": toTotal,
              "required": "",
              "label": "To Total"
            },
          ];
          relevance.value = relevanceSearch.value;
          return;
        }
        fields.value = [];
        if (set === 'E') {
          let dataToSet = getDataRow();
          nameC.value = dataToSet[0];
          description.value = dataToSet[1];
          relevance.value = await getRelId(dataToSet[2]);
        } else {
          nameC.value = '';
          description.value = '';
          relevance.value = '';
        }
        fields.value.push({
          "classStyle": "",
          "reference": "nameC",
          "type": "text",
          "modelValue": nameC,
          "required": "required",
          "label": "Name"
        });
        fields.value.push({
          "classStyle": "",
          "reference": "description",
          "type": "text",
          "modelValue": description,
          "required": "required",
          "label": "Description"
        });
      }
    };

      const toggleModal = (op = '') => {
        manageFields(op);
        operation.value = op;
        hideButton.value = false;
        isOpen.value = !isOpen.value;
      };

      const save = async () => {
        let body = [];
        if (props.from === 'L') {
          body['date'] = date.value;
          body['category'] = category.value;
          body['amount'] = amount.value;
        }
        if (props.from === 'C') {
          body['name'] = nameC.value;
          body['relevance'] = relevance.value;
        }
        body['description'] = description.value;
        hideButton.value = true;
        if (await saveFile(body)) {
          await manageFields();
          isOpen.value = !isOpen.value;
          emit("updateElement");
        } else {
          alert('Compila tutti i campi.');
        }
      };

      const saveFile = async (data) => {
        let content;
        if (props.from === 'L') {
          if (data['date'] === '') {
            return false;
          }
          if (data['category'] === '') {
            return false;
          }
          if (data['amount'] === '') {
            return false;
          }
          content = {
            "amount": parseFloat(data['amount']),
            "description": data['description'],
            "date": data['date'],
            "category": data['category']
          };
        }
        if (props.from === 'C') {
          if (data['name'] === '') {
            return false;
          }
          if (data['relevance'] === '') {
            return false;
          }
          content = {
            "description": data['description'],
            "name": data['name'],
            "relevance": data['relevance']
          };
        }
        if (data['description'] === '') {
          return false;
        }

        let from = props.from === 'C' ? 'category' : 'list';
        let id = null;
        if (operation.value === 'E') {
          let dataToSet = getDataRow();
          id = dataToSet[4];
        }
        return useToSave(from, operation.value, content, id);
      };

      const del = async () => {
        let dataToSet = getDataRow();
        let id = dataToSet[4];
        let from = props.from === 'C' ? 'category' : 'list';
        if (props.from === 'C') {
          if (dataToSet[3] !== "0.00") {
            alert('Categoria valorizzata');
            return false;
          }
        }
        if (await useToDelete(from, id)) {
          isOpen.value = !isOpen.value;
          emit("updateElement");
        } else {
          alert("Error while deleting");
        }
      };

      watch(modOp, async (newV, oldV) => {
        if (newV !== oldV) {
          selectOp.value = getModOp();
        }
      });

      const applyFilter = () => {
        let filters = [];
        if (props.from === 'L') {
          categorySearch.value = category.value;
          filters = [
            fromDate.value.trim(),
            toDate.value.trim(),
            fromAmount.value.trim(),
            toAmount.value.trim(),
            descriptionSearch.value.trim(),
            categorySearch.value.trim()
          ];
        } else if (props.from === 'C') {
          relevanceSearch.value = relevance.value;
          filters = [
            nameSearch.value.trim(),
            desCSearch.value.trim(),
            relevanceSearch.value.trim(),
            fromTotal.value.trim(),
            toTotal.value.trim()
          ];
        }
        toggleModal();
        emit("updateElement", filters);
      }

    onMounted(() => {
      init().then(
          () => {
            emit("init_parent");
          }
      )
    });

    return {
      isOpen,
      date,
      amount,
      description,
      category,
      hideButton,
      categoryOp,
      operation,
        selectOp,
        fields,
        relevance,
        relevanceOp,
        del,
        toggleModal,
        save,
        applyFilter
      };
    }
  }
</script>

<style scoped>
  .pagination {
    color: var(--darkcyan);
    height: 5em;
    display: flex;
    margin: 0 auto;
    max-width: 960px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .filter-btn {
    text-align: right;
    margin: auto 0 0 auto;
  }
</style>
