<template>
  <div class="baseCheckBox">
    <input type="checkbox" class="checkbox" />
  </div>
</template>
<script>
  export default {
    name: "baseCheckBox",
    props: ['checkBody', 'employeeList'],
    data(){
      return{
        isActive: false,
        employeeData: [],
        employeeId: '',
      }
    },
    methods: {
      // handleCheckBox(){
      //   if(this.checkBody){
                      
      //   } else{

      //   }
      // }
    },
    mounted(){
      /**
       * Nhận data từ table
       * Author: Đào Văn Hùng (2/10/2022)
       */
      this.emitter.on("getData", (emp)=>{
        this.employeeData = emp
      })
    }
  }
</script>
<style>
  .checkbox {
  position: relative;
  top:2px;
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
  z-index: 1;
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
</style>
