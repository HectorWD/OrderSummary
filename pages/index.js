export default function Home() {
  return (
    <div
      className="h-screen bg-[url('/img/pattern-background-desktop.svg')] bg-cover flex justify-center items-center"
    >
      <div className="w-4/5 bg-white rounded-md h-3/4 sm:w-3/5 sm:h-3/5 md:w-2/4 md:h-4/5 lg:w-1/4">
        <img
          src="img/illustration-hero.svg"
          className="box-content w-full rounded-t-md"
        />
        <div className="flex-col mx-4 my-6 text-center">
          <h3 className="my-4 font-black sm:text-xl">Order Summary</h3>
          <span className="font-semibold text-slate-400 sm:text-lg">
            You can now listen to millons of songs,
            audiobooks, and podcasts on any divice
            anywhere you like!
          </span>
          <div className="flex flex-row items-center justify-around py-4 my-4 rounded-md bg-slate-100 sm:py-7">
            <img
              src="img/icon-music.svg"
              className="sm:scale-125"
            />
            <div>
              <h4 className="text-lg font-semibold">Annual Plan</h4>
              <p className="text-lg text-slate-500">$59.99/year</p>
            </div>
            <a href="#" className="text-lg font-semibold underline text-violet-800 decoration-solid">Change</a>
          </div>
          <button className="px-8 py-2 mb-2 font-semibold text-white rounded-md sm:w-3/4 sm:py-4 bg-violet-500 sm:text-lg">Proceed to Payment</button><br />
          <button className="px-8 py-2 font-semibold rounded-md sm:w-3/4 sm:py-4 text-slate-500 sm:text-lg">Cancel Order</button>

        </div>
      </div>
    </div>
  )
}
