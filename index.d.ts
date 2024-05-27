export type TFlightState = {
  type: 'flightstate' | 'flightinfo'
  info: string
  isActive: boolean
  customBg: string
  terminal: {
    terminalNumber?: string
    terminalName: string
  }
}

export type TFlightInfo = {
  type: 'flightstate' | 'flightinfo'
  duration: string
  timeFrom: string
  dateFrom: string
  timeTo: string
  dateTo: string
  flight: string
  airlineName: string
  flightNo: string
  airbusSerial: string
  class: string
  icon: string
  info: string
  warn: string
}

export type TFlightData = Partial<TFlightState> & Partial<TFlightInfo>
