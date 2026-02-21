/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Clock, 
  Users, 
  Calendar,
  ChevronRight,
  UtensilsCrossed
} from 'lucide-react';

// --- Types ---
interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'Starters' | 'Main Course' | 'Desserts' | 'Drinks';
}

// --- Constants ---
const WHATSAPP_NUMBER = "919830518927";
const MENU_ITEMS: FoodItem[] = [
  // Starters
  {
    id: 1,
    name: "Paneer Tikka",
    price: "₹450",
    description: "Classic Indian appetizer with marinated paneer cubes grilled to perfection.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
    category: "Starters"
  },
  {
    id: 2,
    name: "Bruschetta Al Pomodoro",
    price: "₹350",
    description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=600&q=80",
    category: "Starters"
  },
  // Main Course
  {
    id: 3,
    name: "Butter Chicken",
    price: "₹650",
    description: "Tender chicken in a rich, creamy tomato-based gravy with butter.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Truffle Mushroom Risotto",
    price: "₹850",
    description: "Creamy arborio rice with wild mushrooms and black truffle oil.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80",
    category: "Main Course"
  },
  // Desserts
  {
    id: 5,
    name: "Gulab Jamun with Ice Cream",
    price: "₹250",
    description: "Warm milk-based dumplings served with a scoop of vanilla gelato.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=600&q=80",
    category: "Desserts"
  },
  {
    id: 6,
    name: "Dark Chocolate Fondant",
    price: "₹350",
    description: "Warm chocolate cake with a molten center and vanilla bean gelato.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=600&q=80",
    category: "Desserts"
  },
  // Drinks
  {
    id: 7,
    name: "Mango Lassi",
    price: "₹180",
    description: "Refreshing yogurt-based drink blended with sweet mango pulp.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    category: "Drinks"
  },
  {
    id: 8,
    name: "Virgin Mojito",
    price: "₹220",
    description: "Classic refreshing drink with lime, mint, and sparkling soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    category: "Drinks"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Order Food', href: '#order' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className="text-brand-gold group-hover:rotate-12 transition-transform" size={28} />
          <span className="font-serif text-2xl font-bold tracking-tighter text-brand-olive">L'Artiste</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest text-brand-olive/80 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-olive" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-olive/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif italic text-brand-olive border-b border-brand-olive/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Restaurant Interior" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-olive/40 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand-gold font-serif italic text-xl mb-4"
        >
          Welcome to L'Artiste Gastronomique
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight"
        >
          Where Every Plate <br /> is a Masterpiece
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#order" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-white rounded-full font-medium hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-brand-gold/20"
          >
            Order Now
          </a>
          <a 
            href="#reservations" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all"
          >
            Book a Table
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronRight className="rotate-90" size={32} />
      </motion.div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-olive mb-4">Our Signature Menu</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-brand-gold text-white shadow-lg' 
                    : 'bg-brand-cream text-brand-olive hover:bg-brand-olive hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-brand-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-gold text-white px-4 py-1 rounded-full font-bold">
                    {item.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-brand-olive text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-brand-olive mb-2">{item.name}</h3>
                  <p className="text-brand-olive/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/professional-chef/800/800" 
              alt="Our Chef" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-white font-serif italic text-2xl">"Cooking is an art, but dining is a celebration."</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-gold font-serif italic text-lg mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-olive mb-8">Crafting Culinary Memories Since 1994</h2>
          <p className="text-brand-olive/70 text-lg leading-relaxed mb-6">
            L'Artiste Gastronomique began with a simple vision: to create a space where the boundaries between art and food blur. Our chefs source only the finest local ingredients, treating each element with the respect it deserves.
          </p>
          <p className="text-brand-olive/70 text-lg leading-relaxed mb-8">
            From our hand-picked wine cellar to our meticulously designed interiors, every detail is crafted to provide an immersive sensory experience that lingers long after the final course.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-serif font-bold text-brand-gold">25+</p>
              <p className="text-sm uppercase tracking-widest text-brand-olive/50">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-brand-gold">12</p>
              <p className="text-sm uppercase tracking-widest text-brand-olive/50">Culinary Awards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Food Order 🍽️\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nOrder: ${formData.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="order" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-olive mb-4">Order Your Favorites</h2>
          <p className="text-brand-olive/60 italic">Delivered fresh to your doorstep</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-brand-cream p-8 md:p-12 rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-brand-olive/70 mb-2">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-brand-olive/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-olive/70 mb-2">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-brand-olive/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                placeholder="+1 234 567 890"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-olive/70 mb-2">Delivery Address</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-brand-olive/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
              placeholder="123 Gourmet St, Food City"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-brand-olive/70 mb-2">Order Details</label>
            <textarea 
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-brand-olive/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all resize-none"
              placeholder="List the items you'd like to order..."
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-brand-olive text-white rounded-xl font-bold hover:bg-brand-olive/90 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Place Order via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    request: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Table Reservation 📅\nName: ${formData.name}\nPhone: ${formData.phone}\nGuests: ${formData.guests}\nDate: ${formData.date}\nTime: ${formData.time}\nSpecial Request: ${formData.request}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="reservations" className="py-24 px-6 bg-brand-olive text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Reserve Your Table</h2>
          <p className="text-white/70 text-lg mb-8">
            Join us for an unforgettable evening. We recommend booking at least 48 hours in advance for weekend dining.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest">Call Us</p>
                <p className="text-xl font-serif">+91 98305 18927</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest">Opening Hours</p>
                <p className="text-xl font-serif">Mon - Sun: 12:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl text-brand-olive shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-olive/50 mb-2">Name</label>
              <input 
                required
                type="text" 
                className="w-full px-0 py-2 border-b-2 border-brand-olive/10 focus:border-brand-gold outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-olive/50 mb-2">Phone</label>
              <input 
                required
                type="tel" 
                className="w-full px-0 py-2 border-b-2 border-brand-olive/10 focus:border-brand-gold outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-olive/50 mb-2">Guests</label>
              <select 
                className="w-full px-0 py-2 border-b-2 border-brand-olive/10 focus:border-brand-gold outline-none transition-all bg-transparent"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Persons</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-olive/50 mb-2">Date</label>
              <input 
                required
                type="date" 
                className="w-full px-0 py-2 border-b-2 border-brand-olive/10 focus:border-brand-gold outline-none transition-all"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-brand-olive/50 mb-2">Time</label>
              <input 
                required
                type="time" 
                className="w-full px-0 py-2 border-b-2 border-brand-olive/10 focus:border-brand-gold outline-none transition-all"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-widest text-brand-olive/50 mb-2">Special Request</label>
            <input 
              type="text" 
              className="w-full px-0 py-2 border-b-2 border-brand-olive/10 focus:border-brand-gold outline-none transition-all"
              placeholder="Anniversary, allergies, etc."
              value={formData.request}
              onChange={(e) => setFormData({...formData, request: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-brand-gold text-white rounded-full font-bold hover:bg-brand-gold/90 transition-all shadow-lg"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-cream pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <UtensilsCrossed className="text-brand-gold" size={28} />
              <span className="font-serif text-2xl font-bold tracking-tighter text-brand-olive">L'Artiste</span>
            </div>
            <p className="text-brand-olive/60 mb-6">
              Redefining the art of dining through passion, precision, and the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-olive/5 flex items-center justify-center text-brand-olive hover:bg-brand-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-olive/5 flex items-center justify-center text-brand-olive hover:bg-brand-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-olive/5 flex items-center justify-center text-brand-olive hover:bg-brand-gold hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-brand-olive mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-brand-olive/60 hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="text-brand-olive/60 hover:text-brand-gold transition-colors">Our Menu</a></li>
              <li><a href="#about" className="text-brand-olive/60 hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#reservations" className="text-brand-olive/60 hover:text-brand-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-brand-olive mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0" size={20} />
                <span className="text-brand-olive/60">123 Culinary Avenue, <br />Gastronomy District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <span className="text-brand-olive/60">+91 98305 18927</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-brand-olive mb-6">Newsletter</h4>
            <p className="text-brand-olive/60 mb-4 text-sm">Join our mailing list for exclusive events and seasonal menus.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white px-4 py-2 rounded-lg border border-brand-olive/10 outline-none focus:border-brand-gold w-full"
              />
              <button className="bg-brand-olive text-white px-4 py-2 rounded-lg hover:bg-brand-olive/90 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-olive/10 pt-8 text-center">
          <p className="text-brand-olive/40 text-sm">
            © {new Date().getFullYear()} L'Artiste Gastronomique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse-soft hover:scale-110 transition-transform"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <OrderForm />
      <ReservationForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
