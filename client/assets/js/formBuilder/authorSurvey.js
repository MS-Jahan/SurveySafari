import renderForm from 'renderForm';

jQuery(function ($) {
    // Initialize the formBuilder
    var formBuilder = $('#fb-editor').formBuilder();
    var formData = formBuilder.actions.getData('json'); // Get the form data as JSON

    // Trigger the rendering of the form when the "Explorer View" tab is clicked
    $('#explorer-view-tab').on('click', function () {
        renderForm("rendered-form", formData);
    });
});