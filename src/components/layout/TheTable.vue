<template>
  <div class="paddingTest">
    <!-- <LoadingMisa v-if="true" /> -->
    <table class="table">
      <thead>
        <tr>
          <!-- <th class="text-align-center" id="checkAll" style="min-width:40px;"> <input type="checkbox" @click="handleCheckedAll" :checked="employee.length==checkedEmployees.length"></th> -->
          <th class="text-align-center" id="checkAll" style="min-width: 40px">
            <!-- <BaseCheckBox :checkBody="isActiveCheckBox" /> -->

            <input
              type="checkbox"
              class="checkbox"
              @click="handleCheckedAll"
              :checked="employee?.length == checkedEmployees?.length"
            />
          </th>

          <th class="text-align-left" style="min-width: 159px">{{Resource.table.employeeCode}}</th>
          <th style="min-width: 196px" class="text-align-left">
            {{Resource.table.fullName}}
          </th>
          <th style="min-width: 126px" class="text-align-left">{{Resource.global.gender}}</th>
          <th style="min-width: 120px" class="text-align-center">{{Resource.global.dateOfBirth}}</th>
          <th style="min-width: 128px" class="text-align-left">
            <BaseToolTip :name="nameToolTip" :content="nameContentToolTip" />
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
      <tbody v-if="isShowTbodyLoading">
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
      <tbody v-if="!isShowTbodyLoading">
        <tr
          @dblclick="dblClick(emp)" 
          @click="btnClick"
          v-for="(emp, index) in employee"
          :key="index"
          :class="{ selectItem: checkedEmployees.includes(emp.EmployeeID) }"
        >
          <td
            @dblclick="stopPropagation"
            :class="{ selectItem: checkedEmployees.includes(emp.EmployeeID) }"
            class="text-align-center"
          >
            <input
              type="checkbox"
              class="checkbox"
              @click="handleCheckedEmp(emp.EmployeeID)"
              :checked="checkedEmployees.includes(emp.EmployeeID)"
            />
            <!-- <BaseCheckBox /> -->
          </td>
          <td class="text-align-left">{{ emp.EmployeeCode }}</td>
          <td>{{ emp.EmployeeName }}</td>
          <td>{{ customGender(emp.Gender) }}</td>
          <td class="text-align-center">{{ customDate(emp.DateOfBirth) }}</td>
          <td>{{ emp.IdentityNumber }}</td>
          <td style="min-width: 150px">{{ emp.PositionName }}</td>
          <td>{{ emp.UnitName }}</td>
          <td>{{ emp.BankNumber }}</td>
          <td>{{ emp.BranchBank }}</td>
          <td>{{ emp.BankName }}</td>
          <td
            :class="{'selectItem': checkedEmployees.includes(emp.EmployeeID)}"
            @dblclick="stopPropagation"
            class="text-align-center flex-center updateForm"
            style="color: #0075c0; font-weight: 600"
          >
            <span @click="btnUpdate(emp)">{{Resource.table.update}}</span>
            <div class="dropdown-list">
              <div
                @click="(e) => showDropdown(e, emp)"
                class="icon mi-16 icon-arrow-up--blue"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="notData" v-if="(!this.employee?.length || 0)&&(this.isShowNotData)">
      <img
        data-v-0ab5406d=""
        src="https://actappg2.misacdn.net/img/bg_report_nodata.76e50bd8.svg"
        class="nodata-img"
      />
      <p>{{Resource.table.notData}}</p>
    </div>
    <DropDown
      @closeDropdown="closeDropdown"
      @isShowPopUp="() => (isShowPopUp = true)"
      v-show="isShow"
      id="dropDownUpdate"
    />
    <PopUpMISA v-show="isShowPopUp" @closePopUp="() => (isShowPopUp = false)" />
  </div>
</template>
<script>
import Resource from "../../Resource/Resource.js"
import DropDown from "../base/DropdownUpdate.vue";
import PopUpMISA from "../base/PopUp.vue";
import EnumMISA from "../../enum/enum.js";
import userService from "../../baseAxios/user-service.js";
import BaseToolTip from "../base/BaseToolTip.vue";
export default {
  props: ["formSearch"],
  name: "TheTable",
  components: {
    DropDown,
    PopUpMISA,
    BaseToolTip,
  },

  /** Hook g???i data t??? api
   * Author: ????o V??n H??ng (9/8/2022)
   */
  created() {
    this.callAPI(this.pageSize, this.pageNumber, this.formSearch);
    // this.callAPI()
  },
  data() {
    return {
      employee: [],
      isActive: false,
      isActiveCheckBox: false,
      isShow: false,
      isShowTbodyLoading: false,
      isShowPopUp: false,
      isNumber: Number,
      totalRecord: Number,
      totalPage: Number,
      search: "",
      pageSize: 10,
      pageNumber: 1,
      checkedEmployees: [],
      nameToolTip: "S??? CMND",
      nameContentToolTip: " S??? ch???ng minh nh??n d??n",
      isShowbtnDelete: true,
      isShowNotData: false,
      Resource
    };
  },
  watch: {
    /**
     * Theo gi??i s??? thay ?????i c???a checkedEmployees
     * n???u thay ?????i th?? emit t???i employeeList
     * Author: ????o V??n H??ng
     */
    checkedEmployees: {
      handler: function (val) {
        this.$emit("listEmployeeId", val);
      },
      deep: true,
    },

    /**
     * Khi form search thay ?????i th?? th???c hi???n t??m ki???m
     * Author: ????o V??n H??ng (23/8/2022)
     */
    formSearch: function (value) {
      // console.log(value)
      this.callAPI(this.pageSize, this.pageNumber, value);
    },
    
    /**
     * Theo d??i s??? thay ?????i c???a pageNumber
     * N???u thay ?????i th?? ph??n trang
     * Author: ????o V??n H??ng (10/9/2022)
     */
    pageNumber: function (value) {
      this.callAPI(this.pageSize, value, this.formSearch);
    },

    /**Theo d??i s??? thay ?????i c???a pageSize
     * Author: ????o V??n H??ng (10/9/2022)
     */
    pageSize: function (value) {
      this.callAPI(value, this.pageNumber, this.formSearch);
    },
  },
  methods: {
    /**
     * H??m g???i API
     * @param {*} pageSize
     * @param {*} pageNumber
     * @param {*} search
     * Author: ????o V??n H??ng (30/8/2022)
     */
    async callAPI(pageSize, pageNumber, search = "") {
      try {
        this.isShowTbodyLoading = true;
        userService.getPagging(pageSize, pageNumber, search).then((data) => {
          this.employee = data.data;
          this.totalRecord = data.totalWithFilter;
          this.isShowTbodyLoading = false;
        });
      } catch (error) {
        this.isShowTbodyLoading = false;
        console.log(error);
      }
    },

    /**H??m custom l???i ng??y th??ng t??? api ????? convert v??? table
     * Author: ????o V??n H??ng
     * @param {} dob: nh???n gi?? tr??? Date t??? api
     */
    customDate(dob) {
      try {
        dob = new Date(dob);
        let date = dob.getDate();
        let month = dob.getMonth() + 1;
        let year = dob.getFullYear();
        return `${date < 10 ? `0${date}` : `${date}`}/${
          month < 10 ? `0${month}` : `${month}`
        }/${year}`;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Convert smallint sang nam, n???
     * @param {*} Gender 
     * 1= nam. 2= n???, 0 others
     */
    customGender(Gender) {
      if (Gender == EnumMISA.Gender.Male) {
        Gender = "Nam";
      } else if (Gender == EnumMISA.Gender.Female) {
        Gender = "N???";
      } else {
        Gender = "";
      }
      return Gender;
    },
    /**
     * H??m ng??n ch???n s??? ki???n double click s??? hiuserServicepos???n form
     * Author: ????o V??n H??ng (9/8/2022)
     * @param {} event
     */
    stopPropagation(event) {
      event.stopPropagation();
    },

    /**
     * H??m khi ta check t???ng nh??n vi??n m???t
     * @param {} EmployeeId: Id nh??n vi??n
     */
    handleCheckedEmp(EmployeeId) {
      try {
        if (!this.checkedEmployees.includes(EmployeeId)) {
          this.checkedEmployees.push(EmployeeId);
        } else {
          this.checkedEmployees.splice(
            this.checkedEmployees.indexOf(EmployeeId),
            1
          );
        }
        if (this.checkedEmployees.length != this.employee.length) {
          this.isActive = false;
        } else {
          this.isActive = true;
        }
      } catch (error) {
        console.log(error);
      }
    },

    /*
     * H??m check t???t c??? ho???c hu??? t???t c???
     * Author: ????o V??n H??ng (10/8/2022)
     */
    handleCheckedAll() {
      try {
        this.isActive = !this.isActive;
        if (this.isActive) {
          this.employee.forEach((item) => {
            if (!this.checkedEmployees.includes(item.EmployeeID)) {
              this.checkedEmployees.push(item.EmployeeID);
              this.isShowbtnDelete = true;
              // this.$emit("showDelete", this.isShowbtnDelete)
            }
          });
        } else {
          this.checkedEmployees = [];
          this.isShowbtnDelete = false;
        }
        this.$emit("showDelete", this.isShowbtnDelete);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     *H??m nh???n d??? li???u t??? components EmployeeList
     * Author: ????o V??n H??ng (10/8/2022)
     * @param emp : nh???n gi?? tr??? 1 object c???a m???ng employee t??? api
     */
    dblClick(emp) {
      this.$emit("btnAddClick");
      this.emitter.emit("openForm", emp);
    },

    /**
     * H??m khi click v??o s???a s??? hi???n form s???a
     * Author: ????o V??n H??ng (17/8/2022)
     * @param {*} emp: nh???n ?????i s??? l?? 1 object ch???a th??ng tin nh??n vi??n
     */
    btnUpdate(emp) {
      this.$emit("btnAddClick");
      this.emitter.emit("openForm", emp);
    },

    /**
     * H??m hi???n dropdown
     * Author: ????o V??n H??ng (17/8/2022)
     * @param {*} e: tham s??? l?? event
     * @param {*} emp: nh???n ?????i s??? l?? 1 object ch???a th??ng tin nh??n vi??n
     */
    showDropdown(e, emp) {
      try {
        const cords = e.target.getBoundingClientRect();
        let { top, height, left } = cords;
        if (this.isShow == false) {
          var x = document.getElementById("dropDownUpdate");
          x.style.left = `${left - 90}px`;
          x.style.top = `${top + height + 5}px`;
        }
        this.emitter.emit("getEmployee", emp);
        this.isShow = !this.isShow;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Emit nh???n s??? ki???n click xo?? s??? ???n dropdown
     * Author: ????o V??n H??ng (17/8/2022)
     */
    closeDropdown() {
      this.isShow = false;
    },
  },
  mounted() {

    /**
     * L???ng nghe v?? nh???n d??? li???u t??? employeeList
     * Author: ????o V??n H??ng
     */
    this.emitter.on("listEmployeeData", ()=>{
      this.checkedEmployees = []
    })

    /**
     * Khi x??? l?? th??m, xo?? hay s???a th?? loading v?? get api l???i trang
     * Author: ????o V??n H??ng (11/8/2022)
     */
    this.emitter.on("callAPI", () => {
      this.callAPI(this.pageSize, this.pageNumber, this.formSearch);
    }),
      // this.emitter.on("DataPagging", (data)=>{
      //     this.isShowLoading = true
      //     this.employee = data
      //     this.isShowLoading = false
      // }),

      /**
       * H??m nh???n s??? trang (currentPage) tr??n m??n h??nh
       * @param {*} pageNumber: S??? trang
       * Author: ????o V??n H??ng (27/8/2022)
       */
      this.emitter.on("getCurentPage", (pageNumber) => {
        this.pageNumber = pageNumber;
      });
      
    /**
     * H??m nh???n s??? b???n ghi hi???n tr??n m??n h??nh
     *  @param {*} pageSize: S??? b???n ghi
     * Author: ????o V??n H??ng
     */
    this.emitter.on("getPageSize", (pageSize) => {
      this.pageSize = pageSize;
    });
  },

  updated() {
    this.emitter.emit("getData", this.employee);
    this.emitter.emit("getPageNumber", this.totalRecord);
  },
};
</script>
<style scoped>
.checkbox {
  position: relative;
  top: 2px;
  left: 7px;
  margin: 0 1rem 0 0;
  cursor: pointer;
}
.checkbox:before {
  transition: all 0.1s ease-in;
  content: "";
  position: absolute;
  left: 0;
  top: -2px;
  z-index: 2;
  width: 14px;
  height: 1rem;
}
.checkbox:checked:before {
  transform: rotate(-45deg);
  height: 0.5rem;
  border: 2px solid #555353;
  border-color: #2ca01c;
  border-top-style: none;
  border-right-style: none;
}
.checkbox:after {
  content: "";
  position: absolute;
  top: rem(-2);
  left: -2px;
  top: -4px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 3px;
  cursor: pointer;
}
.icon-arrow-up--blue {
  background-position: -896px -359px;
  margin-left: 5px;
}
.dropdown-list {
  position: relative;
}
.border {
  border: 1px solid red;
}
.notData {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  background: #fff;
  top: 169px;
  left: 168px;
  width: 1139px;
  z-index: 1000;
  height: 200px;
}
.selectItem {
  background: #e5f3ff !important;
}

/* .paddingTest{
    overflow: auto;
} */

.table {
  border-collapse: separate;
  border-spacing: 0px;
  overflow: auto;
  background-color: white !important;
  width: 100%;
  border-color: grey;
}
.table tr td,
th {
  padding: 0 10px;
  border-bottom: 1px solid #c7c7c7;
  border-right: 1px dotted #c7c7c7;
  /* border: 1px ; */
  box-sizing: border-box;
}
.table tbody tr td {
  font-family: notosans;
  font-size: 13px;
  height: 44px;
  min-height: 44px;
}
.table th {
  height: 34px;
  min-height: 34px;
  text-transform: uppercase;
  font-size: 13px;
}
.table tbody tr:hover td {
  background: #e5f3ff !important;
  cursor: pointer;
}

.table thead tr {
  position: sticky;
  top: 0;
  z-index: 8;
  background: #e5e8ec;
}
.table tbody tr td:first-child {
  position: sticky;
  left: 0;
  background: white;
  z-index: 6;
}
.table thead tr th:first-child {
  position: sticky;
  left: 0;
  z-index: 7;
  background-color: rgb(224, 233, 228);
}

.table thead tr th:last-child {
  position: sticky;
  right: 0;
  border-left: 1px dotted #c7c7c7;
  background-color: rgb(224, 233, 228);
  z-index: 7;
}
.table tbody tr td:last-child {
  position: sticky;
  right: 0;
  border-left: 1px solid #c7c7c7;
  background-color: #fff;
  z-index: 2;
}

/**loading table */
@keyframes moving-gradient {
  0% {
    background-position: -250px 0;
  }
  100% {
    background-position: 250px 0;
  }
}

.tblTr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.tblTr td {
  height: 50px;
  vertical-align: middle;
  padding: 8px;
}
.tblTr td span {
  display: block;
}
.tblTr td.td-1 {
  width: 20px;
}
.tblTr td.td-1 span {
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
.tblTr td.td-2 {
  width: 100px;
}
.tblTr td.td-2 span {
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
.tblTr td.td-3 {
  width: 400px;
}
.tblTr td.td-3 span {
  height: 12px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.tblTr td.td-4 {
  width: 400px;
}
.tblTr td.td-4 span {
  height: 12px;
  background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
  background-size: 500px 100px;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.tblTr td.td-5 {
  width: 100px;
}
.tblTr td.td-5 span {
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
.tblTr td.td-6 {
  width: 100px;
}
.tblTr td.td-6 span {
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
.tblTr td.td-7 {
  width: 100px;
}
.tblTr td.td-7 span {
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
.tblTr td.td-8 {
  width: 100px;
}
.tblTr td.td-8 span {
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
.tblTr td.td-9 {
  width: 100px;
}
.tblTr td.td-9 span {
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
.tblTr td.td-10 {
  width: 100px;
}
.tblTr td.td-10 span {
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
.tblTr td.td-11 {
  width: 100px;
}
.tblTr td.td-11 span {
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
.tblTr td.td-12 {
  width: 100px;
}
.tblTr td.td-12 span {
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
