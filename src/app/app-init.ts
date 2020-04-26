export const description = {
  general: [
    {
      key: 'captain',
      type: 'select',
      label: {
        ru: 'Капитан',
        en: 'Captain'
      },
      options: [],
      placeholder: {
        ru: 'Выберите капитана',
        en: 'Select captain'
      }
    },
    {
      key: 'ship',
      type: 'select',
      label: {
        ru: 'Судно',
        en: 'Ship\'s'
      },
      options: [],
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      }
    },
    {
      key: 'date',
      type: 'datetime',
      label: {
        ru: 'Дата',
        en: 'Date'
      },
      params: {
        from: 'дд.мм.гг',
        to: 'дд.мм.гг',
        defaultRange: 'дд.мм.гг',
        isMoscow: true
      },
      isDisabled: true
    },
    {
      key: 'voyage_number',
      type: 'text',
      label: {
        ru: 'Номер рейса',
        en: 'Voyage number'
      },
      placeholder: {
        ru: 'XXXXXXXXX',
        en: 'XXXXXXXXX'
      }
    },
    {
      key: 'process',
      type: 'select',
      label: {
        ru: 'Процесс',
        en: 'Process'
      },
      options: [],
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      }
    },
    {
      key: 'charterer',
      type: 'select',
      label: {
        ru: 'Фрахтователь',
        en: 'Charterer'
      },
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      },
      options: [],
    },
    {
      key: 'port',
      type: 'select',
      label: {
        ru: 'Порт',
        en: 'Port'
      },
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      },
      options: [],
    },
    {
      key: 'terminal',
      type: 'select',
      label: {
        ru: 'Терминал',
        en: 'Terminal'
      },
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      },
      options: [],
    },
    {
      key: 'cargo',
      type: 'select',
      label: {
        ru: 'Груз',
        en: 'Cargo'
      },
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      },
      options: [],
    },
    {
      key: 'quantity_SWB',
      type: 'number',
      label: {
        ru: 'Коносам. количество',
        en: 'Quantity SWB'
      },
      metric: {
        ru: '(тн VAC)',
        en: '(mt VAC)'
      },
      placeholder: {
        ru: 'XXXXX,XXX',
        en: 'XXXXX,XXX'
      }
    },
    {
      key: 'average_rate',
      type: 'number',
      label: {
        ru: 'Средняя произв. грузов. операции',
        en: 'Average rate'
      },
      metric: {
        ru: `(м³/ч)`,
        en: `(m³/h)`
      },
      placeholder: {
        ru: 'XXXX',
        en: 'XXXX'
      }
    }
  ],
  manifolds: [
    {
      key: 'manifold_type',
      type: 'select',
      label: {
        ru: 'Тип',
        en: 'Type'
      },
      options: [],
      placeholder: {
        ru: ' Выбор из списка',
        en: 'Select from list'
      },
    },
    {
      key: 'manifold_amount',
      type: 'number',
      label: {
        ru: 'Кол-во',
        en: 'Nr'
      },
      placeholder: {
        ru: 'Введите количество манифольд',
        en: 'Fill in manifold amount'
      }
    },
    {
      key: 'manifold_diameter',
      type: 'number',
      label: {
        ru: 'Диаметр',
        en: 'Diameter'
      },
      placeholder: {
        ru: 'Введите диаметр',
        en: 'Fill in diameter'
      },
      metric: {
        ru: 'см',
        en: 'sm'
      }
    }
  ],
  bunkering: [
    {
      key: 'bunkering_masut',
      type: 'number',
      label: {
        ru: 'Мазут',
        en: 'VLSFO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'bunkering_diesel',
      type: 'number',
      label: {
        ru: 'Дизель',
        en: 'MGO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'bunkering_water',
      type: 'number',
      label: {
        ru: 'Вода',
        en: 'FW'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    }
  ],
  ship_representative: [
    {
      key: 'representative_ship_position',
      type: 'text',
      label: {
        ru: 'Должность',
        en: 'Position'
      },
      placeholder: {
        ru: 'Введите должность',
        en: 'Fill in position'
      }
    },
    {
      key: 'representative_ship_full_name',
      type: 'text',
      label: {
        ru: 'Ф.И.О',
        en: 'Full name'
      },
      placeholder: {
        ru: 'Введите Ф.И.О',
        en: 'Fill in full name'
      }
    }
  ],
  terminal_representative: [
    {
      key: 'representative_terminal_position',
      type: 'text',
      label: {
        ru: 'Должность',
        en: 'Position'
      },
      placeholder: {
        ru: 'Введите должность',
        en: 'Fill in position'
      }
    },
    {
      key: 'representative_terminal_full_name',
      type: 'text',
      label: {
        ru: 'Ф.И.О',
        en: 'Full name'
      },
      placeholder: {
        ru: 'Введите Ф.И.О',
        en: 'Fill in full name'
      }
    }
  ],
  arrival_fuel: [
    {
      key: 'arrival_fuel_masut',
      type: 'number',
      label: {
        ru: 'Мазут',
        en: 'IFO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'arrival_fuel_masut',
      type: 'number',
      label: {
        ru: 'Мазут',
        en: 'IFO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'arrival_fuel_diesel',
      type: 'number',
      label: {
        ru: 'Дизель',
        en: 'MGO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'arrival_fuel_water',
      type: 'number',
      label: {
        ru: 'Вода',
        en: 'FW'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    }
  ],
  arrival_drafts: [
    {
      key: 'arrival_drafts_tn',
      type: 'number',
      label: {
        ru: 'Тн',
        en: 'Tf'
      },
      placeholder: {
        ru: 'X,XX',
        en: 'X,XX'
      },
      metric: {
        ru: 'м',
        en: 'm'
      }
    },
    {
      key: 'arrival_drafts_tk',
      type: 'number',
      label: {
        ru: 'Тк',
        en: 'Ta'
      },
      placeholder: {
        ru: 'X,XX',
        en: 'X,XX'
      },
      metric: {
        ru: 'м',
        en: 'm'
      }
    }
  ],
  departure_fuel: [
    {
      key: 'departure_fuel_masut',
      type: 'number',
      label: {
        ru: 'Мазут',
        en: 'IFO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'departure_fuel_masut',
      type: 'number',
      label: {
        ru: 'Мазут',
        en: 'IFO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'departure_fuel_diesel',
      type: 'number',
      label: {
        ru: 'Дизель',
        en: 'MGO'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    },
    {
      key: 'departure_fuel_water',
      type: 'number',
      label: {
        ru: 'Вода',
        en: 'FW'
      },
      placeholder: {
        ru: 'XXX,X',
        en: 'XXX,X'
      },
      metric: {
        ru: 'т',
        en: 't'
      }
    }
  ],
  departure_drafts: [
    {
      key: 'departure_drafts_tn',
      type: 'number',
      label: {
        ru: 'Тн',
        en: 'Tf'
      },
      placeholder: {
        ru: 'X,XX',
        en: 'X,XX'
      },
      metric: {
        ru: 'м',
        en: 'm'
      }
    },
    {
      key: 'departure_drafts_tk',
      type: 'number',
      label: {
        ru: 'Тк',
        en: 'Ta'
      },
      placeholder: {
        ru: 'X,XX',
        en: 'X,XX'
      },
      metric: {
        ru: 'м',
        en: 'm'
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

