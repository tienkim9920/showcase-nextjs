'use client';
import { Button, TextField } from "@/components";
import { IcCarLogo } from "@/public/icons/IcCarLogo";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative w-full h-full" style={{ zIndex: -1, left: '55%', bottom: '5rem' }}>
          <img src="/images/hero-bg.png" style={{ height: '45rem' }} />
        </div>
      </div>
      <div className="section-banner absolute top-0 left-10 sm:h-60 md:h-4/6 flex">
        <div className="flex-1 flex items-end">
          <div>
            <h1 className="title-homepage w-4/6">Find, book or rent a car, quickly and easily!</h1>
            <h2 className="sub-title-homepage w-4/6">Streamline your car rental experien with our effortless booking process.</h2>
            <div className="mt-10">
              <Button width="140px" color="accent">Explore More</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-end">
          <img src="/images/hero.png" />
        </div>
      </div>
      <div className="px-10">
        <div>
          <div className="title-catalogue">Car Catalogue</div>
          <div className="sub-title-catalogue">Explore the cars you might like</div>
        </div>
        <div className="flex mt-5" style={{ columnGap: '.5rem'}}>
          <TextField
            color="accent"
            width="300px"
            height="40px"
            placeholder="Enter Search Here!"
            startIcon={<IcCarLogo width="24px" height="24px" />}
          />
          <Button width="100px" height="40px" color="accent">Search</Button>
        </div>
      </div>
    </>
  )
}
