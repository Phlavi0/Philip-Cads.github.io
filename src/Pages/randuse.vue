<template>
  <div id="randuse">
    <div class="error-msg" v-if="gotError">
      Oops! Something went wrong :\
    </div>
    <div class="round" v-else>
      <div class="item"
           :class="{active: activeIndex === key}"
           v-for="(el, key) in list"
           :key="key"
           @click="activeIndex = key"
           :style="{ transform: itemPosition[key] }"
      >
        <div class="inner">
          <img :src="el.picture.large" alt="">
        </div>
      </div>
    </div>
    <div class="person-info" v-if="activeInfo" :key="activeIndex">
      <div class="img-box">
        <img :src="activeInfo.picture.large" alt="" >
      </div>
      <div class="row">
        <div class="title">Name</div>
        <div class="content">{{ activeInfo.name.first }} {{ activeInfo.name.last }}</div>
      </div>
      <div class="row">
        <div class="title">Location</div>
        <div class="content">{{ activeInfo.location.country }}, {{ activeInfo.location.state }}</div>
      </div>
      <div class="row">
        <div class="title">Phone</div>
        <div class="content">{{ activeInfo.cell }}</div>
      </div>
      <div class="row">
        <div class="title">Email</div>
        <div class="content">{{ activeInfo.email }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import '@/assets/RUapi.scss'
import { ref, computed, onMounted } from 'vue';

const dataCount = ref(8);
const activeIndex = ref(0);
const list = ref([]);
const gotError = ref(false);

const activeInfo = computed(() => {
  if (!list.value.length) return null;
  return list.value[activeIndex.value];
});

const itemPosition = computed(() => {
  const len = list.value.length;
  return list.value.map((_, key) => {
    const deg = 360 / len * key - 90;
    const radius = '1.8rem';
    return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`
  })
});

onMounted(() => {
  axios.get(`https://randomuser.me/api/?page=3&results=${dataCount.value}`)
      .then(res => {
        list.value = res.data.results;
      })
      .catch(err => {
        console.log(err);
        gotError.value = true;
      })
});
</script>
