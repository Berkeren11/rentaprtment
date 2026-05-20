export default function ApartmentDetail() {
const handleCheckout = () => {
  window.location.href =
    "https://buy.stripe.com/test_dRmdR95df7bQbEIcsL6oo01"
}


  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO IMAGE */}
      <div
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Luxury Apartment
          </p>

          <h1 className="text-6xl font-bold mt-6">
            Bosphorus Royal Suite
          </h1>

          <div className="flex gap-6 mt-6 text-zinc-300">
            <span>⭐ 4.9 Rating</span>
            <span>👥 2 Guests</span>
            <span>📍 Beşiktaş, İstanbul</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8">
            Apartment Description
            <div className="mt-20">
  <h2 className="text-4xl font-bold mb-10">Choose Your Room</h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">Royal Suite</h3>
        <p className="text-zinc-400 mt-2">
          Luxury king bed with sea view balcony.
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-yellow-500 text-2xl font-bold">
            ₺8,500
          </span>

          <button className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Select
          </button>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">Executive Room</h3>
        <p className="text-zinc-400 mt-2">
          Modern apartment room with smart systems.
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-yellow-500 text-2xl font-bold">
            ₺6,200
          </span>

          <button className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Select
          </button>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
      <img
        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">Penthouse</h3>
        <p className="text-zinc-400 mt-2">
          Premium penthouse with jacuzzi and skyline.
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-yellow-500 text-2xl font-bold">
            ₺14,000
          </span>

          <button className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Select
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
          </h2>

          <p className="text-zinc-400 leading-8 text-lg">
            Experience premium luxury living in the heart of Istanbul.
            This exclusive suite offers panoramic Bosphorus views,
            modern interior design, private jacuzzi, high-speed WiFi,
            smart home technology, and VIP comfort for unforgettable stays.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">
            {[
              "Private Jacuzzi",
              "Fast WiFi",
              "Smart TV",
              "Sea View",
              "Private Parking",
              "24/7 Support",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* BOOKING CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 h-fit sticky top-32 shadow-2xl">
          <p className="text-zinc-400">Price</p>

          <h2 className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mt-3">
            ₺8,500
          </h2>
<p className="text-zinc-400 mt-2 text-lg">
  per night
</p>

<div className="mt-6 flex items-center gap-2 text-sm text-green-400">
  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
  Available for booking
</div>

          <div className="space-y-4 mt-10">
            <input
              type="date"
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4"
            />

            <select className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
            </select>
          </div>

  <button
onClick={handleCheckout}
className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-2xl transition"
>
Reserve Now
</button>

<button className="w-full mt-4 border border-yellow-500 text-yellow-500 py-4 rounded-2xl">
  Pay With Crypto
  </button>
        </div>
      </div>
    </div>
  )
}