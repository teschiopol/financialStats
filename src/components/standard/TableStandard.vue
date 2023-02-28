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
        <td v-for="field in head" :key='field["Name"]'>{{item[field["Name"]]}}</td>
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

          if (el["Order"] === '↑') {
            el["Order"] = '↓';
          } else {
            el["Order"] = '↑';
          }

  // TODO: Sort real
        }
      };

      return {sortTable};
    }
  }
</script>

<style scoped>
  table{
    margin: 40px auto 0;
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
</style>
