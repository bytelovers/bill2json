module.exports = [{
    id: 4,
    label: 'bill',
    description: '',
    path: 'bill.id'
  },
  {
    id: 7,
    label: 'date',
    description: '',
    path: 'bill.date'
  },
  {
    id: 15,
    label: 'product',
    description: '',
    path: 'product.name'
  },
  {
    id: 16,
    label: 'volume',
    description: 'volumen en litros',
    path: 'product.qty'
  },
  {
    id: 17,
    label: 'price_l',
    description: 'precio por litro',
    path: 'product.price'
  },
  {
    id: 18,
    label: 'price_total',
    description: 'total price',
    path: 'product.total'
  },
  {
    id: 32,
    label: 'station_name',
    description: '',
    path: 'station.name'
  },
  {
    id: 38,
    label: 'station_place',
    description: '',
    path: 'station.place'
  },
  {
    id: 53,
    label: 'tax_percent',
    description: '',
    path: 'bill.tax.percent',
    regex: /\d*\.?\d+/
  },
  {
    id: 54,
    label: 'tax_base',
    description: '',
    path: 'bill.tax.base',
    regex: /\d*\.?\d+/
  },
  {
    id: 55,
    label: 'tax_value',
    description: '',
    path: 'bill.tax.value',
    regex: /\d*\.?\d+/
  },
  {
    id: 61,
    label: 'payment_method',
    description: '',
    path: 'payment.method.name'
  },
  {
    id: 77,
    label: 'payment_reference',
    description: '',
    path: 'payment.method.reference'
  },
  {
    id: 81,
    label: 'payment_tsq',
    description: '',
    path: 'payment.method.tsq'
  },
  {
    id: 85,
    label: 'payment_cashier',
    description: '',
    path: 'payment.cashier'
  }
];
