export default function ApartmentDetail() {
 const handleCheckout = () => {
  window.location.href =
    "https://buy.stripe.com/test_3cI6oH0WZao2dMQgJ16oo00"
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
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-fit sticky top-32">
          <p className="text-zinc-400">Price</p>

          <h2 className="text-5xl font-bold text-yellow-500 mt-2">
            ₺8,500
          </h2>

          <p className="text-zinc-500 mt-2">per night</p>

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