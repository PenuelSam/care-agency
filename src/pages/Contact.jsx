import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-[50px] text-center mt-[50px] pt-[20px] font-bold mb-[200px]">Contact Us</h1>
      <div className="bg-white py-[30px]">
        <div className="max-container flex justify-between items-center">  
        <div className='flex lg:hidden flex-col gap-[100px]'>
        <div className='flex gap-5'>
            <LocationOnOutlinedIcon sx={{fontSize: "40px", color: "#0000FF"}}/>
            <div>
              <h1 className='text-[30px] font-bold '>Address</h1>
              <p className='text-[20px]  font-bold w-52'>Canalside House Office 1 383 Ladbroke Grove, London W10 5AA</p>
            </div>
        </div>
        <div className='flex gap-5'>
          <CallOutlinedIcon sx={{fontSize: "40px", color: "#0000FF"}} />
          <div>
            <h1 className='text-[30px] font-bold'>Telephone</h1>
            <span className='text-[20px] font-bold'>030 8860 1901</span>
          </div>
        </div>
        <div className='flex gap-5'>
          <MailOutlinedIcon sx={{fontSize: "40px", color: "#0000FF"}} />
          <div>
            <h1 className='text-[30px] font-bold'>Email</h1>
             <span className='text-[20px] font-bold'>info@homeagency.co.uk</span>
          </div>
        </div>
        </div>
        <div className="w-[700px] p-[30px] bg-gray-100">
        <form>
            <div className="flex flex-col">
            <label className="text-[20px] font-bold py-3">Name *</label>
            <input type="text" className="outline-none rounded-md h-[40px]"/>
            </div>
            <div className="flex flex-col">
            <label className="text-[20px] font-bold py-3">Phone *</label>
            <input type="number" className="outline-none rounded-md h-[40px]"/>
            </div>
            <div className="flex flex-col">
            <label className="text-[20px] font-bold py-3">Email *</label>
            <input type="email" className="outline-none rounded-md h-[40px]" />
            </div>
            <div className="flex flex-col">
            <label className="text-[20px] font-bold py-3">Message *</label>
            <textarea name="" id="" cols="30" rows="10" className="outline-none rounded-sm"></textarea>
            </div>
            <div className="flex justify-end mt-5">
            <button type="submit" className="px-5 py-3 rounded-md text-white bgc">Send</button>
            </div>
          </form> 
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact