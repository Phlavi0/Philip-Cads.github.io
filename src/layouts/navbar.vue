<template>
  <div class="topnav">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'todo'}">Todo</router-link>
    <router-link :to="{name: 'charmander'}">Charmander</router-link>
    <router-link :to="{name: 'users'}">Random Users</router-link>
  </div>
</template>

<style>

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
