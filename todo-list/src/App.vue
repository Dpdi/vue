<template>
  <div class="main">
    <input type="text" v-model="text" >
    <button @click="handleClick">提交</button>
    <ol class="todo-list">
      <li 
        v-for="(item,index) in list"
        :key="index"
        @click="removeItem(index)"
        >
          {{item}}
        </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      list: [
        '第一条数据',
        '第二条数据',
        '第三条数据',
      ],
      text:''
    })
  },
  methods: {
    handleClick() {
      this.list.push(this.text);
      // console.log(this.list);
      this.text = ''
    },
    removeItem (index) {
      this.list.splice(index,1)
    } 
  }
}
</script>

<style>
.main{
  width: 40%;
  margin: 0 auto;
  background: #f7f7f7;
  padding: 25px 15px 25px 10px;
  color: #888;
  border:1px solid #e4e4e4;
}
.main input{
  width: 80%;
  height: 30px;
  color: #888;
  border: 1px solid #DADADA;
}
.main button{
  background: #E27575;
  padding: 8px 25px;
  color: #FFF;
  box-shadow: 1px 1px 5px #B6B6B6;
  border-radius: 3px;
  margin-left: 20px;
}
.main ol{
  width: 50%;
  padding-top: 40px;
  margin: 0 auto;
}
.main li{
  padding-bottom: 10px;
}
</style>
