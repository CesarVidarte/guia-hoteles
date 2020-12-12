$(function(){
  $('#contacto').on('show.bs.modal', function (e) {
    console.log('el modal se está mostrando');
    $('#contactoBtn').removeClass('btn-outline-success');
    $('#contactoBtn').addClass('btn-primary');
    $('#contactoBtn').prop('disabled',true);
  });
  $('#contacto').on('shown.bs.modal', function (e) {
    console.log('el modal se mostó');
  });
  $('#contacto').on('hide.bs.modal', function (e) {
    console.log('el modal se oculta');
  });
  $('#contacto').on('hidden.bs.modal', function (e) {
    console.log('el modal se ocultó');
    $('#contactoBtn').addClass('btn-outline-success');
    $('#contactoBtn').removeClass('btn-primary');
    $('#contactoBtn').prop('disabled',false);
  });
});
