// assets/js/formBuilder/renderForm.js

function renderForm(container_id, formData) {
    if (formData && Object.keys(formData).length > 2) {
        $(`#${container_id}`).formRender({
            formData: formData
        });
    }
    else {
        $(`#${container_id}`).html('<div class="text-center my-5 py-5"><h1>No Fields Added !!!</h1></div>');
    }
}

export default renderForm;