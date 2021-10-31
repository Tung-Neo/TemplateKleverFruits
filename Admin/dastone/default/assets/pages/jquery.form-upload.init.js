$(function(){
  $(".dropify").dropify(),
  $(".dropify-fr").dropify({
    messages:{
      default:"Kéo và thả tệp vào đây hoặc nhấp vào",
      replace:"Kéo và thả tệp hoặc nhấp để thay thế",
      remove:"Xóa",
      error:"Xin lỗi, tệp quá lớn"}});
  var e=$("#input-file-events").dropify();
  e.on(
    "dropify.beforeClear",
    function(e,r){return confirm('Bạn có chắc chắn muốn xóa "'+r.file.name+'" ?')}),
  e.on("dropify.afterClear",function(e,r){alert("Tệp đã xóa")}),
  e.on("dropify.errors",function(e,r){console.log("Có lỗi")});
  var r=$("#input-file-to-destroy").dropify();r=r.data("dropify"),$("#toggleDropify").on("click",function(e){e.preventDefault(),r.isDropified()?r.destroy():r.init()})});
