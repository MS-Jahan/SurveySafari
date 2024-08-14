jQuery(function ($) {
    // Initialize the formBuilder
    var formBuilder = $('#fb-editor').formBuilder();

    // Function to render the form in Explorer View
    function renderForm() {
        var formData = formBuilder.actions.getData('json'); // Get the form data as JSON
        if (formData && Object.keys(formData).length > 2) {
            console.log(formData);
            $('#rendered-form').formRender({
                formData: formData
            });
        }
        else {
            $('#rendered-form').html('<div class="text-center my-5 py-5"><h1>No Fields Added !!!</h1></div>');
        }
    }

    // Trigger the rendering of the form when the "Explorer View" tab is clicked
    $('#explorer-view-tab').on('click', function () {
        renderForm();
    });
});