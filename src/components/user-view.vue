Refactored code:

<template>
  <div class="card center" :style="cardStyle">
    <div class="card-back-img-container"></div>
    <div class="card-body">
      <div class="mx-auto profilePicContainer">
        <img :src="result.picture.large" />
      </div>
      <p class="card-title">{{ cardTitle }}</p>
      <h3 class="card-text">{{ subtitle }}</h3>
      <ul class="list-inline text-center" @mouseleave="resetSubtitle">
        <li class="list-inline-item email" @mouseover="setSubtitle('my email is', result.email)"><font-awesome-icon icon="fa-regular fa-envelope fa-lg" size="lg"/></li>
        <li class="list-inline-item telephone" @mouseover="setSubtitle('Phone', result.phone)"><font-awesome-icon icon="fa-solid fa-phone" size="lg"/></li>
        <li class="list-inline-item address" @mouseover="setSubtitle('Loc', result.location.country)"><font-awesome-icon icon="fa-solid fa-map-marked" size="lg"/></li>
        <li class="list-inline-item employeeID" @mouseover="setSubtitle('id', result.login.uuid)"><font-awesome-icon icon="fa-solid fa-user-secret" size="lg"/></li>
        <li class="list-inline-item dob" @mouseover="setSubtitle('dob', result.dob.date)"><font-awesome-icon icon="fa-regular fa-envelope" size="lg"/></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import type { RandomUser } from "@/composables/types";
import { useRandomUser } from "@/composables/use-Random-user";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const { users } = useRandomUser();

const props = defineProps({
  userid: {
    type: String,
    required: true
  }
});

const result = ref<RandomUser>();
const cardTitle = ref('Hi I\'m');
const subtitle = ref("");

const cardStyle = computed(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  WebkitBackdropFilter: 'blur(20px)',
  backdropFilter: 'blur(20px)',
  color: '#cccccc'
}));

if (props.userid) {
  result.value = users.value.find(user => user.login.uuid === props.userid);
  subtitle.value = `${result.value.name.title}. ${result.value.name.first} ${result.value.name.last}`;
}

function setSubtitle(title: string, subTitle: string): void {
  cardTitle.value = title;
  subtitle.value = subTitle;
}

function resetSubtitle(): void {
  cardTitle.value = 'Hi I\'m';
  subtitle.value = `${result.value.name.title}. ${result.value.name.first} ${result.value.name.last}`;
}
</script>
<style>

h3{
  margin-bottom:30px;
}

.card-back-img-container{
  height:180px;
  background-size:cover;
  background-repeat:no-repeat;
  background-image:url(https://res.cloudinary.com/dpnb7bkmn/image/upload/v1529950240/Codepen_projects/Professional_card/code-background-1200-800.jpg);
}

.list-inline-item, .list-inline{
  padding:10px 30px 10px 30px;
}

ul.list-inline li:hover{
  color:#0096cd;
  cursor:pointer;
}


.mx-auto{
  width:120px;
}

.card-title, .card-text{
  text-align:center;
}

.card.employee .card-title{
  display:flex;
}

</style>