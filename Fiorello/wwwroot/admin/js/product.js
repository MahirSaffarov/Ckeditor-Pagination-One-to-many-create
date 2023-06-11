$(document).ready(function () {
    $(document).on("click", "#delete", function (e) {
        e.preventDefault();

        let productId = $(this).attr("data-id");


        let data = { id: productId };

        $.ajax({
            url: '/Product/Update',
            type: 'POST',
            data: data, 
            success: function (response) {
                console.log(response)
            }
        });

    })
})