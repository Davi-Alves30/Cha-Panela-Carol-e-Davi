$(document).ready(function() {

    let baseUrl = 'https://cha-panela-davi.herokuapp.com';
    $.ajax({
        url: baseUrl + '/list',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            result.forEach(element => {
                if (element.checked) {
                    $("#listaPresentes").append("<li><input disabled type='checkbox' onclick='return false;' name=" + element.id + " checked=checked id=" + element.id + "  value=" + element.id + "><label for=" + element.id + ">" + element.description + "</label></li>");
                } else {
                    $("#listaPresentes").append("<li><input type='checkbox' name=" + element.id + " id=" + element.id + "  value=" + element.id + "><label for=" + element.id + ">" + element.description + "</label></li>");
                }
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log('Erro ao tentar realizar a operação');
        }
      }
    );

    $('#btn-submit').on('click', function(e){
        e.preventDefault();
        let arrChecked = [];

        $("input:checkbox:checked").not(":disabled").each(function(){
            arrChecked.push(Number($(this).val()))
        });

        if (arrChecked.length == 0) {
            alert('Selecione uma opção.')
            return;
        }
        var settings = {
            "url": baseUrl + '/check',
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
            },
            "data": JSON.stringify({"id": arrChecked }),
          };
          
          $.ajax(settings).done(function (response) {
            window.location.href = window.location.href;
          });
    });
});

