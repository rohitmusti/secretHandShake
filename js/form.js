
const isValidElement = element => {
  return element.name && element.value
}

const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked)
};

const isCheckbox = element => element.type === 'checkbox'
const isMultiSelect = element => element.options && element.multiple;
const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);

const formToJSON_deconstructed = elements => {

  const reducerFunction = (data, element) => {

    // Add the current field to the object.
    data[element.name] = element.value;

    // For the demo only: show each step in the reducer’s progress.
    console.log(JSON.stringify(data));

    return data;
  };
  const reducerInitialValue = {};
  console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
  const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

  return formData;
};

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {
    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value);
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element);
    } else {
      data[element.name] = element.value;
    }
  }

  return data;
}, {});

const handleFormSubmit = event => {
  event.preventDefault();

  const data = formToJSON(form.elements);
  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(data, null, "  ");
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
