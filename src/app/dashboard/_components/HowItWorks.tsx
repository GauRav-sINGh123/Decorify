import React from 'react'

function HowItWorks() {
  return (
    <div className="mt-12 prose prose-gray max-w-none">
    <h2 className="text-2xl font-serif text-[#2C2C2C] mb-4">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-white rounded-lg border border-[#E5E5E5]">
        <h3 className="text-lg font-medium mb-2 text-[#2C2C2C]">1. Upload</h3>
        <p className="text-[#6B6B6B]">Upload a photo of your room that you want to redesign</p>
      </div>
      <div className="p-6 bg-white rounded-lg border border-[#E5E5E5]">
        <h3 className="text-lg font-medium mb-2 text-[#2C2C2C]">2. Customize</h3>
        <p className="text-[#6B6B6B]">Select your preferred style and add specific requirements</p>
      </div>
      <div className="p-6 bg-white rounded-lg border border-[#E5E5E5]">
        <h3 className="text-lg font-medium mb-2 text-[#2C2C2C]">3. Generate</h3>
        <p className="text-[#6B6B6B]">Let our AI transform your space instantly</p>
      </div>
    </div>
  </div>
  )
}

export default HowItWorks