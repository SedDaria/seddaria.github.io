<script>
export default{
  data(){
    return{
      name:'',
      list:[],
    }
  },
  methods:{
    test(){
      this.list.push(this.name);
      this.name = '';
    },
    sor(){
      this.list.sort();
    },
    dell(){
      this.list=0;
    },
    dell_x(){
      this.list.splice(0, 1);
    }
  }
}
</script>

<template>
  <div class="title">
    <h2 id="todo">TODO LIST</h2>
  </div>
<div class="bodyTask">
    <h1>Список задач</h1>
    <p class="p_task">Хочешь организовать свою жизнь и следить за текущими делами? <br><br> Вводи задачу, сортируй, выполняй, удаляй!</p>
    <br>
    <hr>
  <div class="container">
    <div class="header">
      <input type="text" placeholder="Ввести задачу" class="in" v-model="name">
      <button class="btn" @click="test();">ДОБАВИТЬ</button>
    </div>
    <div class="content">
      <div class="task" v-for="x in list">
        <input type="radio" name="task1" class="in_r"><p class="text_task">{{ x }}</p><button class="dell" @click="dell_x()">Удалить</button>
      </div>
    </div>
    <div class="footer">
      <hr>
      <button @click="dell();">УДАЛИТЬ ВСЕ</button><button @click="sor();">СОРТИРОВАТЬ</button><a href="#todo"><button>ВВЕРХ</button></a>
    </div>
  </div>
</div> 
</template>

<style scoped>

</style>
