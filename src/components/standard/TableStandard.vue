<template>
  <table id="tableComponent" :class="customClass">
    <thead>
      <tr>
        <th v-for="field in head" :key='field["Name"]' @click="sortTable(field)">
          {{ field["Name"].toUpperCase() }} <span v-if="field['Sort']">{{ field["Order"] }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredList" :key='item' :id="item['id']" @click="selectRow(item['id'])">
        <td v-for="field in head" :key='field["Name"]' :class="alignType(item[field['Name']])">
          {{ cast(item[field["Name"]]) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script >
  import {setModOp, setDataRow} from "@/composable/useForm";
  export default {
    name: "TableStandard",
    props:{
      filteredList:{
        type: Array,
      },
      head:{
        type: Array,
      },
      customClass: {
        type: String
      }
    },
    setup(props){

      const sortTable = (el) => {
        if(el["Sort"]) {
          let ar = props.head;
          ar.forEach(
              (element) => {
                if (element["Name"] !== el["Name"]){
                  element["Order"] = "";
                }
              }
          )

          let data = props.filteredList;

          if (el["Order"] === '↑') {
            el["Order"] = '↓';
            data.sort((a,b) => {
              if(typeof a[el['Name']] === 'string'){
                return b[el['Name']].localeCompare(a[el['Name']]);
              }else{
                return b[el['Name']] - a[el['Name']];
              }
            });
          } else {
            el["Order"] = '↑';
            data.sort((a,b) => {
              if(typeof a[el['Name']] === 'string') {
                return (a[el['Name']].localeCompare(b[el['Name']]));
              }else{
                return a[el['Name']] - b[el['Name']];
              }
            });
          }
        }
      };

      const alignType = (type) =>{
        if (typeof type === 'number'){
          return 'align';
        }
        return '';
      };

      const cast = (value) => {
        if(typeof value === 'number'){
          return (Math.round(value * 100) / 100).toFixed(2);
        }
        const regex = /^\d{4}-\d{2}-\d{2}$/g;
        if(value.match(regex) !== null){ // it's a date
          let split = value.split('-');
          return split[2] + '/' + split[1] +  '/' + split[0];
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
      };

      const selectRow = (idx) => {
        let tBody = document.getElementsByTagName('tbody')[0];
        let tableRow = tBody.getElementsByTagName('tr');

        let actualSelect = document.getElementById(idx);

        if(actualSelect !== null) {
          if (actualSelect.className.includes('select')) {
            actualSelect.className = actualSelect.className.replaceAll('select', '');
            setModOp(false);
            return;
          }

          for (let t = 0; t < tableRow.length; t++) {
            tableRow[t].className = tableRow[t].className.replaceAll('select', '');
          }

          if (actualSelect.className === '') {
            actualSelect.className = "select";
          } else {
            actualSelect.className += "select";
          }

          let dataRow = [];
          actualSelect.childNodes.forEach(el => {
            if(typeof el.innerText !== 'undefined'){
              dataRow.push(el.innerText);
            }
          });
          dataRow.push(idx);

          setModOp(true);
          setDataRow(dataRow);
        }
      };

      return {alignType, sortTable, cast, selectRow};
    }
  }
</script>

<style scoped>
  table{
    margin: 2em auto 0;
    min-width: 600px;
  }

  td, th {
    border: 1px solid var(--white);
    padding: 8px;
    min-width: 200px;
  }

  tr:nth-child(even){background-color: var(--suswhite)}

  tr:hover {
     background-color: var(--susblack);
     color: var(--aliceblue);
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--suscyan);
    color: var(--aliceblue);
  }

  .align{
    text-align: right;
  }

  .extend tbody{
    overflow-y: scroll;
    max-height: 60vh;
  }

  .extend thead,
  .extend tbody{
    display: block;
  }

  .select{
    background-color: var(--suscyan) !important;
    color: var(--aliceblue);
  }
</style>
