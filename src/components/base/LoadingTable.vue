<template>
  <div>
    <table class="loadingTable">
      <thead>
      <tr>
        <!-- <th class="text-align-center" id="checkAll" style="min-width:40px;"> <input type="checkbox" @click="handleCheckedAll" :checked="employee.length==checkedEmployees.length"></th> -->
        <th class="text-align-center" id="checkAll" style="min-width: 40px">
          <!-- <BaseCheckBox :checkBody="isActiveCheckBox" /> -->
          
          <input type="checkbox">
        </th>

        <th class="text-align-left" style="min-width: 159px">{{Resource.table.employeeCode}}</th>
        <th style="min-width: 196px" class="text-align-left">
          Tên nhân viên
        </th>
        <th style="min-width: 126px" class="text-align-left">{{Resource.global.gender}}</th>
        <th style="min-width: 120px" class="text-align-center">{{Resource.global.dateOfBirth}}</th>
        <th style="min-width: 128px" class="text-align-left">
          {{Resource.global.identity}}
        </th>
        <th style="min-width: 119px" class="text-align-left">{{Resource.global.position}}</th>
        <th style="min-width: 215px" class="text-align-left">{{Resource.table.unit}}</th>
        <th style="min-width: 200px" class="text-align-left">{{Resource.table.bankNumber}}</th>
        <th style="min-width: 200px" class="text-align-left">
          {{Resource.table.bankName}}
        </th>
        <th style="min-width: 240px" class="text-align-left">
          {{Resource.table.bankBranch}}
        </th>
        <th style="min-width: 120px" class="text-align-left">{{Resource.table.function}}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
      <tr class="tblTr">
        <td class="td-1"><span></span></td>
        <td class="td-2"><span></span></td>
        <td class="td-3"><span></span></td>
        <td class="td-4"><span></span></td>
        <td class="td-5"><span></span></td>
        <td class="td-6"><span></span></td>
        <td class="td-7"><span></span></td>
        <td class="td-8"><span></span></td>
        <td class="td-9"><span></span></td>
        <td class="td-10"><span></span></td>
        <td class="td-11"><span></span></td>
        <td class="td-12"><span></span></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
import Resource from "../../Resource/Resource.js"
export default{
  name:"LoadingTable",
  data(){
    return{
      Resource
    }
  }
}
</script>
<style>
@keyframes moving-gradient {
  0% {
    background-position: -250px 0;
  }
  100% {
    background-position: 250px 0;
  }
}
.loadingTable {
  width: 100%;
}
.loadingTable .tblTr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.loadingTable .tblTr td {
  height: 50px;
  vertical-align: middle;
  padding: 8px;
}
.loadingTable .tblTr td span {
  display: block;
}
.loadingTable .tblTr td.td-1 {
  width: 20px;
}
.loadingTable .tblTr td.td-1 span {
  width: 20px;
  height: 20px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-2 {
  width: 100px;
}
.loadingTable .tblTr td.td-2 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100px;
  height: 20px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-3 {
  width: 400px;
}
.loadingTable .tblTr td.td-3 span {
  height: 12px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-4 {
  width: 400px;
}
.loadingTable .tblTr td.td-4 span {
  height: 12px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-5 {
  width: 100px;
}
.loadingTable .tblTr td.td-5 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-6 {
  width: 100px;
}
.loadingTable .tblTr td.td-6 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-7 {
  width: 100px;
}
.loadingTable .tblTr td.td-7 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-8 {
  width: 100px;
}
.loadingTable .tblTr td.td-8 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-9 {
  width: 100px;
}
.loadingTable .tblTr td.td-9 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-10 {
  width: 100px;
}
.loadingTable .tblTr td.td-10 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-11 {
  width: 100px;
}
.loadingTable .tblTr td.td-11 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.loadingTable .tblTr td.td-12 {
  width: 100px;
}
.loadingTable .tblTr td.td-12 span {
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

/*# sourceMappingURL=style.css.map */

</style>
