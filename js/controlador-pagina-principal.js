var elements = [];
$.getJSON('class/lista.php', function(json, textStatus) {
    elements = json;
    var item;
    for (var i = 0; i < json.length; i++) {
        item = json[i];
        $('#container').append(`
            <div id="card-${item.id}">
                <img class="imag" src='${item.urlCaratula}'>
                <div>
                    <h5>${item.titulo}<button id="card-show-${item.id}" class="btn btn-light" style="margin-left: 8px" onclick="mostrarModal(${item.id})">
                    <i class="fas fa-ellipsis-h"></i></button></h5>
                </div>
            </div>
        `)
    }
});

function mostrarModal(id) {
    var modal;
    for (var i = 0; i < elements.length; i++) {
        modal = elements[i];
        if (modal.id === id) {
            break;
        }
    }
    $('#modal').empty().append(`
        <div>
            <img class="imag" src='${modal.urlCaratula}'>
            <h5>${modal.titulo}</h5>
            <h6 style="color: #666;">${modal.subido}</h6><br>
            <h5 style="font-weight: bold; color: #666;">Comentarios</h5>
            <textarea class="form-control" placeholder="Escribe un comentario..." rows="2" cols="10"></textarea>
        </div>
    `);

    $('#cardModal-wrapper').empty().append(`
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-danger" onclick="guardar(${modal.id})">Guardar</button>
        </div>
    `)
    $('#cardModal').modal('show');
}

function guardar(id) {
    $.post('class/guardar.php', { id }, function(data, textStatus, xhr) {
        data = JSON.parse(data);
    });
}