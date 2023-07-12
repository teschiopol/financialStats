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
        <div class="input-container ic1">
          <select class="input" v-model="category" required>
            <option value="">Seleziona</option>
            <option v-for="item in categoryOp" :key="item" :value="item[0]">{{ item[0] }} - {{ item[1].Description }}
            </option>
          </select>
          <div class="cut"></div>
          <label for="category" class="placeholder">Category</label>
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
  import {ref, watch} from 'vue';
  import {useCatStruct} from "@/composable/useCategory";
  import {modOp, getModOp, getDataRow} from "@/composable/useForm";
  import OperationFields from "@/components/OperationFields";
  export default {
    name: "PaginationNav",
    components: {OperationFields, ModalComponent, ButtonStandard},
    props: {
      modOp: Boolean
    },
    emits: ["updateElement"],
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

      const manageFields = (set = '') => {
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
          category.value = dataToSet[2];
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
      };

      const toggleModal = (op = '') => {
        manageFields(op);
        operation.value = op;
        hideButton.value = false;
        isOpen.value = !isOpen.value;
      };

      const save = async () => {
        let body = [];
        body['date'] = date.value;
        body['category'] = category.value;
        body['amount'] = amount.value;
        body['description'] = description.value;
        hideButton.value = true;
        if(await saveFile(body)){
          manageFields();
          isOpen.value = !isOpen.value;
          emit("updateElement");
        }else{
          alert('Compila tutti i campi.');
        }
      };

      let date = ref('');
      let amount = ref('');
      let description = ref('');
      let category = ref('');
      let categoryOp = ref([]);

      const saveFile = async (data) => {
        if(data['date'] === ''){
          return false;
        }
        if(data['category'] === ''){
          return false;
        }
        if(data['amount'] === ''){
          return false;
        }
        if(data['description'] === ''){
          return false;
        }

        let list = localStorage.getItem('list');
        let maxIdx = 1;
        list = JSON.parse(list);
        if(list === null){
          list = [];
        }else{
          maxIdx = list[list.length-1].Index;
          maxIdx += 1;
        }

        if (operation.value === 'C') {
          list.push({
            "Date": data['date'],
            "Description": data['description'],
            "Category": data['category'],
            "Value": parseFloat(data['amount']),
            "Index": maxIdx
          });
        }else{
          let dataToSet = getDataRow();
          let key = list.findIndex((element) => element['Index'] === dataToSet[4]);
          list[key] = {
            "Date": data['date'],
            "Description": data['description'],
            "Category": data['category'],
            "Value": parseFloat(data['amount']),
            "Index": dataToSet[4]
          };
        }
        localStorage.setItem('list', JSON.stringify(list));
        return true;
      };

      const del = async () => {
        let list = localStorage.getItem('list');
        list = JSON.parse(list);

        let dataToSet = getDataRow();
        let key = list.findIndex((element) => element['Index'] === dataToSet[4]);
        list.splice(key,1);

        localStorage.setItem('list', JSON.stringify(list));
        isOpen.value = !isOpen.value;
        emit("updateElement");
      };

      let today = new Date();
      categoryOp.value = useCatStruct(true);

      const selectOp = ref(false);
      selectOp.value = getModOp();

      watch(modOp, async (newV, oldV) => {
        if (newV !== oldV) {
          selectOp.value = getModOp();
        }
      });

      const applyFilter = () => {
        categorySearch.value = category.value;
        toggleModal();
        let filters = [
          fromDate.value.trim(),
          toDate.value.trim(),
          fromAmount.value.trim(),
          toAmount.value.trim(),
          descriptionSearch.value.trim(),
          categorySearch.value.trim()
        ];
        emit("updateElement", filters);
      }

      return {
        isOpen, date, amount, description, category, hideButton, categoryOp, operation, selectOp, fields,
        del, toggleModal, save, applyFilter
      };
    }
  }
</script>

<style scoped>
  .pagination {
    color: var(--darkcyan);
    height: 6em;
    display: flex;
    margin: 1em auto 0;
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
