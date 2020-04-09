(function($) {
    let sidebarOpened = false;
    "use strict";

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('sidebar-active');
        sidebarOpened = true;
        $('#body-shadow').toggleClass('body-overlay');
    });

    $('#body-shadow').on('click', function () {
        if(sidebarOpened === true){
            $('#sidebar').toggleClass('sidebar-active');
            $('#body-shadow').toggleClass('body-overlay');
            sidebarOpened = false;
        }
        console.log('body');
    })

})(jQuery);
