export function handleId(
  event: React.ChangeEvent<HTMLInputElement>,
  setUpdatingValue: any,
  updatingValue: any
) {
  const eventValue = event.target.value;

  switch (event.target.id) {
    case 'name':
      setUpdatingValue({
        ...updatingValue,
        name: eventValue
      });
      break;

    case 'email':
      setUpdatingValue({
        ...updatingValue,
        email: eventValue
      });
      break;

    case 'phone':
      setUpdatingValue({
        ...updatingValue,
        phone: eventValue
      });
      break;

    case 'cep':
      setUpdatingValue({
        ...updatingValue,
        cep: eventValue
      });
      break;

    case 'district':
      setUpdatingValue({
        ...updatingValue,
        district: eventValue
      });
      break;

    case 'street':
      setUpdatingValue({
        ...updatingValue,
        street: eventValue
      });
      break;

    case 'number':
      setUpdatingValue({
        ...updatingValue,
        number: eventValue
      });
      break;

    case 'city':
      setUpdatingValue({
        ...updatingValue,
        city: eventValue
      });
      break;

    case 'state':
      setUpdatingValue({
        ...updatingValue,
        state: eventValue
      });
      break;

    case 'cpf':
      setUpdatingValue({
        ...updatingValue,
        cpf: eventValue
      });
      break;

    default:
      break;
  }
}
