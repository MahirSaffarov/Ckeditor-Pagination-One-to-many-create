$(document).ready(function () {
    $(document).on("click", "#delete", function (e) {
        e.preventDefault();
        console.log("skfbnskfj")
        let productId = $(this).attr("data-id");


        let data = { id: productId };

        $.ajax({
            url: '/Product/Edit',
            type: 'POST',
            data: data, 
            success: function (response) {
            }
        });

    })
})