<template>
  <div>
    <div class="header_employee flex-aligin-center">
      <h3>{{Resource.content.employee}}</h3>
      <ButtonMiSa
        @click="btnAddClick"
        :name="button.nameButton"
        :class="{ buttonColor: button.isActive }"
      />
    </div>
    <div class="content_Employee">
      <div class="form-list">
        <div class="ImplementSeries">
          <button
            @click="isShowBtnDelete = !isShowBtnDelete"
            :disabled="disableButton"
            class="ImplementSeries-border flex"
          >
            <span>{{Resource.content.batchExecution}}</span>
            <div
              class="icon mi-16 mi-arow-up"
              :class="{ opacity: enable }"
            ></div>
          </button>
          <div
            v-if="isShowBtnDelete"
            @click="deleteMultiple"
            
            type="button"
            class="deleteMultiple"
          >
            <div class="btnDelete">{{Resource.content.delete}}</div>
          </div>
        </div>
        <div class="form-search flex-aligin-center">
          <div class="input-search">
            <input
              type="text"
              v-model="search"
              ref="inputSearch"
              :placeholder="Resource.content.playhoderSearch"
              class="input-search___input"
            />
            <div class="icon icon-search"></div>
          </div>
          
          <div
            @click="refresh"
            :title="Resource.content.backUpData"
            class="icon mi-24 icon-refresh"
          ></div>
          <div
           class="icon mi-24 mi-excel__nav"
           :title="Resource.content.exportExcel"
           @click="ExportExcel"
           ></div>
        </div>
      </div>
      <div class="tableEmployee">
        <MiSaTable @listEmployeeId="listEmployeeId" :formSearch="search" />
        <ThePagging v-if="this.employeeList?.length || 0" />
      </div>
    </div>
    <FormAdd :isShowDialog="isShow" @closeForm="showDialogFunction" />
  </div>
</template>
<script>
import Resource from "../../Resource/Resource.js"
import MiSaTable from "../layout/TheTable.vue";
import ButtonMiSa from "../base/BaseButton.vue";
import FormAdd from "../base/FormMiSa.vue";
import ThePagging from "../base/ThePagging.vue";
import axios from "axios"
import useDebouceRef from "../../js/useDebouncedRef.js";
import userService from "../../baseAxios/user-service.js";
// import BaseToolTip from '../base/BaseToolTip.vue';
export default {
  name: "TheSizebarRight",
  props: ["isShowForm"],
  components: {
    MiSaTable,
    ButtonMiSa,
    FormAdd,
    ThePagging,
  },

  data() {
    return {
      button: {
        nameButton: "Th??m nh??n vi??n m???i",
        isActive: true,
      },
      isShow: false,
      isActiveToolTip: true,
      search: null,
      isShowBtnDelete: false,
      employeeList: [],
      empOneInfo: {},
      nameToolTip: "L???y l???i d??? li???u",
      name: "",
      listEmployeeIdData: [],
      disableButton: true,
      enable: true,
      Resource
    };
  },
  
  methods: {

    /**
     * Nh???n d??? li???u emit t??? table
     * Author: ????o V??n H??ng
     */
    listEmployeeId(data) {
      this.listEmployeeIdData = data;
      if(this.listEmployeeIdData.length >= 2){
        this.disableButton = false
        this.enable = false
      }else{
        this.enable = true 
        this.disableButton = true
        this.isShowBtnDelete = false
      } 
    },

    /**
     * Click xo?? nhi???u
     * Author: ????o V??n H??ng (5/10/2022)
     */
    async deleteMultiple() {
      try {
        await userService.deleteMultiple(this.listEmployeeIdData);
        this.isShowBtnDelete = false;
        this.emitter.emit("callAPI");
        this.$toast.open({
          message: `B???n ???? xo?? ${this.listEmployeeIdData.length} nh??n vi??n`,
          type: "success",
          duration: 2000,
          position: "top-right",
          dismissible: true,
        });
        this.listEmployeeIdData = []
        this.emitter.emit("listEmployeeData")
      } catch (error) {
        this.$toast.open({
          message: error.devMsg, 
          type: "warning",
          duration: 2000,
          position: "top-right",
          dismissible: true,
        });
      }
    },

    /**H??m khi click v??o button Th??m nh??n vi??n m???i s??? hi???n form
     * Author: ????o V??n H??ng (10/8/2022)
     */
    btnAddClick() {
      
      this.showDialogFunction(true);
      this.emitter.emit("addEmployee");
    },

    /**
     * Refresh
     * Author: ????o V??n H??ng (19/8/2022)
     */
    refresh() {
      this.emitter.emit("callAPI");
    },

    /**L???p gi??? ????? set value isShow
     * Author: ????o V??n H??ng (10/8/2022)
     * @param isShow : nh???n 2 gi?? tr??? true false
     */
    showDialogFunction(isShow) {
      this.isShow = isShow;
    },

    /**
     * Xu???t ra excel
     * Author: ????o V??n H??ng (8/10/2022)
     */
      async ExportExcel(){
        try{
          await axios.get("https://localhost:44388/api/Employees/Export", {responseType: "blob"}).then(data=>{
            const url = window.URL.createObjectURL(new Blob([data.data]));
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "Danh s??ch nh??n vi??n.xlsx")
            document.body.appendChild(link)
            link.click()
            link.remove()
                  })
        }catch(error){
          console.log(error)
        }
    }
  },

  mounted() {

    //B???t ?????u v??o trang th?? input search s??? ???????c focus
    this.$refs.inputSearch.focus()

    /**
     * Ph??m t???t insert ????? th??m nh??n vi??n
     * Author: ????o V??n H??ng (1/10/2022)
     */
    window.addEventListener("keydown", (e) => {
      if (e.key === "Insert") {
        this.btnAddClick();
      }
    });

    /**
     * T??m ki???m
     * Sau khi nh???p xong th?? sau 1s s??? request
     */
    this.search = useDebouceRef("", 1000);

    /**
     * emitter l???ng nghe s??? ki???n double click v??o tr table s??? hi???n form s???a
     * Author: ????o V??n H??ng (15/8/2022)
     */

    this.emitter.on("openForm", () => {
      this.isShow = true;
    }),

      /**
       * M??? form s???a
       * Author: ????o V??n H??ng (15/8/2022)
       */
      this.emitter.on("openFormUpdate", () => {
        this.isShow = true;
      }),
      this.emitter.on("getData", (data) => {
        this.employeeList = data;
      });

  },
};
</script>
<style>
.opacity {
  opacity: 0.5;
}
.deleteMultiple {
  position: absolute;
  top: 113%;
  right: 10px;
  padding: 8px;
  padding-right: 40px;
  background: #fff;
  color: #111;
  cursor: pointer;
  border: 1px solid #bbb;
  z-index: 1000;
}
.block{
  display: block;
}
.mi-excel__nav{
  background-position: -704px -200px;
  cursor: pointer;
}
.mi-excel__nav:hover{
  background-position: -704px -256px;
}
</style>
