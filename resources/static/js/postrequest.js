$(document).ready( () => {
    $("#btnSubmit").click((event) => {
        //stop submit the form, we will post it manually.
        event.preventDefault();
        doAjax();
        checkFileSize();
    });
 
});
 
function doAjax() {
 
    // Get form
    var form = $('#fileUploadForm')[0];
    var data = new FormData(form);
 
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/api/files/upload",
        data: data,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        contentType: false,
        cache: false,
        success: (data) => {
            $("#listFiles").text(data);
        },
        error: (e) => {
            $("#listFiles").text(e.responseText);
        }
    });
}

function checkFileSize(){

    let files = e.target.files
    let size = 150 
    let err = ""; 
    for(var x = 0; x<files.length; x++) {
    if (files[x].size > size) {
     err += files[x].type+'is too large, please pick a smaller file\n';
   }
 };
 if (err !== '') {
    e.target.value = null
    console.log(err)
    return false
}
}

