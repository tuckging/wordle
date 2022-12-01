function is_today_special(){
  today = new Date();
  return today.getMonth() == 11 && today.getDate() == 3
}
