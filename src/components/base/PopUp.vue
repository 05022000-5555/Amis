<template>
  <div class="modal-popUp">
    <div class="pop-up">
      <div class="pop-up-message pop-up-delete" v-show="isShowPopUpDelete">
        <div class="inforPopup">
          <div class="icon-popup">
            <div class="icon mi-48 mi-exclamation-warning-48"></div>
          </div>
          <p>
            {{ Resource.popup.deleteQuestion }} {{ employee.EmployeeCode }}
            {{ Resource.popup.no }}
            ?
          </p>
        </div>
        <div class="list-button list-button_delete">
          <button @click="back" class="button button_no">
            {{ Resource.popup.no }}
          </button>
          <button
            @click="removeEmployee"
            ref="btnRemove"
            class="button button_yes"
          >
            {{ Resource.popup.yes }}
          </button>
        </div>
      </div>
      <div class="pop-up-error pop-up-message" v-if="isShowError">
        <div class="inforPopup">
          <div class="icon-popup">
            <div class="icon mi-48 mi-exclamation-error-48-2"></div>
          </div>
          <p>{{ textError }} {{ Resource.popup.notEmpty }}</p>
        </div>
        <div class="list-button buttonClose">
          <button
            @click="closePopUpError"
            ref="btnClose"
            class="button button_yes"
          >
            {{ Resource.popup.close }}
          </button>
        </div>
      </div>
      <div class="pop-up-update pop-up-message" v-show="isShow">
        <div class="inforPopup">
          <div class="icon-popup">
            <div class="icon mi-48 mi-exclamation-question-48"></div>
          </div>
          <p>{{ Resource.popup.dataChangeAndSave }}</p>
        </div>
        <div class="list-button">
          <button class="button button_yes">{{ Resource.popup.cancel }}</button>
          <div class="accept-button">
            <button class="button button_no">{{ Resource.popup.no }}</button>
            <button class="button button_yes">{{ Resource.popup.yes }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios"
import Resource from "../../Resource/Resource.js";
import userService from "../../baseAxios/user-service";
export default {
  name: "PopUpMiSa",
  props: {
    icon: String,
    text: String,
    isShowError: Boolean,
    textError: String,
  },
  data() {
    return {
      isShow: false,
      employee: {},
      isShowPopUpDelete: false,
      Resource,
    };
  },
  methods: {
    /**
     * H??m tr??? l???i khi click v??o "Kh??ng"
     * Author: ????o V??n H??ng (29/8/2022)
     */
    back() {
      this.$emit("closePopUp");
    },

    /**
     * H??m xo?? nh??n vi??n khi click v??o "c??"
     * Author: ????o V??n H??ng(30/8/2022)
     */
    async removeEmployee() {
      try {
        this.$emit("closePopUp");
        console.log(this.employee)
        await userService.delete(this.employee.EmployeeID);

        // await axios.delete(`https://cukcuk.manhnv.net/api/v1/Employees/${this.employee.EmployeeId}`)
        this.$toast.open({
          message: `${Resource.toast.messageDelete} ${this.employee.EmployeeCode}`,
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
        this.emitter.emit("callAPI");
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * H??m ????ng pop up l???i ng?????i d??ng k nh???p ????ng
     * Author: ????o V??n H??ng(30/8/2022)
     */
    closePopUpError() {
      this.$emit("closePopUpError");
    },
  },
  mounted() {
    this.$refs["btnClose"]?.focus();

    /**
     * Nh???n enter ????? ????ng pop up
     * Author: ????o V??n H??ng (29/9/2022)
     */
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        this.closePopUpError();
      }
    });

    /**
     * Nh??n d??? li???u t??? components DropdownUpdate
     * Author: ????o V??n H??ng (30/8/2022)
     */
    this.emitter.on("openPopUp", () => {
      this.isShowPopUpDelete = true;
    }),
      /**
       * H??m nh???n d??? li???u object employee t??? components table
       * Author: ????o V??n H??ng (30/8/2022)
       */
      this.emitter.on("getEmployee", (emp) => {
        this.employee = emp;
      });
  },
};
</script>
<style scoped>
.modal-popUp {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}
.pop-up {
  background: #fff;
}
.pop-up-message {
  padding: 32px 40px;
  padding-right: 30px;
  border-radius: 4px;
}
.pop-up-delete {
  width: 444px;
  height: 201px;
}
.pop-up-error {
  width: 444px;
  height: 183px;
}
.inforPopup {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bbb;
  margin-bottom: 25px;
}

.list-button {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
}

.list-button.buttonClose {
  justify-content: end;
}
.button_yes {
  background: #2ca01c;
  color: #fff;
}
.button_yes:hover {
  background-color: #35bf22;
}
.button_yes:active {
  background-color: #248b15;
}
.accept-button {
  display: flex;
  gap: 10px;
}
</style>
