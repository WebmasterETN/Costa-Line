class AppForms extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="__section__form-cotiza"> 
      <form class="dynamic-form">
        <p>Cargando formulario...</p>
      </form>
    </div>
    `;
  }

  setFormData(formDataJson) {
    const formContainer = this.querySelector('.dynamic-form');
    if (!formContainer) {
      console.error("Contenedor de formulario '.dynamic-form' no encontrado en app-forms.");
      return;
    }

    if (formDataJson) {
      this.renderForm(formDataJson);
    } else {
      console.error("No se proporcionaron datos para el formulario en setFormData.");
      if (formContainer) {
        formContainer.innerHTML = '<p class="error-message">No se proporcionaron datos para generar el formulario.</p>';
      }
    }
  }

 renderForm(formDataJson) {
    const formContainer = this.querySelector('.dynamic-form');
    if (!formContainer) return;
    
    if (!Array.isArray(formDataJson) || formDataJson.length === 0) {
      console.error("Datos del formulario no válidos o vacíos:", formDataJson);
      formContainer.innerHTML = '<p class="error-message">No hay campos de formulario para mostrar o los datos son incorrectos.</p>';
      return;
    }
    
    formContainer.innerHTML = ''; // Limpiar mensaje de carga

    formDataJson.forEach((field, index) => {
      const fieldWrapper = document.createElement('div');
      fieldWrapper.classList.add('form-field-group');

      const label = document.createElement('label');
      const inputId = `field-${field.name || index}`;
      label.setAttribute('for', inputId);
      label.textContent = field.pregunta;
      fieldWrapper.appendChild(label);

      let inputElement;
      if (field.tipo === 'textarea') {
        inputElement = document.createElement('textarea');
      } else if (field.tipo === 'select') { // Manejo básico para select
        inputElement = document.createElement('select');
        if (field.opciones && Array.isArray(field.opciones)) {
          if (field.ejemplo && field.ejemplo.toLowerCase().includes('selecciona')) {
            const defaultOption = document.createElement('option');
            defaultOption.value = "";
            defaultOption.textContent = field.ejemplo;
            defaultOption.disabled = true;
            defaultOption.selected = true;
            inputElement.appendChild(defaultOption);
          }
          field.opciones.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            inputElement.appendChild(optionElement);
          });
        }
      }
      else {
        inputElement = document.createElement('input');
        inputElement.type = field.tipo;
        if (field.tipo === 'file' && field.accept) {
          inputElement.setAttribute('accept', field.accept);
        }
      }

      inputElement.id = inputId;
      inputElement.name = field.name || `input_${index}`;
      if (field.ejemplo && field.tipo !== 'select' && field.tipo !== 'file') {
          inputElement.placeholder = field.ejemplo;
      }
      if (field.requerido) {
        inputElement.required = true;
      }

      fieldWrapper.appendChild(inputElement);
      formContainer.appendChild(fieldWrapper);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';
    submitButton.classList.add('submit-button');
    formContainer.appendChild(submitButton);

  }
}
customElements.define("app-forms", AppForms);