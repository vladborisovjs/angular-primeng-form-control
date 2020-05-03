export const description = {
  general: [
    {
      key: 'cars',
      type: 'select',
      label: {
        ru: 'Тачки',
        en: 'Cars'
      },
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
      placeholder: {
        ru: 'Выберите бургер',
        en: 'Select burger'
      }
    },
    {
      key: 'sause',
      type: 'text',
      label: {
        ru: 'Соус',
        en: 'Sause'
      },
      placeholder: {
        ru: 'Введите соус',
        en: 'Fill in sause'
      }
    },
    {
      key: 'sause_amount',
      type: 'number',
      label: {
        ru: 'Количество соусов',
        en: 'Sauses amount'
      },
      placeholder: {
        ru: 'Введите количество соусов',
        en: 'Fill in sause amount'
      },
      params: {
        minVal: 0,
        maxVal: 100
      },

    },
    {
      key: 'password',
      type: 'password',
      label: {
        ru: 'Пароль',
        en: 'Password'
      },
      placeholder: {
        ru: 'XXXXX,XXX',
        en: 'XXXXX,XXX'
      }
    },
    {
      key: 'comment',
      type: 'textarea',
      label: {
        ru: 'Комменарии',
        en: 'Comments'
      },
      placeholder: {
        ru: 'Введите комментарии',
        en: 'Fill in comment'
      },
      params: {
        rows: 10,
        cols: 40
      }
    }
  ],
  // operations: [
  //   {
  //     key: 'types_operation',
  //     type: 'text',
  //     label: '',
  //     isDisabled: false
  //   },
  //   {
  //     key: 'operation_date',
  //     type: 'datetime',
  //     label: '',
  //     params: {
  //       from: 'дд.мм.гг',
  //       to: 'дд.мм.гг',
  //       defaultRange: 'дд.мм.гг',
  //       isMoscow: true
  //     },
  //     isDisabled: false
  //   }
  // ],
  // delay: [
  //   {
  //     key: 'reasons_delay',
  //     type: 'text',
  //     label: '',
  //     placeholder: {
  //       ru: 'Заполните поле',
  //       en: 'Fill in field'
  //     },
  //     isDisabled: false
  //   },
  //   {
  //     key: 'delay_date_start',
  //     type: 'datetime',
  //     label: '',
  //     params: {
  //       from: 'дд.мм.гг',
  //       to: 'дд.мм.гг',
  //       defaultRange: 'дд.мм.гг',
  //       isMoscow: true
  //     },
  //     isDisabled: false
  //   },
  //   {
  //     key: 'delay_date_end',
  //     type: 'datetime',
  //     label: '',
  //     params: {
  //       from: 'дд.мм.гг',
  //       to: 'дд.мм.гг',
  //       defaultRange: 'дд.мм.гг',
  //       isMoscow: true
  //     },
  //     isDisabled: false
  //   },
  // ]
};

