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
      required: true
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
      required: true
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
      placeholder: 'Поиск',
      required: true
    },
    {
      key: 'sause',
      type: 'text',
      label: 'InputText',
      placeholder: 'Введите соус',
      disabled: true,
      required: true,
      params: {
        pKeyFilter: 'pint'
      }
    },
    {
      key: 'sause_amount',
      type: 'number',
      label: 'Spinner',
      placeholder: 'Введите',
      disabled: true,
      required: true,
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
      disabled: true,
      required: true
    },
    {
      key: 'comment',
      type: 'textarea',
      label: 'Textarea',
      placeholder: 'Введите комментарии',
      disabled: true,
      required: true,
      params: {
        rows: 10,
        cols: 40
      }
    },
    {
      key: 'check',
      type: 'checkbox',
      label: 'Checkbox',
      disabled: true,
      required: true
    },
    {
      key: 'tricheck',
      type: 'triCheckbox',
      label: 'Tricheckbox',
      disabled: true,
      required: true
    },
    {
      key: 'switch',
      type: 'inputSwitch',
      label: 'Переключалочка',
      disabled: true,
      required: true
    },
    {
      key: 'mask',
      type: 'mask',
      label: 'Маска',
      placeholder: '8(800)___-__-__',
      disabled: true,
      required: true,
      params: {
        mask: '8(800)999-99-99'
      }
    },
    {
      key: 'startDate',
      type: 'calendar',
      label: 'Дата начала',
      disabled: true,
      params: {
        minDate: new Date(),
        maxDate: new Date()
      }
    }
  ]
};

