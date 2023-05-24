import image1 from '../assets/pexels-kampus-production-7551627.jpg'
import image2 from '../assets/pexels-kampus-production-7551618.jpg'

const Cards = () => {
  return (
    <div className="max-container flex lg:flex-col justify-between lg:my-[100px] sm:my-0 gap-10">
        <div className='flex-1 bg-black/50 rounded-xl'>
            <img src={image1} alt="" className='w-[100%] rounded-t-xl'/>
            <div className="flex flex-col p-5 leading-8 gap-[30px] items-center">
                <p className="text-white font-bold text-[20px] sm:text-[20px] lg:text-[30px] lg:leading-[1.6]">Hope Care Agency is a care provider with several services available to suit your needs. When you are the one who is in charge of taking care of a loved one, you are likely to find that there are lots of decisions that need to be made regarding their care, and because of this, you will always want to make sure that you make the best possible choice for their needs. </p>
                <p className="text-white font-bold text-[20px] sm:text-[20px] lg:text-[30px] lg:leading-[1.6]">With these decisions being so important, you may find that getting the right help can make all the difference, and we are on hand to provide this exact kind of service and help.</p>
            </div>
        </div>
        <div className='flex-1 bg-black/50 rounded-xl'>
        <img src={image2} alt="" className='w-[100%] rounded-t-xl'/>
            <div className="flex flex-col p-5  leading-8 gap-[30px] items-center">
                <p className="text-white font-bold text-[20px] sm:text-[20px] lg:text-[30px] lg:leading-[1.6]">Our team have a range of services available, from casual support to medical support and daily living assistance. This means that no matter what the needs of your loved one maybe, you will find that we have a service that can meet those needs perfectly. </p>
                <p className="text-white font-bold text-[20px] sm:text-[20px] lg:text-[30px] lg:leading-[1.6]">Hiring our team to do this will help to put your mind at rest, as this means that you will know for sure that your loved one is getting all the help that they need. If you are interested in this service for your loved one, just contact us and we will have a chat about the requirements and the services we have that might match.</p>
            </div>
        </div>
    </div>
  )
}

export default Cards