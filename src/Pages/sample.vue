<template>
  <!--  <table class="table align-middle mb-0 bg-white card center">-->
  <!--    <thead class="bg-light">-->
  <!--    <tr>-->
  <!--      <th>Name</th>-->
  <!--      <th>Gender</th>-->
  <!--      <th>Nationality</th>-->
  <!--      <th>User Name</th>-->
  <!--      <th>Actions</th>-->
  <!--    </tr>-->
  <!--    </thead>-->
  <!--    <tbody>-->
  <!--    <tr v-for="user in users" :key="user.email">-->
  <!--      <td>-->
  <!--        <div class="d-flex align-items-center">-->
  <!--          <img-->
  <!--              :src="user.picture.thumbnail"-->
  <!--              alt=""-->
  <!--              style="width: 45px; height: 45px; float: left"-->
  <!--              class="rounded-circle"-->
  <!--          />-->
  <!--          <div class="ms-3">-->
  <!--            <p class="fw-bold mb-1">{{ user.name.first }} {{ user.name.last }}</p>-->
  <!--            <p class="text-muted mb-0">{{ user.email}}</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </td>-->
  <!--      <td>-->
  <!--        <p class="fw-normal mb-1">{{ user.gender }}</p>-->
  <!--      </td>-->
  <!--      <td>-->
  <!--        <span class="badge badge-success rounded-pill d-inline">{{ user.nat }}</span>-->
  <!--      </td>-->
  <!--      <td>{{ user.login.username }}</td>-->
  <!--      <td>-->
  <!--        <button type="button" class="btn btn-link btn-sm btn-rounded">-->
  <!--          Edit-->
  <!--        </button>-->
  <!--      </td>-->
  <!--    </tr>-->
  <!--    </tbody>-->
  <!--  </table>-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="sidebar">
          <div class="widget border-0">
            <div class="search">
              <input class="form-control" type="text" placeholder="Search Keywords">
            </div>
          </div>
          <div class="widget border-0">
            <div class="locations">
              <input class="form-control" type="text" placeholder="All Locations">
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row mb-4">
          <div class="col-12">
            <h6 class="mb-0">Showing 1-10 of <span class="text-primary">28 Candidates</span></h6>
          </div>
        </div>
        <div class="job-filter mb-4 d-sm-flex align-items-center">
          <div class="job-shortby ml-sm-auto d-flex align-items-center">
            <form class="form-inline">
              <div class="form-group mb-0">
                <label class="justify-content-start mr-2">Sort by :</label>
                <div class="short-by">
                  <select class="form-control basic-select select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                    <option data-select2-id="3">Men</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-4" v-for="user in users" :key="user.email">
            <div class="candidate-list candidate-grid">
              <div class="candidate-list-image center">
                <img class="img-fluid" :src="user.picture.large" alt="">
              </div>
              <div class="candidate-list-details">
                <div class="candidate-list-info">
                  <div class="candidate-list-title">
                    <h5><a href="candidate-detail.html">{{ user.name.first }} {{ user.name.last }}</a></h5>
                  </div>
                  <div class="candidate-list-option">
                    <ul class="list-unstyled">
                      <li><i class="fas fa-filter pr-1"></i>{{ user.gender }}</li>
                      <li><i class="fas fa-map-marker-alt pr-1"></i>{{ user.location.state }}, {{ user.location.country }} {{ user.location.postcode}}</li>
                    </ul>
                  </div>
                </div>
                <div class="candidate-list-favourite-time">
                  <a class="candidate-list-favourite order-2" href="#">View</a>
                  <span class="candidate-list-time order-1"><i class="far fa-clock pr-1"></i>{{ user.id.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mt-4 mt-sm-5">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
              <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">25</a></li>
              <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
</script>