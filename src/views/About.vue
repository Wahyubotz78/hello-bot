<template>
  <div class="container-fluid inner__">
    <div class="wrapper">
      <div role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <h3 class="mt-3">Creator</h3>
              <div class="row mt-4 align-items-center">
                <div class="col-md-3 text-center mb-5">
                  <div class="avatar avatar-xl">
                    <img @click="$bvModal.show('modal-monkey')" width="128px" height="128px" src="./../assets/mamank.jpg" alt="..." class="avatar-img rounded-circle">
                  </div>
                </div>
                <div class="col">
                  <div class="row align-items-center">
                    <div class="col-md-7">
                      <h4 class="mb-1">AnR-Lin</h4>
                      <p class="small mb-3"><span class="badge badge-dark">Magelang, Jawa Tengah, Indonesia</span></p>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-7">
                      <p class="text-muted">Hello... let me introduce myself, I am Muhammad Angger Choirul Umam (AnR-Lin). I am in the process of learning vue.js, laravel, and unity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- .row -->
        </div> <!-- .container-fluid -->
        <b-modal id="modal-monkey" title="Hehe..." class="d-flex judtify-content-center">
          <div>
            <img src="./../assets/monkey.jpg" alt="">
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>
