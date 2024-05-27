import { TFlightData } from '..'

const fakeFlightData: TFlightData[] = [
  {
    type: 'flightstate',
    info: 'Departure from Dhaka',
    terminal: {
      terminalNumber: 'Terminal 1',
      terminalName: 'Hazrat Shahjalal International Airport'
    },
    isActive: false
  },
  {
    type: 'flightinfo',
    duration: '12 hr 20 min',
    timeFrom: '07:30 PM',
    dateFrom: '28 Mar, Friday',
    timeTo: '08:50 AM',
    dateTo: '29 Mar, Saturday',
    flight: 'DAC - DXB',
    airlineName: 'Turkish Airlines',
    flightNo: 'TUR467',
    airbusSerial: '737-800-738',
    class: 'ECONOMY-Y (0)',
    icon: './icons/airlineicon.svg',
    warn: 'Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality'
  },
  {
    type: 'flightstate',
    info: 'Layover at Dubai: 12 hr 20 min',
    customBg: '#E8F3FF',
    terminal: {
      terminalName: 'Dubai International Airport'
    },
    isActive: false
  },
  {
    type: 'flightinfo',
    duration: '12 hr 20 min',
    timeFrom: '07:30 PM',
    dateFrom: '28 Mar, Friday',
    timeTo: '08:50 AM',
    dateTo: '29 Mar, Saturday',
    flight: 'DAC - DXB',
    airlineName: 'Turkish Airlines',
    flightNo: 'TUR467',
    airbusSerial: '737-800-738',
    class: 'ECONOMY-Y (0)',
    icon: './icons/airlineicon.svg'
  },
  {
    type: 'flightstate',
    info: 'Destination at New York',
    terminal: {
      terminalNumber: 'Terminal 4',
      terminalName: 'John F Kennedy International Airport'
    },
    isActive: true
  }
]

export default fakeFlightData
