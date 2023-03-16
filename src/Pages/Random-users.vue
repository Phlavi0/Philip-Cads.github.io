<template>
  <div class="card center" style="background-color: rgba(255, 255, 255, 0.06);
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);">
    <div class="card-body">
      <div id="filterButtons">
        <button data-filter="male" class="btn btn-info">Male</button>
        <button data-filter="female" class="btn btn-info">Female</button>
        <button data-filter="" class="btn btn-info">All</button>
      </div>
      <table id="userstable" class="table stripe">
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Location</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.email">
          <td class="align-middle">
            <img :src="user.picture.large" alt="" width="50" height="50" class="img img-responsive" />
          </td>
          <td class="align-middle">{{ user.name.first }} {{ user.name.last }}</td>
<!--          TODO: Create Computed-->
          <td class="align-middle">{{ user.location.country }}</td>
          <td class="align-middle">{{ user.gender.charAt(0).toUpperCase()+ user.gender.slice(1) }}</td>
<!--          TODO: Create Computed-->
          <td class="align-middle">
            <router-link :to="{ name: 'user', params: { userid: user.login.uuid } }" class="btn btn-primary btn-sm">User Profile</router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRandomUser } from "@/composables/use-Random-user";

const { users } = useRandomUser();
$(document).ready(function() {
  try {
    const table = $('#userstable').DataTable({
      lengthMenu: [[6, 10, 25, -1], [6, 10, 25, "All"]]
    });

    $('#filterButtons button').click(function() {
      const filterValue = $(this).data('filter').toLowerCase();
      if (filterValue === '') {
        table.column(3).search('').draw();
      } else {
        table.column(3).search(filterValue).draw();
      }
    });
  } catch (error) {
    console.error(error);
  }
});

</script>
