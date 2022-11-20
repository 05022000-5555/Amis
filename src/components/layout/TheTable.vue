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

  /** Hook gọi data từ api
   * Author: Đào Văn Hùng (9/8/2022)
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
      nameToolTip: "Số CMND",
      nameContentToolTip: " Số chứng minh nhân dân",
      isShowbtnDelete: true,
      isShowNotData: false,
      Resource
    };
  },
  watch: {
    /**
     * Theo giõi sự thay đổi của checkedEmployees
     * nếu thay đổi thì emit tới employeeList
     * Author: Đào Văn Hùng
     */
    checkedEmployees: {
      handler: function (val) {
        this.$emit("listEmployeeId", val);
      },
      deep: true,
    },

    /**
     * Khi form search thay đổi thì thực hiện tìm kiếm
     * Author: Đào Văn Hùng (23/8/2022)
     */
    formSearch: function (value) {
      // console.log(value)
      this.callAPI(this.pageSize, this.pageNumber, value);
    },
    
    /**
     * Theo dõi sự thay đổi của pageNumber
     * Nếu thay đổi thì phân trang
     * Author: Đào Văn Hùng (10/9/2022)
     */
    pageNumber: function (value) {
      this.callAPI(this.pageSize, value, this.formSearch);
    },

    /**Theo dõi sự thay đổi của pageSize
     * Author: Đào Văn Hùng (10/9/2022)
     */
    pageSize: function (value) {
      this.callAPI(value, this.pageNumber, this.formSearch);
    },
  },
  methods: {
    /**
     * Hàm gọi API
     * @param {*} pageSize
     * @param {*} pageNumber
     * @param {*} search
     * Author: Đào Văn Hùng (30/8/2022)
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

    /**Hàm custom lại ngày tháng từ api để convert về table
     * Author: Đào Văn Hùng
     * @param {} dob: nhận giá trị Date từ api
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
     * Convert smallint sang nam, nữ
     * @param {*} Gender 
     * 1= nam. 2= nữ, 0 others
     */
    customGender(Gender) {
      if (Gender == EnumMISA.Gender.Male) {
        Gender = "Nam";
      } else if (Gender == EnumMISA.Gender.Female) {
        Gender = "Nữ";
      } else {
        Gender = "";
      }
      return Gender;
    },
    /**
     * Hàm ngăn chặn sự kiện double click sẽ hiuserServiceposện form
     * Author: Đào Văn Hùng (9/8/2022)
     * @param {} event
     */
    stopPropagation(event) {
      event.stopPropagation();
    },

    /**
     * Hàm khi ta check từng nhân viên một
     * @param {} EmployeeId: Id nhân viên
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
     * Hàm check tất cả hoặc huỷ tất cả
     * Author: Đào Văn Hùng (10/8/2022)
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
     *Hàm nhận dữ liệu từ components EmployeeList
     * Author: Đào Văn Hùng (10/8/2022)
     * @param emp : nhận giá trị 1 object của mảng employee từ api
     */
    dblClick(emp) {
      this.$emit("btnAddClick");
      this.emitter.emit("openForm", emp);
    },

    /**
     * Hàm khi click vào sửa sẽ hiện form sửa
     * Author: Đào Văn Hùng (17/8/2022)
     * @param {*} emp: nhận đối số là 1 object chứa thông tin nhân viên
     */
    btnUpdate(emp) {
      this.$emit("btnAddClick");
      this.emitter.emit("openForm", emp);
    },

    /**
     * Hàm hiện dropdown
     * Author: Đào Văn Hùng (17/8/2022)
     * @param {*} e: tham số là event
     * @param {*} emp: nhận đối số là 1 object chứa thông tin nhân viên
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
     * Emit nhận sự kiện click xoá sẽ ẩn dropdown
     * Author: Đào Văn Hùng (17/8/2022)
     */
    closeDropdown() {
      this.isShow = false;
    },
  },
  mounted() {

    /**
     * Lắng nghe và nhận dữ liệu từ employeeList
     * Author: Đào Văn Hùng
     */
    this.emitter.on("listEmployeeData", ()=>{
      this.checkedEmployees = []
    })

    /**
     * Khi xử lí thêm, xoá hay sửa thì loading và get api lại trang
     * Author: Đào Văn Hùng (11/8/2022)
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
       * Hàm nhận số trang (currentPage) trên màn hình
       * @param {*} pageNumber: Số trang
       * Author: Đào Văn Hùng (27/8/2022)
       */
      this.emitter.on("getCurentPage", (pageNumber) => {
        this.pageNumber = pageNumber;
      });
      
    /**
     * Hàm nhận số bản ghi hiện trên màn hình
     *  @param {*} pageSize: Số bản ghi
     * Author: Đào Văn Hùng
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
