import React from 'react'

function HeadlineCards() {
  return (
    <div className="max-x-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* {Card} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black-50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute buttom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>

      {/* {Card} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black-50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute buttom-4">
            Order now
          </button>
        </div>
        { <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/9673721/pexels-photo-9673721.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        /> }
      </div>

      {/* {Card} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black-50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            We Deliver Desserts Too
          </p>
          <p className="px-2">Tasty treats</p>
          <button className="border-white bg-white text-black mx-2 absolute buttom-4">
            Order now
          </button>
        </div>
        { <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3743537/pexels-photo-3743537.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        /> }
        {/* <img src="images/Ekwang.jpg" alt="" /> */}
      </div>
    </div>
  );
}   

export default HeadlineCards