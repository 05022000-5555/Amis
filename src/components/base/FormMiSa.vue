<template>
  <div class="modal" v-if="isShowDialog">
    <form class="form-add" v-on:submit.prevent="onSubmit">
      <div class="form-box">
        <div class="info-emp flex align-center gap-25">
          <h2>{{ Resource.form.inforEmployee }}</h2>
          <div class="checkboxIs flex">
            <div class="isCustomer flex align-center gap-15">
              <BaseCheckBox />
              <label for="isCustomer">{{ Resource.form.isCustomer }}</label>
            </div>
            <div class="isProvider flex align-center gap-15">
              <BaseCheckBox />
              <label for="isProvider">{{ Resource.form.isSupplier }}</label>
            </div>
          </div>
        </div>
        <div class="row1 gap-25 flex">
          <div class="emp w-50">
            <div class="row1-left gap-8 flex">
              <div class="title w-40">
                <p>{{ Resource.form.code }} <strong>*</strong></p>
                <input
                  v-model="employee.EmployeeCode"
                  ref="txtEmployeeCode"
                  type="text"
                  @change="changeInput(1)"
                />
              </div>
              <div class="title w-60">
                <p class="flex startt">
                  {{ Resource.form.name }}&nbsp;<strong>*</strong>
                </p>
                <input
                  ref="txtFullName"
                  type="text"
                  v-model="employee.EmployeeName"
                  @change="changeInput(2)"
                />
              </div>
            </div>
            <div class="row1-left">
              <div class="title w-100">
                <p class="flex startt" ref="unit">
                  {{ Resource.form.unit }}&nbsp;<strong>*</strong>
                </p>
                <MSCombobox
                  :url="'https://localhost:44388/api/Units'"
                  :propValue="'UnitID'"
                  :propText="'UnitName'"
                  :checkError="checkError"
                  @getValue="getUnitName"
                  :valueUnit="passUnitName"
                />
                <!-- <input type="text"> -->
              </div>
            </div>
            <div class="row1-left">
              <div class="title w-100">
                <p>{{ Resource.global.position }}</p>
                <input v-model="employee.PositionName" type="text" />
              </div>
            </div>
          </div>
          <div class="emp2 w-50">
            <div class="row1-left gap-15 flex">
              <div class="title w-40">
                <p>{{ Resource.global.dateOfBirth }}</p>

                <input
                  type="date"
                  v-model="employee.DateOfBirth"
                  data-date-format="MM DD YYYY"
                />
              </div>
              <div class="title w-60">
                <p style="margin-bottom: 5px">{{ Resource.global.gender }}</p>
                <div class="flex-aligin-center selectGender">
                  <div class="radioGender flex-aligin-center">
                    <input
                      id="male"
                      type="radio"
                      name="foo"
                      value="1"
                      checked
                      v-model="employee.Gender"
                    />
                    <label for="male">{{ Resource.global.male }}</label>
                  </div>
                  <div class="radioGender flex-aligin-center">
                    <input
                      id="female"
                      name="foo"
                      type="radio"
                      value="0"
                      v-model="employee.Gender"
                    />
                    <label for="female">{{ Resource.global.female }}</label>
                  </div>
                  <div class="radioGender flex-aligin-center">
                    <input
                      id="others"
                      type="radio"
                      value="2"
                      v-model="employee.Gender"
                      name="foo"
                    />
                    <label for="others">{{ Resource.form.others }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row1-left flex gap-8">
              <div class="title w-60">
                <BaseToolTip
                  :name="toolTip.nameIdentity"
                  :content="toolTip.contentIdentity"
                  :style="true"
                />
                <!-- <p class="flex startt" title="S??? ch???ng minh nh??n d??n">
                  S??? CMND
                </p> -->
                <input
                  v-model="employee.IdentityNumber"
                  ref="txtIdentityNumber"
                  @change="changeInput(3)"
                  type="text"
                />
              </div>
              <div class="title w-40">
                <p class="flex startt">{{ Resource.form.identityDate }}</p>
                <input
                  type="date"
                  v-model="employee.IdentityDate"
                  data-date-format="MM DD YYYY"
                />
              </div>
            </div>
            <div class="row1-left">
              <div class="title w-100">
                <p>{{ Resource.form.identityPlace }}</p>
                <input type="text" v-model="employee.IsualBy" />
              </div>
            </div>
          </div>
        </div>
        <div class="title form-address w-100">
          <p>{{ Resource.form.address }}</p>
          <input type="text" v-model="employee.Address" />
        </div>
        <div class="row-end">
          <div class="row-end-top w-70 gap-8 flex">
            <div class="title">
              <BaseToolTip
                :name="toolTip.mobilePhone"
                :content="toolTip.contentMobilePhone"
                :style="true"
              />
              <!-- <p>??T di ?????ng</p> -->
              <input type="text" v-model="employee.PhoneNumber" />
            </div>
            <div class="title">
              <BaseToolTip
                :name="toolTip.landlinePhone"
                :content="toolTip.contentLandlinePhone"
                :style="true"
              />
              <input type="text" v-model="employee.CellPhoneNumber" />
            </div>
            <div class="title">
              <p>{{ Resource.form.email }}</p>
              <input type="text" v-model="employee.Email" />
            </div>
          </div>
          <div class="row-end-top w-70 gap-8 flex">
            <div class="title">
              <p>{{ Resource.form.bankNumber }}</p>
              <input type="text" v-model="employee.BankNumber" />
            </div>
            <div class="title">
              <p>{{ Resource.form.bankName }}</p>
              <input type="text" v-model="employee.BankName" />
            </div>
            <div class="title">
              <p>{{ Resource.form.branch }}</p>
              <input type="text" v-model="employee.BranchBank" />
            </div>
          </div>
        </div>
      </div>
      <div class="form-footer flex">
        <div class="">
          <ButtonMiSa
            v-on:click.stop="closeForm"
            :name="button.cancel"
            :class="{ buttonColor: isActive, btnCancel: !isActive }"
            class="btnCancel"
          />
        </div>
        <div class="save flex gap-15">
          <ButtonMiSa
            @click="saves"
            :name="button.save"
            :class="{ buttonColor: isActive, btnSave: !isActive }"
          />
          <ButtonMiSa
            @click="saveAndAdds"
            :name="button.saveAndAdd"
            :class="{ buttonColor: !isActive }"
          />
        </div>
      </div>
      <div class="icon-form flex gap-8">
        <BaseToolTipIcon
          :icon="toolTip.iconHelp"
          :content="toolTip.contentHelp"
        />
        <BaseToolTipIcon
          @click="closeForm"
          :icon="toolTip.iconClose"
          :content="toolTip.contentClose"
        />
        <!-- <div @click="closeForm" class="mi mi-24 mi-close"></div> -->
      </div>
    </form>
    <PopUpMISA
      v-if="isShowPopUp"
      :isShowError="isShowError"
      :textError="textError"
      @closePopUpError="() => (isShowPopUp = false)"
    />
  </div>
</template>
<script>
import EnumMISA from "../../enum/enum.js";
import PopUpMISA from "./PopUp.vue";
import ButtonMiSa from "./BaseButton.vue";
import MSCombobox from "./Combobox.vue";
import axios from "axios";
import userService from "../../baseAxios/user-service.js";
import BaseCheckBox from "./BaseCheckBox.vue";
import BaseToolTipIcon from "./BaseToolTipIcon.vue";
import BaseToolTip from "./BaseToolTip.vue";

import Resource from "../../Resource/Resource.js";
export default {
  name: "formMiSa",
  props: ["isShowDialog", "employeeData"],
  components: {
    ButtonMiSa,
    MSCombobox,
    PopUpMISA,
    BaseCheckBox,
    BaseToolTipIcon,
    BaseToolTip,
  },
  data() {
    return {
      button: {
        cancel: Resource.form.cancel,
        save: Resource.form.save,
        saveAndAdd: Resource.form.saveAndAdd,
        isShowButton: true,
      },
      toolTip: {
        nameIdentity: Resource.global.identity,
        contentIdentity: Resource.global.contentIdentity,
        mobilePhone: Resource.form.phoneNumber,
        contentMobilePhone: Resource.form.contentPhoneNumber,
        landlinePhone: Resource.form.cellPhoneNumber,
        contentLandlinePhone: Resource.form.contentCellPhoneNumber,
        iconHelp: Resource.form.icon.iconHelp,
        iconClose: Resource.form.icon.iconClose,
        contentHelp: Resource.form.icon.contentHelp,
        contentClose: Resource.form.icon.contentClose,
      },
      isActive: false,
      isShowPopUp: false,
      isShowError: false,
      textError: "",
      employee: {},
      employeeCopy: {},
      myDate: "",
      IdentityDate: "",
      NewEmployeeCode: "",
      typeAdd: Number,
      typeUpdate: Number,
      typeCopy: Number,
      UnitName: "",
      checkError: false,
      passUnitName: "",
      allEmployee: [],
      Resource,

      // mydate: '2000-02-10',
    };
  },
  methods: {

    customDate(dob) {
      try {
        dob = new Date(dob);
        let date = dob.getDate();
        let month = dob.getMonth() + 1;
        let year = dob.getFullYear();
        return `${year}-${
          month < 10 ? `0${month}` : `${month}`
        }-${date < 10 ? `0${date}` : `${date}`}`;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * ????ng form
     * Author: ????o V??n H??ng (19/8/2022)
     */
    closeForm() {
      this.$emit("closeForm", false);
      //Khi ????ng form th?? set typeAdd, typeUpdate, checkError v??? falsy
      this.typeAdd = 0;
      this.typeUpdate = 0;
      this.passUnitName = "";
      this.checkError = false;
    },

    

    /**
     * Nh???n d??? li???u t??? combobox
     * Author: ????o V??n H??ng (2/10/2022)
     */
    getUnitName(value, text) {
      this.UnitName = text;
      this.employee.UnitID = value;
      // console.log(value);
    },

  

    /**
     * Th??m nh??n vi??n m???i
     * Author: ????o V??n H??ng (29/9/2022)
     */
    async InsertEmployee() {
      try {
        if (isNaN(this.employee.Gender)) {
          this.employee.Gender = 1;
        }
        this.typeAdd = 0;
        userService.create(this.employee);
        // let result = await axios.post(
        //   `https://localhost:44388/api/Employees`,
        //   this.employee
        // );
        // Th??m th??nh c??ng th?? set l???i tr???ng th??i typeAdd = 0
        this.$emit("closeForm", false);
        this.emitter.emit("callAPI");
      } catch (error) {
        
        if(error.response.status == 400){
          this.$toast.open({
            message: `${error.response.data.errorMsg[0]}`,
            type: "warning",
            duration: 2000,
            position: "top-right",
            dismissible: true,
            
          })
        };
        if(error.response.status == 500){
          this.$toast.open({
            message: "C?? l???i x???y ra vui l??ng li??n h??? MISA",
            type: "warning",
            duration: 2000,
            position: "top-right",
            dismissible: true,
          })
        }  
      }
    },

    /**
     * S???a nh??n vi??n
     * Author: ????o V??n H??ng(29/9/2022)
     */
    async UpdateEmployee() {
      try {
        
        this.typeUpdate = 0;
        if (this.UnitName) {
          this.UnitName = this.employee.UnitName;
        }
       
        await userService.update(this.employee);

        this.passUnitName = "";
        this.$emit("closeForm", false);
        this.emitter.emit("callAPI");
      } catch (error) {
        if(error.response.status == 400){
          this.$toast.open({
            message: `${error.response.data.errorMsg[0]}`,
            type: "warning",
            duration: 2000,
            position: "top-right",
            dismissible: true,
            
          })
        };
        if(error.response.status == 500){
          this.$toast.open({
            message: "C?? l???i x???y ra vui l??ng li??n h??? MISA",
            type: "warning",
            duration: 2000,
            position: "top-right",
            dismissible: true,
          })
        }  
      }
    },

    /**
     * H??m c???t d??? li???u v?? th??m d??? li???u v??o database
     * Author: ????o V??n H??ng (12/8/2022)
     */
    async saves() {
      try {
        this.employee.Gender = parseInt(this.employee.Gender);
        var isvalid = this.validateData();
        if (!isvalid) {
          return;
        }
        // C???t khi th??m
        if (this.typeAdd == EnumMISA.Formode.Add) {
          await this.InsertEmployee();
        }

        // C???t khi s???a
        if (this.typeUpdate == EnumMISA.Formode.Update) {
          this.UpdateEmployee();
        }
        this.passUnitName = "";
        // this.$emit("closeForm", false);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * H??m c???t v?? th??m m???i
     * Author: ????o V??n H??ng (28/8/2022)
     */
    async saveAndAdds() {
      try {
        this.employee.Gender = parseInt(this.employee.Gender);
        if (isNaN(this.employee.Gender)) {
          this.employee.Gender = 1;
        }
        var isvalid = this.validateData();
        if (!isvalid) {
          return;
        }
        await userService.create(this.employee);
        this.emitter.emit("callAPI");
        this.$emit("closeForm", true);
        this.$refs.txtEmployeeCode.value = "";
        this.$refs.txtFullName.value = "";
        this.$refs.txtIdentityNumber.value = "";
        this.employee = {};
        await userService.newCode().then((data) => {
          this.employee.EmployeeCode = data;
        });
        this.$refs.txtEmployeeCode.select();
        this.$refs.txtEmployeeCode.focus();
        // let result = await axios.get(
        //   "https://localhost:44388/api/Employees/NewEmployeeCode"
        // );
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * H??m d??ng chung validate input
     * Author: ????o V??n H??ng
     */
    validatePopup(field, name) {
      this.$refs[`${field}`].classList.add("m-input-error");
      this.$refs[`${field}`].setAttribute(
        "title",
        "Th??ng tin n??y kh??ng ???????c ph??p ????? tr???ng"
      );
      this.isShowPopUp = true;
      this.isShowError = true;
      this.textError = name;
    },
    
    /**
     * H??m validate ng?????i d??ng nh???p
     * Author: ????o V??n H??ng (29/8/2022)
     */
    validateData() {
      try {
        var ivalid = true;
        if (!this.UnitName) {
          this.checkError = true;
          ivalid = false;
          this.isShowPopUp = true;
          this.isShowError = true;
          this.textError = Resource.form.unit;
        }
        if (this.UnitName) {
          this.checkError = false;
        }

        if (!this.employee.EmployeeName) {
          this.validatePopup("txtFullName", `${Resource.form.name}`);
          ivalid = false;
        }
        if (!this.employee.EmployeeCode) {
          this.validatePopup("txtEmployeeCode", `${Resource.form.code}`);
          ivalid = false;
        }
        if(this.typeAdd == EnumMISA.Formode.Add){
          if (!this.checkDoulicate()) {
            this.$toast.open({
              message: Resource.toast.messageDoulicate,
              type: "warning",
              duration: 3000,
              position: "top-right",
              dismissible: true,
            });
            // this.$refs.txtEmployeeCode.focus();
            this.$refs["txtEmployeeCode"].classList.add("m-input-error");
            this.$refs["txtEmployeeCode"].setAttribute("title",`${Resource.toast.messageDoulicate}`);
            
            ivalid = false;
          }
        }
        return ivalid;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Ki???m tra tr??ng m?? nh??n vi??n
     * Author: ????o V??n H??ng(10/10/2022)
     */
    checkDoulicate() {
      let listEmployeeId = [];

      let res = true;
      this.allEmployee.forEach((element) => {
        listEmployeeId.push(element.EmployeeCode);
      });
      for (let i = 0; i < listEmployeeId.length - 1; i++) {
        if (this.employee.EmployeeCode == listEmployeeId[i]) {
          res = false;
          break;
        }
      }      
      return res;
    },

    /**
     * h??m d??ng chung ki???m tra xem input c?? value hay kh??ng
     * author: ????o V??n H??ng
     */
    checkEmpty(ref) {
      this.$refs[ref].classList.remove("m-input-error");
      this.$refs[ref].setAttribute("title", "");
    },

    /**
     * H??m khi ng?????i d??ng nh???p s??? k hi???n border ????? n???a
     * Author: ????o V??n H??ng (29/8/2022)
     */
    changeInput(value) {
      try {
        if (value === 1) {
          this.checkEmpty(`txtEmployeeCode`);
        }
        if (value === 2) {
          // this.checkEmpty(`txtFullName`)
          this.$refs["txtFullName"].classList.remove("m-input-error");
          this.$refs["txtFullName"].setAttribute("title", "");
        }
        if (value === 3) {
          this.checkEmpty(`txtIdentityNumber`);
        }
      } catch (error) {
        console.log(error);
      }
    },
    

  },

  watch: {
    /**
     * Khi d??? li???u employee thay ?????i th?? truy???n value v??o employee
     * @param {*} value
     */
    employee: function (value) {
      this.employee = value;
    },

    /**
     * Theo d??i employeeData t??? props c???a components FormMISA thay ?????i th?? s??? g??n value v??o employee
     * @param {*} value
     */
    employeeData: function (value) {
      this.employee = value;
    },
  },

 
  mounted() {

    /**
     * L???y t???t c??? nh??n vi??n
     * Author: ????o V??n H??ng (2/10/2022)
     */
    this.emitter.on("getData", (data) => {
      this.allEmployee = data;
    });

    /**L???ng nghe s??? ki???n click th??m nh??n 1vi??n m???i t??? components employeeList
     * Author: ????o V??n H??ng (13/8/2022)
     */
    this.emitter.on("addEmployee", () => {
      try {
        this.employee = {};
        this.UnitName = "";
        userService.newCode().then((data) => {
          this.employee.EmployeeCode = data;
          this.$refs.txtEmployeeCode?.focus();
        });
        this.$nextTick(() => {
          this.$refs["txtEmployeeCode"].focus();
          this.$refs["txtEmployeeCode"].select();
        });
        // Khi th??m th?? typeAdd = 1
        this.typeAdd = EnumMISA.Formode.Add;
      } catch (error) {
        console.log(error);
      }
    });

    /**
     * L???ng nghe s??? ki???n khi th??m nh??n vi??n m???i th?? m??? form
     * Author: ????o V??n H??ng (13/8/2022)
     * calllback v???i tham s??? emp l?? object ch??a th??ng tin nh??n vi??n
     */
    this.emitter.on("openForm", (emp) => {
      try {
        this.employee = emp;
        this.passUnitName = emp.UnitName;

        this.employee.DateOfBirth = this.customDate(emp.DateOfBirth)
        this.employee.IdentityDate = this.customDate(emp.IdentityDate)
        // this.employee.DateOfBirth = "2014-02-09";
        // console.log(emp.DateOfBirth)
        // console.log(this.employee.IdentityDate)
        this.UnitName = emp.UnitName;
        // T??n ph??ng c?? value th?? remove class m-input-error
        this.checkError = false;
        // console.log(emp.UnitName)
        this.$nextTick(() => {
          this.$refs["txtEmployeeCode"].focus();
          this.$refs["txtEmployeeCode"].select();
        });
        // Khi s???a th??
        this.typeUpdate = EnumMISA.Formode.Update;
      } catch (error) {
        console.log(error);
      }
    });

    /**
     * S??? ki???m khi b???m ctrl F8 th?? l??u(c???t)
     * Author: ????o V??n H??ng (2/10/2022)
     */
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "F8") {
        this.saves();
      }
      if (e.key === "Escape") {
        this.closeForm();
      }
    });
  },
};
</script>
<style>
@import url(../../css/base/form.css);
.tooltip-textz {
  position: fixed;
  transform: translateX(-50%);
  background-color: #5b5d64;
  padding: 5px 10px;
  border-radius: 2px;
  display: block;
  color: white;
  font-size: 12px;
  z-index: 10;
}
.radioGender input {
  width: 20px;
}

.radioGender {
  gap: 5px;
}
.selectGender {
  gap: 15px;
}
</style>
<script></script>
