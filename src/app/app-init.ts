export const description = {
  general: [
    {
      key: 'cars',
      type: 'select',
      label: 'Select',
      options: [
        {name: 'Audi', value: 'Audi'},
        {name: 'BMW', value: 'BMW'},
        {name: 'Fiat', value: 'Fiat'},
        {name: 'Ford', value: 'Ford'},
        {name: 'Honda', value: 'Honda'},
        {name: 'Jaguar', value: 'Jaguar'},
        {name: 'Mercedes', value: 'Mercedes'},
        {name: 'Renault', value: 'Renault'},
        {name: 'VW', value: 'VW'},
        {name: 'Volvo', value: 'Volvo'}
      ],
      params: {
        filter: true,
        showClear: true
      },
      placeholder: 'Выберите',
    },
    {
      key: 'sause',
      type: 'text',
      label: 'InputText',
      placeholder: 'Введите соус',
    },
    {
      key: 'sause_amount',
      type: 'number',
      label: 'Spinner',
      placeholder: 'Введите количество соусов',
      params: {
        minVal: 0,
        maxVal: 100,
        step: 0.25
      },
    },
    {
      key: 'password',
      type: 'password',
      label: 'Password',
    },
    {
      key: 'comment',
      type: 'textarea',
      label: 'Textarea',
      placeholder: 'Введите комментарии',
      params: {
        rows: 10,
        cols: 40
      }
    },
    {
      key: 'check',
      type: 'checkbox',
      label: 'Checkbox',
    },
    {
      key: 'tricheck',
      type: 'tricheckbox',
      label: 'Tricheckbox',
    }
  ]
};

