import React from "react";
import Footer from "../components/Footer"; // Footer Component
import { FaSearch, FaMicrophone, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons - Search,Microphone,Left Arrow,Right Arrow
import { motion } from "framer-motion"; // Animation
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper
import { Navigation } from "swiper/modules"; // Navigation
import "swiper/css"; // Swiper CSS
import "swiper/css/navigation"; // Navigation CSS
import AOS from "aos"; // Animation on Scroll
import { Bot, Salad,MapPin,PowerOff,ClipboardPlus,ShoppingCart, Star } from 'lucide-react'; // Icons for Features Card
import pic1 from "../assets/PIC1.png" // Image
import Navbar from "../components/Navbar"; // Navbar Component
import { useEffect } from "react"; // UseEffect Hook

const LandingPage = () => {
  // AOS Animation
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Product Data -Product image,Product name and Product description
  const products = [
    {
      img: "https://cdn.ralali.id/assets/img/Libraries/AND-UA-621-Tensimeter-Digital-Alat-Ukur-Tekanan-Darah_rXkpETtFY6yHAOdC_1632298852.png",
      name: "Tensimeter",
      description: "A Tensimeter is an instrument used to compare the vapour pressures of two liquids, usually consisting of two sealed bulbs containing the liquids, each being connected to one limb of a manometer. "
    },
    {
      img: "https://5.imimg.com/data5/YV/CC/PC/SELLER-3766416/infinity-digital-thermometer-500x500.jpg",
      name: "Thermometer",
      description: "A Thermometer is a device that measures temperature or temperature gradient. It has two elements: a temperature sensor and some means of converting this into a numerical value."
    },
    {
      img: "https://m.media-amazon.com/images/I/61vQYB662CL.jpg",
      name: "Glucometer",
      description: "A Glucometer is a medical device for determining the approximate concentration of glucose in the blood. It can also be a strip of glucose paper dipped into a substance and measured to the glucose chart."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhyK1H45ScLm4TkNG-BkApvz5iuL4EskpzQ&s",
      name: "Nebulizers",
      description: "A nebulizer is a machine that turns liquid medicine into gas that can be easily inhaled. We sit with the machine and breathe in the medicine through a connected facemask which allows the medicine to enter the lungs."
    },
    {
      img: "https://5.imimg.com/data5/FJ/BY/MY-46244278/body-weighing-scale-2.jpg",
      name: "Body Weight Scale",
      description: "Body Weight Scale is a scale or balance is a device used to measure weight or mass. These are also known as mass scales, weight scales, mass balances, massometers, and weight balances. "
    },
    {
      img: "https://m.media-amazon.com/images/I/61hApWyohdS._AC_UY1100_.jpg",
      name: "Face Masks",
      description: "Wearing a high-quality mask that fits well and has good filtration helps to protect you. It helps to protect you from breathing in viruses, wildfire smoke, and other particles or germs in the air."
    },
    {
      img: "https://m.media-amazon.com/images/I/51Bks8zqRiL._AC_UF1000,1000_QL80_.jpg",
      name: "First Aid Kit",
      description: " It includes items like sterile gauze dressings, a roller gauze bandage, disposable sterile gloves, tweezers, scissors, antiseptic wipes, tape, a small eyewash bottle, adhesive band-aids, and first aid instructions. "
    },
    {
      img: "https://images.meesho.com/images/products/282799324/jw3b2_512.webp",
      name: "Humidifiers",
      description:"Humidifiers are devices that add moisture to the air to prevent dryness that can cause irritation in many parts of the body. They can also ease some symptoms caused by the flu or common cold."
    },
  ];

  // Feature Card Component - The card which shows Features They Provide
  const FeatureCard = ({ icon, title, description, className = '' }) => (
    <div data-aos="zoom-in" className={`p-6 rounded-xl bg-white shadow-sm ${className}`}>
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-200 to-white text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className=" py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div data-aos="zoom-out" className="max-w-lg">
          <div className="flex items-center space-x-2 bg-gray-200 px-4 py-1 rounded-full w-fit">
            <span className="text-gray-700 font-semibold text-[20px]">Health Matters</span>
            <span className="text-red-500">❤️‍🩹</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-black leading-snug">
            <span className="text-blue-600 text-[50px]">One Step Solution</span> <br />
            for all your dietary <p className="text-black text-[40px]">needs.</p>
          </h1>
          {/* AI Chat */}
          <button className="bg-blue-600 flex flex-row items-center justify-center mt-3 ml-10 p-3 w-[300px] text-center font-serif rounded-full hover:bg-black text-white">
            <Star className="text-white mr-2"/> Let's Start</button>
        </div>
        {/* Right Side Illustration */}
        <div className="flex flex-row mt-10 md:mt-0 space-x-4">
          {/* First Image - Bounce & Fade-in Animation */}
          <motion.img
            src="https://img.freepik.com/premium-vector/doctor-showing-good-diagnosis-physician-with-paper-document-form-with-success-results-report_101884-660.jpg"
            alt="Doctor" className="w-full md:w-[400px] rounded-lg shadow-lg" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05, rotate: 2 }} />
          {/* Second Image - Swipe & Floating Animation */}
          <motion.img src={pic1} alt="Doctor Illustration" className="w-full md:w-[400px] rounded-lg shadow-lg" initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05, rotate: 2 }} />
        </div>
      </section>
      {/* Features Section */}
      <div className=" min-h-[600px] p-8">
        <div className="max-w-6xl mx-auto">
          <p data-aos="flip-up" className="text-blue-500 font-bold text-4xl mb-12">
            FEATURES WE PROVIDE 🫀
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Report Feature */}
            <FeatureCard
              icon={<ClipboardPlus className="w-12 h-12 text-violet-600" />}
              title="Generates Automated Report" className="text-violet-500 shadow-xl shadow-blue-500"
              description="Generates Summary reports for doctors and patients so that understandability is enhanced." />
            {/* Food Recommendation Feature */}
            <FeatureCard
              icon={
                <Salad className="w-12 h-14 relative text-green-500" />
              }
              title="Food Recommendation" className="text-green-500 shadow-xl shadow-blue-500"
              description="We provide food recommendation according to your calorie requirements." />
            {/* Chatbot Feature */}
            <FeatureCard
              icon={
                <Bot className="w-16 h-16 text-red-500" />
              }
              className="text-red-500 shadow-xl shadow-blue-500" title="Interactive Chatbot"
              description="Solve your queries or helath issues by interacting with our bot in your relaxable languages." />
            {/* Mapping Feature */}
            <FeatureCard
              icon={<MapPin className="w-12 h-12 text-yellow-500" />}
              title="Healthcare Center Mapping" className="text-yellow-500 shadow-xl shadow-blue-500"
              description="We suggests nearby clinics, doctors and medical stores based on your GPS location and budget." />
            {/* Power Feature */}
            <FeatureCard
              icon={
                <PowerOff className="w-12 h-14 relative text-slate-700" />
              }
              title="Edge Computing" className="text-slate-700 shadow-xl shadow-blue-500"
              description="Runs on low power devices like mobile phones or Raspberries Pi and can work without internet." />
            {/* Reminder Feature */}
            <FeatureCard
              icon={
                <ShoppingCart className="w-16 h-16 text-orange-500" />
              }
              className="text-orange-500 shadow-xl shadow-blue-500" title="Products DealNavigate"
              description="A place where you can buy products from nearby shops or from online sites with cheap or better prices." />
          </div>
        </div>
      </div>
      {/* Help Topics Section */}
      <div className=" min-h-[600px] px-6 md:px-20 py-10">
        {/* Header */}
        <p data-aos="flip-left" className="text-blue-600 font-bold text-[30px] uppercase tracking-wide">
          HELP TOPICS 🩺
        </p>
        <p data-aos="flip-right" className="text-[25px] text-blue-400 font-bold mt-2">Enhance Your Lifestyle</p>
        {/* Carousel Container */}
        <div className="relative mt-6">
          <Swiper slidesPerView={1} spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Navigation]} className="py-5">
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div data-aos="zoom-in" className="bg-white shadow-lg rounded-xl p-3">
                  <img src={product.img} alt={product.name} className="rounded-lg w-full h-52 object-cover"/>
                  <h3 className="font-semibold text-black text-[20px] mt-3">{product.name}</h3>
                  <h3 className="font-serif text-black text-[15px] mt-3">{product.description}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Arrows */}
          <button className="prev-btn absolute top-1/2 -left-6 text-gray-500 bg-white p-2 rounded-full shadow-md">
            <FaChevronLeft />
          </button>
          <button className="next-btn absolute top-1/2 -right-6 text-gray-500 bg-white p-2 rounded-full shadow-md">
            <FaChevronRight />
          </button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;