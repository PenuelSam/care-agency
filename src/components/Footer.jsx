import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
const Footer = () => {
  return (
    <div className="w-full bgc2 p-[40px]">
        <div className='flex flex-col  justify-between items-center'>
          <div className='flex lg:flex-col sm:gap-[100px]  gap-[200px]'>
          <div className='flex gap-5'>
            <LocationOnOutlinedIcon sx={{fontSize: "30px", color: "#fff"}}/>
            <div>
              <h1 className='text-[20px] sm:text-[20px] lg:text-[30px] font-bold text-white'>Address</h1>
              <p className='text-[15px] sm:text-[15px] lg:text-[20px] text-white font-bold w-52'>Canalside House Office 1 383 Ladbroke Grove, London W10 5AA</p>
            </div>
        </div>
        <div className='flex gap-5'>
          <CallOutlinedIcon sx={{fontSize: "40px", color: "#fff"}} />
          <div>
            <h1 className='text-[30px] sm:text-[30px] lg:text-[40px] font-bold text-white'>Telephone</h1>
            <span className='text-[20px] sm:text-[20px] lg:text-[30px] text-white font-bold'>030 8860 1901</span>
          </div>
        </div>
        <div className='flex gap-5'>
          <MailOutlinedIcon sx={{fontSize: "40px", color: "#fff"}} />
          <div>
            <h1 className='text-[30px] sm:text-[30px] lg:text-[40px] font-bold text-white'>Email</h1>
             <span className='text-[20px] sm:text-[20px] lg:text-[30px] text-white font-bold'>info@homeagency.co.uk</span>
          </div>
        </div>
          </div>
        <span className='text-[20px] sm:text-[20px] lg:text-[30px] text-white font-bold flex justify-center items-center mt-11'>&copy;Home Care Agency</span>
        </div>
        
    </div>
  )
}

export default Footer