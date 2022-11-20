<template>
    <div>
        <input
        type="date"
        ref="input"
        v-bind:value="dateToYYYYMMDD(value)"
        v-on:input="updateValue($event.target)"
        v-on:focus="selectAll"
      />
    </div>
</template>
<script>
export default{
    name: "InputDate",
    props: {
    value: {
      type: Date,
      default: new Date()
    }
  },
  methods:{
    /**
     * convert ngày tháng năm sang YYYY-MM-DD
     * @param {*} d: ngày tháng năm
     * Author: Đào Văn Hùng (9/10/2022)
     */
    dateToYYYYMMDD(d) {
      return d && new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0];
    },
    
    /**
     * binding ngày tháng năm
     * @param {*} target 
     * Author: Đào Văn Hùng (9/10/2022)
     */
    updateValue: function (target) {
      this.$emit('input', target.valueAsDate);
    },

    /**
     * Chọn tất cả
     * @param {*} event 
     * Author: Đào Văn Hùng (9/10/2022)
     */
    selectAll: function (event) {
      setTimeout(function () {
      	event.target.select()
      }, 0)
    }
  }
  }

</script>