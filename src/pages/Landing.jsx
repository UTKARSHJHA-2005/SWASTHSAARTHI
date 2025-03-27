// The page which will be shown to the user firstly.
import React from "react";
import Footer from "../components/Footer"; // Footer Component
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons - Search,Microphone,Left Arrow,Right Arrow
import { motion } from "framer-motion"; // Animation
import doc from "../assets/doc.png"
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper
import { Navigation } from "swiper/modules"; // Navigation
import "swiper/css"; // Swiper CSS
import "swiper/css/navigation"; // Navigation CSS
import AOS from "aos"; // Animation on Scroll
import { Bot, TriangleAlert, MapPin, PowerOff, ClipboardPlus, ShoppingCart, Star } from 'lucide-react'; // Icons for Features Card
import pic1 from "../assets/PIC1.png" // Image
import Navbar from "../components/Navbar"; // Navbar Component
import { useEffect, useState } from "react"; // UseEffect Hook
import { useNavigate} from "react-router-dom"; // Navigating to page
import { Link,Element } from "react-scroll"; // Navigating to componenet

// Product Data -Product image,Product name and Product description
export const products = [
  {
    img: "https://cdn.ralali.id/assets/img/Libraries/AND-UA-621-Tensimeter-Digital-Alat-Ukur-Tekanan-Darah_rXkpETtFY6yHAOdC_1632298852.png",
    name: "Tensimeter",
    reviews: '4',
    icon: "https://tse3.mm.bing.net/th?id=OIP.EbSkIWGHL2XlY1Nz7hWEvwHaHa&pid=Api&P=0&h=180",
    discount: '60% Off',
    delivery: 'Free Delivery',
    description: "A Tensimeter is an instrument used to compare the vapour pressures of two liquids, usually consisting of two sealed bulbs containing the liquids, each being connected to one limb of a manometer. "
  },
  {
    img: "https://5.imimg.com/data5/YV/CC/PC/SELLER-3766416/infinity-digital-thermometer-500x500.jpg",
    name: "Thermometer",
    icon: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
    reviews: '3.5',
    discount: '40% Off',
    delivery: 'Free Delivery',
    description: "A Thermometer is a device that measures temperature or temperature gradient. It has two elements: a temperature sensor and some means of converting this into a numerical value."
  },
  {
    img: "https://m.media-amazon.com/images/I/61vQYB662CL.jpg",
    name: "Glucometer",
    icon: "https://tse2.mm.bing.net/th?id=OIP.83pmKeI9mIjyOvAd5SSm2AHaD4&pid=Api&P=0&h=180",
    reviews: '4.5',
    discount: '50% Off',
    delivery: 'Free Delivery',
    description: "A Glucometer is a medical device for determining the approximate concentration of glucose in the blood. It can also be a strip of glucose paper dipped into a substance and measured to the glucose chart."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhyK1H45ScLm4TkNG-BkApvz5iuL4EskpzQ&s",
    name: "Nebulizers",
    icon: "https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg",
    reviews: '4.1',
    discount: '55% Off',
    delivery: 'Free Delivery',
    description: "A nebulizer is a machine that turns liquid medicine into gas that can be easily inhaled. We sit with the machine and breathe in the medicine through a connected facemask which allows the medicine to enter the lungs."
  },
  {
    img: "https://5.imimg.com/data5/FJ/BY/MY-46244278/body-weighing-scale-2.jpg",
    name: "Body Weight Scale",
    icon: "https://tse1.mm.bing.net/th?id=OIP.8B1i4ujGuFAzgHAYpsPx5wAAAA&pid=Api&P=0&h=180",
    reviews: '4.2',
    discount: '50% Off',
    delivery: 'Free Delivery',
    description: "Body Weight Scale is a scale or balance is a device used to measure weight or mass. These are also known as mass scales, weight scales, mass balances, massometers, and weight balances. "
  },
  {
    img: "https://m.media-amazon.com/images/I/61hApWyohdS._AC_UY1100_.jpg",
    name: "Face Masks",
    icon: "https://cdn2.f-cdn.com/contestentries/2180672/59137620/6380d24112b30_thumb900.jpg",
    reviews: '3.8',
    discount: '40% Off',
    delivery: 'Free Delivery',
    description: "Wearing a high-quality mask that fits well and has good filtration helps to protect you. It helps to protect you from breathing in viruses, wildfire smoke, and other particles or germs in the air."
  },
  {
    img: "https://m.media-amazon.com/images/I/51Bks8zqRiL._AC_UF1000,1000_QL80_.jpg",
    name: "First Aid Kit",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/93993a117745253.607be21513a3f.jpg",
    reviews: '3.9',
    discount: '40% Off',
    delivery: 'Free Delivery',
    description: " It includes items like sterile gauze dressings, a roller gauze bandage, disposable sterile gloves, tweezers, scissors, antiseptic wipes, tape, a small eyewash bottle, adhesive band-aids, and first aid instructions. "
  },
  {
    img: "https://images.meesho.com/images/products/282799324/jw3b2_512.webp",
    name: "Humidifiers",
    icon: "https://cdn6.f-cdn.com/contestentries/1127135/23569535/59b17eb58e9ab_thumb900.jpg",
    discount: '43% Off',
    reviews: '3.6',
    delivery: 'Free Delivery',
    description: "Humidifiers are devices that add moisture to the air to prevent dryness that can cause irritation in many parts of the body. They can also ease some symptoms caused by the flu or common cold."
  },
];

const LandingPage = () => {
  const navigate = useNavigate()
  const [showChatbot, setShowChatbot] = useState(false);

  // Function to navigate to AI chatbot
  const handleStartClick = () => {
    setShowChatbot(true);
    navigate('/chat')
  };

  // AOS Animation
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

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
          <button onClick={handleStartClick} className="bg-blue-600 flex flex-row items-center justify-center mt-3 ml-10 p-3 w-[300px] text-center font-serif rounded-full hover:bg-green-500 text-white">
            <Star className="text-white mr-2" /> Let's Start</button>
        </div>
        {/* Right Side Illustration */}
        <div className="flex flex-row mt-10 md:mt-0 space-x-4">
          {/* First Image - Bounce & Fade-in Animation */}
          <motion.img src={doc} alt="Doctor" className="w-full md:w-[400px] rounded-lg shadow-lg" initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05, rotate: 2 }} />
          {/* Second Image - Swipe & Floating Animation */}
          <motion.img src={pic1} alt="Doctor Illustration" className="w-full md:w-[400px] rounded-lg shadow-lg" initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.05, rotate: 2 }} />
        </div>
      </section>
      {/* Features Section */}
      <Element name="Features">
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
                <TriangleAlert className="w-12 h-14 relative text-yellow-500" />
              }
              title="Precautions Recommended" className="text-yellow-500 shadow-xl shadow-blue-500"
              description="We provide you with recommended precautions to be taken and tips for your disease. " />
            {/* Chatbot Feature*/}
            <FeatureCard
              icon={
                <Bot className="w-16 h-16 text-red-500" />
              }
              className="text-red-500 shadow-xl shadow-blue-500" title="Interactive Chatbot"
              description="Solve your queries or helath issues by interacting with our bot in your relaxable languages." />
            {/* Mapping Feature */}
            <FeatureCard
              icon={<MapPin className="w-12 h-12 text-green-500" />}
              title="Healthcare Center Mapping" className="text-green-500 shadow-xl shadow-blue-500"
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
      </Element>
      {/* Help Topics Section */}
      <Element name="product">
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
                <Link to={`/product/${product.name}`} state={{ product }}>
                  <div data-aos="zoom-in" className="bg-white shadow-lg rounded-xl p-3 border-green-400 border-2 shadow-green-400">
                    <img src={product.img} alt={product.name} className="rounded-lg w-full h-52 object-cover" />
                    <h3 className="font-semibold text-black text-[20px] mt-3">{product.name}</h3>
                    <h3 className="font-serif text-black text-[15px] mt-3">{product.description}</h3>
                  </div>
                </Link>
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
        <button className="bg-blue-600 text-white h-10 w-[200px] rounded-lg p-2 mt-[10px] ml-[580px] hover:bg-black min-w-screen">View All Products</button>
      </div>
      </Element>
      {/* Footer */}
      <Footer />
    </div >
  );
};

export default LandingPage;