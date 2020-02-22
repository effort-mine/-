Page({
  data:{
    name:'coderwhy',
    age:'19',
    students:[
     {id:110,name:'kobe',age:30},
     {id:120,name:'jack',age:110},    
    ],
    counter:0
  },
  handleBthClick (){
  this.setData({
    counter:this.data.counter +1
  })
  },
  handleSubtraction() {
  this.setData({
    counter: this.data.counter - 1
  })
  }
})      