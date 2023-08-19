import { Button } from "@/components";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative w-full h-full" style={{ zIndex: -1, left: '55%', bottom: '5rem' }}>
          <img src="/images/hero-bg.png" style={{ height: '45rem' }} />
        </div>
      </div>
      <div className="section-banner absolute top-0 left-10 sm:h-60 md:h-3/4 flex">
        <div className="flex-1 flex items-center">
          <div>
            <h1 className="title-banner">Find, book or rent a car, quickly and easily!</h1>
            <h2 className="sub-title-banner">Streamline your car rental experien with our effortless booking process.</h2>
            <div className="mt-10">
              <Button width="140px" color="accent">Explore More</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <img src="/images/hero.png" />
        </div>
      </div>
      <div className="px-10">

      </div>
    </>
  )
}
