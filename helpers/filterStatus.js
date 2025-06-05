module.exports = (query) =>{
  // mảng này dùng để chứa các trạng thái cho từng nút bấm để
  // vẽ giao diện trong trang products
  let filterStatus = [
    {
      name : "Tất cả",
      status : "",
      class : ""
    },
    {
      name : "Hoạt động",
      status : "In Stock",
      class : ""
    },
    {
      name : "Dừng Hoạt động",
      status : "Low Stock",
      class : ""
    }
  ]
  
  // hàm này để thay đổi trạng thái nút khi bấm vào
  if(query.availabilityStatus){
    // hàm findIndex để tìm index của 1 bản ghi thỏa mãn một điều kiện nào đó
    // ta sẽ lọc từng item một và lấy ra cái item.status để so sánh với các status mà người dùng truyền lên
    const index = filterStatus.findIndex(item => item.status == query.availabilityStatus)

    // sau đó ta truy cập vào vị trí index của mảng và ".class" để có thể thêm vào
    filterStatus[index].class = "active"
  }
  else{
    const index = filterStatus.findIndex(item => item.status == "")
    filterStatus[index].class = "active"
  }

  return filterStatus;
}