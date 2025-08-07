import { motion } from 'framer-motion';
import { ArrowRight, Users, Trophy, BookOpen, Target, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import coursesData from '@/data/courses.json';
import testimonialsData from '@/data/testimonials.json';
import companiesData from '@/data/companies.json';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Industry-Aligned Curriculum",
      description: "Our curriculum is carefully designed to reflect the latest industry trends, ensuring you gain the skills that are currently in high demand."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Hands-On Learning",
      description: "We emphasize practical training through real-time projects and live case studies, helping you build job-ready skills with confidence."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Unlimited Internship Opportunities",
      description: "We offer unlimited internship support, giving you the chance to apply your learning in real-world environments."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Dedicated Placement Support",
      description: "From resume building to mock interviews and job referrals, we provide complete assistance to help you step confidently into the workforce."
    }
  ];

  const stats = [
    { number: 2293, label: "Students Placed", suffix: "+" },
    { number: 1500, label: "Trusted Candidates", suffix: "+" },
    { number: 50, label: "Partner Companies", suffix: "+" },
    { number: 95, label: "Placement Rate", suffix: "%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block"
                >
                  1500+ Trusted Candidates
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Best IT Training and{' '}
                  <span className="text-yellow-300">Placement Institute</span>{' '}
                  in Chennai
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-white/90 leading-relaxed"
                >
                  Empower your career with industry-aligned courses, hands-on training, 
                  and guaranteed placement support from Chennai's most trusted IT institute.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary">
                  Talk to Counselor
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Students learning at IAT Technologies"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/api/placeholder/500/400" 
                alt="IAT Technologies classroom"
                className="rounded-2xl shadow-soft"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-primary font-semibold mb-2">Welcome to IAT TECHNOLOGIES</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Educate, Innovate, <span className="gradient-text">Empower India</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  IAT Technologies has rapidly established itself as a high-performing organization 
                  in the IT Training and Placement sector, well known for its commitment to delivering 
                  quality education and career counseling.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  With a good placement history in the best IT companies, IAT Technologies keeps 
                  providing students with technical knowledge as well as career ability. If you are 
                  a fresher or wish to improve your skills, IAT Technologies is your best choice 
                  for total IT Training & Placement.
                </p>
              </div>
              
              <Link to="/about">
                <Button className="btn-hero">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Career-Focused"
            title="Industry Approved Courses"
            description="Choose from our comprehensive range of industry-aligned courses designed to make you job-ready"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coursesData.slice(0, 6).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="course-card group h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{course.icon}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">
                        {course.duration}
                      </span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/courses">
              <Button className="btn-hero">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-feature-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Empowering & Upskilling Your Future"
            description="IAT Technologies is a Top IT Training and Placement institute in Chennai, dedicated to equipping learners with the most in-demand skills"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="feature-card h-full">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Testimonials"
            title="Industry-Certified Training Success Stories"
            description="Hear from our successful students who have transformed their careers with IAT Technologies"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonialsData.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="testimonial-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <p className="text-sm text-primary font-medium mt-3">
                      Placed at {testimonial.company}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Alumni Work At"
            title="Trained at IAT Technologies, Placed at Leading Tech Companies"
            description="See where our learners are making an impact across the industry"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12"
          >
            {companiesData.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-soft transition-shadow"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90">
              Join 1500+ successful students who have launched their IT careers with IAT Technologies. 
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;