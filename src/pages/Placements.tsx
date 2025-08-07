import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Award, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/ui/section-header';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import placementsData from '@/data/placements.json';
import companiesData from '@/data/companies.json';

const Placements = () => {
  const placementStats = [
    { number: 95, label: "Placement Rate", suffix: "%", icon: <TrendingUp className="h-6 w-6" /> },
    { number: 2293, label: "Students Placed", suffix: "+", icon: <Users className="h-6 w-6" /> },
    { number: 50, label: "Partner Companies", suffix: "+", icon: <Building2 className="h-6 w-6" /> },
    { number: 15, label: "Average LPA", suffix: "", icon: <Award className="h-6 w-6" /> },
  ];

  const placementHighlights = [
    {
      title: "Industry Partnerships",
      description: "Strong relationships with leading IT companies across India and internationally.",
      icon: <Building2 className="h-8 w-8" />
    },
    {
      title: "Placement Assistance",
      description: "Dedicated placement team providing end-to-end support from resume building to final selection.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive mock interview sessions and technical interview preparation.",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Career Guidance",
      description: "Personalized career counseling to help you choose the right career path.",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Student <span className="text-yellow-300">Placements</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Celebrating the success stories of our students who have secured rewarding positions 
              at top IT companies across the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Success Stories"
            title="Our Recent Placement Achievements"
            description="Meet our successful graduates who have landed their dream jobs at leading companies"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {placementsData.map((placement, index) => (
              <motion.div
                key={placement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="feature-card group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={placement.image} 
                        alt={placement.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {placement.year}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {placement.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {placement.course}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{placement.company}</span>
                        </div>
                        <Badge variant="outline" className="text-primary border-primary">
                          {placement.package}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Partners"
            title="Top Companies That Hire Our Students"
            description="We have established strong partnerships with leading companies across various industries"
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
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-soft transition-shadow group"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="max-h-12 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Support"
            title="Comprehensive Placement Assistance"
            description="From day one to job placement, we provide complete support throughout your journey"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {placementHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="feature-card h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section-padding bg-feature-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionHeader
                subtitle="Visit Us"
                title="Our Training Centers"
                description="Located in the heart of Chennai's IT corridor, our modern facilities provide the perfect learning environment."
                centered={false}
              />
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Guindy Branch</h4>
                    <p className="text-muted-foreground">B-22, SIDCO Industrial Estate, Guindy, Chennai - 600032</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Anna Nagar Branch</h4>
                    <p className="text-muted-foreground">Coming Soon - Anna Nagar, Chennai</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Campus Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Campus Visit</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Interested Course</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select a course</option>
                      <option>Data Science</option>
                      <option>Full Stack Development</option>
                      <option>Software Testing</option>
                      <option>Cyber Security</option>
                    </select>
                  </div>
                  <button className="btn-hero w-full">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
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
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-white/90">
              Join the ranks of our successful graduates. With our proven placement track record 
              and industry partnerships, your dream job is within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero bg-white text-primary hover:bg-white/90">
                Apply for Placement
              </button>
              <button className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary">
                View Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Placements;