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
      placeholder: 'Выберите',
    },
    {
      key: 'carsSearch',
      type: 'select',
      label: 'Select with search',
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
      key: 'multiCars',
      type: 'multiSelect',
      label: 'multiSelect',
      options: [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
      ],
      params: {
        defaultLabel: 'Метка по умолчанию',
      },
      placeholder: 'Выберите тачку',
    },
    {
      key: 'sause',
      type: 'text',
      label: 'InputText',
      placeholder: 'Введите соус',
      params: {
        pKeyFilter: 'pint'
      }
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
      type: 'triCheckbox',
      label: 'Tricheckbox',
    },
    {
      key: 'switch',
      type: 'inputSwitch',
      label: 'Переключалочка'
    },
    {
      key: 'mask',
      type: 'mask',
      label: 'Маска',
      placeholder: '8(800)___-__-__',
      params: {
        mask: '8(800)999-99-99'
      }
    }
  ]
};

