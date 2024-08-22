import renderForm from './renderForm.js';

jQuery(function ($) {
    var formBuilder = $('#fb-editor').formBuilder();

    formBuilder.promise.then(function () {
        $('#explorer-view-tab').on('click', function () {
            var formData = formBuilder.actions.getData('json');
            console.log(formData);
            renderForm("rendered-form", formData);
        });
    }).catch(function (error) {
        console.error("Error loading formBuilder:", error);
    });
});

