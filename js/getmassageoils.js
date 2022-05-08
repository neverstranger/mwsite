$.ajax({
    url: "https://97e5b27c-8bc5-4171-9dfd-69ce3df39620.mock.pstmn.io/testprod2",
    dataType: 'json',
    
    success: function(data) {
        console.log(data);
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].productName+ '</td><td>' + data[i].productDesc + '</td><td>' + data[i].productPrec + '</td></tr>');
            $('#msgOils').append(row);

        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});