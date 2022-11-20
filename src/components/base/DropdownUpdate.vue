<template>
    <div class="dropdown-data">
         <ul>
            <li @click="Coppy">{{Resource.dropdown.double}}</li>
            <li @click="remove">{{Resource.dropdown.delete}}</li>
            <li @click="stop">{{Resource.dropdown.stopUsing}}</li>
        </ul>
    </div>

</template>
<script>
import Resource from "../../Resource/Resource.js"
export default {
    name: "DropDown",
    components:{
},
    data(){
        return{
            employee: {},
            isShowPopUp: false,
            isShowDelete: false,
            employeeData:[],
            Resource
        }
    },
    methods: {
        
        /**
         * Hàm hiện pop up xoá
         * Author: Đào Văn Hùng (17/8/2022)
         */
         remove(){
            this.$emit("isShowPopUp")
            this.emitter.emit("openPopUp")
            this.$emit("closeDropdown")
        },

        /**
         * Hàm nhân bản 1 nhân viên
         * Author: Đào Văn Hùng (17/8/2022)
         */
        Coppy(){
            this.emitter.emit("openForm", this.employeeData)
            this.$emit("closeDropdown")
        },

         /**
          * Hàm nhân viên ngừng sử dụng
          * Author: Đào Văn Hùng (17/8/2022)
          */
        stop(){
            this.$emit("closeDropdown")
        },

        /**
         * Hàm ẩn pop up khi click vào "không" hoặc "huỷ"
         * Author: Đào Văn Hùng (28/9/2022)
         */
        hidePopUp(){
            this.isShowPopUp = false
        }
    }, 
    mounted(){
        this.emitter.on("getEmployee", (emp)=>{
            this.employeeData = emp
        })
    }

}
</script>
<style>
.dropdown-data{
    position: fixed;
    z-index: 999;
    background: white;
    border: 1px solid #babec5;
    border-radius: 2px;
}
.dropdown-data ul li{
    width: 120px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    transition: all .2s ease;
}
.dropdown-data ul li:hover{
    background-color: #e8e9ec;
    color: #08bf1e;

}
</style>