<template>
  <table id="tableComponent">
    <thead>
      <tr>
        <th v-for="field in head" :key='field["Name"]' @click="sortTable(field)" >
          {{field["Name"]}}  <span v-if="field['Sort']">{{field["Order"]}}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredList" :key='item'>
        <td v-for="field in head" :key='field["Name"]' :class="alignType(item[field['Name']])">{{item[field["Name"]]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script >

  export default {
    name: "TableStandard",
    props:{
      filteredList:{
        type: Array,
      },
      head:{
        type: Array,
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
      }

      return {alignType, sortTable};
    }
  }
</script>

<style scoped>
  table{
    margin: 1em auto 0;
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
</style>
