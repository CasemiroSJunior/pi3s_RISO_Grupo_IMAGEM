
function formatDocument(input) {
  let value = input.value.replace(/\D/g, '');

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
  }

  input.value = value;
}

function formatCEP(input) {
  let value = input.value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
  input.value = value;
}

function formatPhone(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  }
  input.value = value;
}
