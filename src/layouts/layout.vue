<template>
  <div id="main-widow">
  <div class="links">
    <h1>Bitter</h1>
    <router-link to="/">О нас </router-link>
    <router-link to="/gosti">Гости</router-link>
  </div>
  <div class="form">
    <form action="*">
      <input type="text" name="post-name" placeholder="Имя поста">
      <br>
      <textarea type="text" name="post-body" placeholder="Сообщение"></textarea>
      <br>
      <button type="submit">Отправить</button>
    </form>
    <hr>
  </div>

  </div>
</template>

<script>
export default {
  name: "layout"
}
</script>

<style scoped>


</style>