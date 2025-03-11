
import ServiceCard from './ServiceCard'

function ServiceContainer() {

  const services = [
    {
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam?',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam?',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Service 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam?',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Service 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam?',
      image: 'https://via.placeholder.com/150'
    }
  ]

    return (
      <div>
      <h1 className='text.2xl font-bold text-center pt-4'>Our Services</h1>
      <p className= 'text-gray-400 text-center'>Lorem ipsum dolor sit amet consctur adioisicing elit. Natus magnam?</p>
      <div className='grid grid-cols-4 gap-4 px-20 py-10'>
      {services.map((service,index) => (
        <ServiceCard key={index} service={service} />
      ))}
      </div>

      </div>
    )
  }


export default  ServiceContainer
