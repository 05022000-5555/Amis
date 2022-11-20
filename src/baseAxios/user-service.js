import baseService from "./base";

export default {
  /**
   * Lấy tất cả bản ghi
   * Author: Đào Văn Hùng (2/10/2022)
   */
  all() {
    return baseService.get("Employees/");
  },

  /**
   * Lấy 1 bản ghi theo id
   * Author: Đào Văn Hùng (2/10/2022)
   */
  one(id) {
    return baseService.get(`Employees/${id}`);
  },
  /**
   * Thêm mới 1 bản ghi
   * Author: Đào Văn Hùng (2/10/2022)
   */
  create(data) {
    return baseService.post("Employees", data);
  },

  /**
   * Cập nhật 1 bản ghi bản ghi
   * Author: Đào Văn Hùng (2/10/2022)
   */
  update(data) {
    return baseService.put(`Employees`, data); 
  },

  /**
   * Xoá 1  bản ghi
   * Author: Đào Văn Hùng (2/10/2022)
   */
  delete(id) {
    return baseService.delete(`Employees?id=${id}`);
  },
  
  /**
   * Xoá nhiều nhân viên
   * author: Đào Văn Hùng (2/10/2022)
   */
  deleteMultiple(listId){
    return baseService.delete(`Employees/multiple`, {data: listId})
  },
  /**
   * Lấy mã mới
   * Author: Đào Văn Hùng (2/10/2022)
   */
  newCode(){
    return baseService.get("Employees/NewEmployeeCode")
  },
  /**
   * Phân trang
   * Author: Đào Văn Hùng (2/10/2022)
   */
  getPagging(pageSize, pageNumber, search) {
    return baseService.get(
      `Employees/filter?pageSize=${pageSize}&pageNumber=${pageNumber}${
        search ? `&Filter=${encodeURIComponent(search)}` : ""
      }`
    );
  },
};
