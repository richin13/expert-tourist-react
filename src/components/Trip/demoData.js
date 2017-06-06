export const placeData = [
  {
    id: '1',
    name: 'Mirador de Orosi',
    type: 'Mirador',
    location: 'Cartago, Paraíso, Orosi',
    area: 'Montaña',
    phone: 'N/A',
    lat: 9.819109774953,
    long: -83.85875573381782
  },
  {
    id: '2',
    name: 'Balneario los Patios',
    type: 'Aguas Temperadas Balneario / Piscina',
    location: 'Cartago, Paraíso, Orosi',
    area: 'Rural / Pueblo',
    phone: '2533-3009',
    lat: 9.785476942927431,
    long: -83.84557804092765
  },
  {
    id: '3',
    name: 'Balneario de Aguas Termales Orosi',
    type: 'Aguas Temperadas Balneario / Piscina',
    location: 'Cartago, Paraíso, Orosi',
    area: 'Rural / Pueblo',
    phone: '2533-2156',
    lat: 9.795781545026705,
    long: -83.85708904279454
  },
  {
    id: '4',
    name: 'Parque Nacional Tapantí Macizo de la Muerte',
    type: 'Parque Nacional',
    location: 'Cartago, Paraíso, Orosi',
    area: 'Montaña',
    phone: '2206-5615',
    lat: 9.760526978118497,
    long: -83.7843700312078
  }
]

export const destinations = {
  origin: {lat: 9.8408317, lng: -83.8737972},
  destination: {lat: 9.785476942927431, lng: -83.84557804092765},
  stops: [
    { location: {lat: 9.819109774953, lng: -83.85875573381782}, stopover: true },
    { location: {lat: 9.795781545026705, lng: -83.85708904279454}, stopover: true },
    { location: {lat: 9.760526978118497, lng: -83.7843700312078}, stopover: true },
  ]
}
