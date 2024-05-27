import fakeFlightData from '@/assets/fakeFlightData'
import Image from 'next/image'
import activeLocation from '@/assets/icons/locationactive.svg'
import deactiveLocation from '@/assets/icons/location.svg'
import airlineLogo from '@/assets/icons/airlineicon.svg'
import warningIcon from '@/assets/icons/info.svg'
import StepLine from '@/components/StepLine'
import BreadCumbs from '@/components/BreadCumbs'

export default function Index() {
  return (
    <div className='mt-1'>
      <BreadCumbs />
      <div className='mt-5 bg-white rounded-lg shadow-lg py-6'>
        <div className='pl-6 pr-4 pb-4'>
          <div className='flex-between w-full'>
            <div className='flex-center gap-4'>
              <div className='flex-center justify-center text-white rounded-full size-6 bg-primary'>
                1
              </div>
              <div>
                <h2 className='font-medium text-lg text-heading'>DAC → JFK</h2>
                <p className='text-block text-sm font-light'>
                  Round Trip · 25 Mar - 4 Apr 2023 · 1 Stop
                </p>
              </div>
            </div>
            <div className='bg-[#E8F3FF] text-primary text-xs px-2 py-1 rounded-full'>
              33h 30m
            </div>
          </div>
        </div>
        <hr className='border-t border-block/20' />
        <div className='px-4 py-6'>
          {fakeFlightData.map((item, idx) => (
            <div key={idx}>
              {item.type === 'flightinfo' ? (
                <div>
                  <div className='flex-center ml-[5px] pb-2'>
                    <Image
                      src={airlineLogo}
                      alt='airline logo'
                      height={32}
                      width={32}
                    />
                    <div className='grid grid-cols-3 w-full ml-3'>
                      <div>
                        <h2 className='font-medium text-lg'>{item.flight}</h2>
                        <p className='text-block font-light'>{item.duration}</p>
                      </div>
                      <div>
                        <h2 className='font-medium text-lg'>{item.timeFrom}</h2>
                        <p className='text-block font-light'>{item.dateFrom}</p>
                      </div>
                      <div>
                        <h2 className='font-medium text-lg'>{item.timeTo}</h2>
                        <p className='text-block font-light'>{item.dateTo}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex-center ${
                      item.warn ? 'h-[150px]' : 'h-20'
                    }`}
                  >
                    <StepLine />
                    <div className='w-full ml-3 -mt-4'>
                      <div className='grid grid-cols-3 w-full pb-2'>
                        <div>
                          <h5
                            className='text-block'
                            style={{ fontWeight: 420 }}
                          >
                            {item.airlineName}
                          </h5>
                          <p className='text-block font-light'>
                            Flight no : {item.flightNo}
                          </p>
                        </div>
                        <div>
                          <p className='text-block font-light'>
                            Airbus Industrie {item.airbusSerial}
                          </p>
                          <p className='text-block font-light'>
                            Class :{' '}
                            <span style={{ fontWeight: 420 }}>
                              {item.class}
                            </span>
                          </p>
                        </div>
                      </div>
                      {item.warn && (
                        <div className='mt-3 bg-[#ffeedb] w-full flex items-center gap-2 border border-[#ffe1c2] rounded-[6px] py-2 px-3'>
                          <Image
                            src={warningIcon}
                            alt='alert'
                            width={20}
                            height={20}
                          />
                          <span className='text-xs font-light'>
                            {item.warn}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='flex items-center mb-4'>
                  <Image
                    src={item.isActive ? activeLocation : deactiveLocation}
                    alt='location status'
                    className='ml-2 mr-4'
                    width={25}
                    height={25}
                  />
                  <div
                    className={`p-3 rounded-md flex items-center justify-between w-full ${
                      item.customBg ? `bg-[${item.customBg}]` : 'bg-[#F5F7FA]'
                    }`}
                  >
                    <p className='font-normal text-sm'>{item.info}</p>
                    <div className='text-sm text-block font-light'>
                      {item.terminal?.terminalNumber ? (
                        <span className='font-normal'>
                          {item.terminal?.terminalNumber}:{' '}
                        </span>
                      ) : null}
                      <span>{item.terminal?.terminalName}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
