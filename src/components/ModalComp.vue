<template>
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:'modal-comp',
    data() {
        return{

        }
    },
}
</script>

<style scoped>
.modal{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #a9a9a999;
    /* display: block; */
}
.modal-dialog{
    top: 50%;
    transform: translateY(-50%);
}
</style>