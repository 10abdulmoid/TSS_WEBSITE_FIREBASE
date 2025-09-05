import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Users,
  BookOpen,
  Calendar,
  Briefcase,
  CheckCircle,
  GraduationCap,
  FileEdit,
  Book,
  UserPlus,
  MessageCircle,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      icon: <GraduationCap className="w-7 h-7 text-orange-600" />,
      title: "Career Guidance",
      description: "Expert guidance to help you make informed career decisions and plan your professional journey.",
      link: "/services/career-guidance"
    },
    {
      icon: <FileEdit className="w-7 h-7 text-orange-600" />,
      title: "Resume Building",
      description: "Professional resume writing services to help you stand out in job applications.",
      link: "/services/resume-building"
    },
    {
      icon: <Book className="w-7 h-7 text-orange-600" />,
      title: "Study Resources",
      description: "Access comprehensive study materials, tutorials, and practice resources.",
      link: "/resources"
    },
    {
      icon: <UserPlus className="w-7 h-7 text-orange-600" />,
      title: "Mentorship",
      description: "Connect with experienced professionals for guidance and career advice.",
      link: "/services/mentorship"
    },
    {
      icon: <Calendar className="w-7 h-7 text-orange-600" />,
      title: "Events & Workshops",
      description: "Participate in skill-building workshops and networking events.",
      link: "/events"
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-orange-600" />,
      title: "Community Support",
      description: "Join a supportive community of students and professionals.",
      link: "/contact"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2s"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4s"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-medium">5000+ Students Trust Us</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Your Gateway to
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Growth & Success
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join our thriving community of tech enthusiasts, students, and professionals passionate about learning, networking, and career development.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                to="/about" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link
                to="/login"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Join Community
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            {...staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
              {...slideUp}
            >
              Growing Strong Together
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              {...slideUp}
            >
              Join thousands of students who have transformed their careers with us
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5000+</h3>
                <p className="text-slate-600 font-medium">Community Members</p>
              </div>
            </motion.div>

            <motion.div
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-200"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">50+</h3>
                <p className="text-slate-600 font-medium">Events Conducted</p>
              </div>
            </motion.div>

            <motion.div
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">100+</h3>
                <p className="text-slate-600 font-medium">Job Opportunities</p>
              </div>
            </motion.div>

            <motion.div
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">20+</h3>
                <p className="text-slate-600 font-medium">Partner Companies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Comprehensive Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to accelerate your educational and professional journey in one place.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                variants={slideUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 h-full flex flex-col">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
                                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of students who have accelerated their careers with our comprehensive support system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/login"
                className="group px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/about"
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Student Spot is designed to bridge the gap between students, professionals, and recruiters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              className="card p-6"
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Collaborate</h3>
              <p className="text-gray-600 mb-4">
                Network with like-minded individuals and work on exciting projects to build your portfolio and skills.
              </p>
              <Link to="/about" className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="card p-6"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
              <p className="text-gray-600 mb-4">
                Access top-tier resources, courses, and expert career tips to enhance your skills and knowledge.
              </p>
              <Link to="/resources" className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                Explore resources <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="card p-6"
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Events & Workshops</h3>
              <p className="text-gray-600 mb-4">
                Participate in exclusive events, workshops, and webinars led by industry experts and professionals.
              </p>
              <Link to="/events" className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                View events <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="card p-6"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Explore internships, job opportunities, and insights from industry leaders to build your career path.
              </p>
              <Link to="/jobs" className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                Find opportunities <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="card p-6"
              {...fadeIn}
              transition={{ delay: 0.5 }}
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview Preparation</h3>
              <p className="text-gray-600 mb-4">
                Receive expert guidance, practice problems, and ATS-friendly resume tips to ace your interviews.
              </p>
              <Link to="/resources" className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                Get prepared <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            <motion.div
              className="card p-6 md:col-span-1 lg:col-span-1"
              {...fadeIn}
              transition={{ delay: 0.6 }}
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Recruiters</h3>
              <p className="text-gray-600 mb-4">
                Connect with a talented pool of skilled candidates and share job openings with motivated professionals.
              </p>
              <Link to="/contact" className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                Get in touch <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect with like-minded individuals, explore opportunities, and grow your skills alongside a
            community of passionate learners and professionals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/login"
              className="btn bg-white text-orange-600 hover:bg-gray-100"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
