import React from 'react'
import Image from 'next/image';

const THeader = () => {
  return (
    <div className='t_header gap-4'>
       
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/icon_water_for_all.svg"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
    Water for life
  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/icon_zacat.svg"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Zakat
  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/icon_sadaqah.svg"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Sadaqah
  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/icon_build_a_mosque.svg"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Masjid builds
  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/icon_needy.svg"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Most Needy
  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/flag_ag.png"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Afganistan
  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/flag_ps.png"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Palestine

  </div>
  <div className='flex group cursor-pointer text-sm hover:scale-[1.01]  transistion hover:text-[#00ADE9] text-white font-[600] flex-col items-center gap-1 '>
 <div className=" p-1 group-hover:scale-[1.03] transistion w-[74px] h-[74px] rounded-full border border-white bg-[#006BA3]">
    <div className="w-full h-full rounded-full bg-[#00ADE9] flex items-center justify-center">
 <Image
      src="/icon_orphan-color.svg"
      width={26}
      height={26}
      alt="Picture of the author"
    />
    </div>

 </div>
 Orphan
  </div>

</div>
  
  )
}

export default THeader