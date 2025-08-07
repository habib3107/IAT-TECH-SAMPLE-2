import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/ui/section-header';
import coursesData from '@/data/courses.json';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Analytics', 'Development', 'Quality Assurance', 'Cloud Computing', 'Security'];
  
  const filteredCourses = selectedCategory === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

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
              Our <span className="text-yellow-300">Training Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive, industry-aligned courses designed to transform you into a job-ready IT professional. 
              Choose your path to success!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-accent/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter by Category:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-background text-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card className="course-card group h-full">
                  <CardContent className="p-0">
                    {/* Course Header */}
                    <div className="relative bg-hero-gradient p-6 text-white">
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {course.category}
                        </Badge>
                      </div>
                      <div className="text-4xl mb-3">{course.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="text-sm text-muted-foreground ml-1">(4.9)</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="btn-hero group-hover:scale-105 transition-transform"
                          >
                            Enroll Now
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No courses found in the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Training Process */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Process"
            title="How We Ensure Your Success"
            description="Our comprehensive 7-step methodology guarantees job-ready skills and placement support"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { step: "01", title: "Theory Foundation", description: "Strong theoretical base with industry expert trainers" },
              { step: "02", title: "Practical Labs", description: "Hands-on experience with real-world projects" },
              { step: "03", title: "Assignments", description: "Industry-level challenges to test your skills" },
              { step: "04", title: "Certification", description: "Prepare for industry-recognized certifications" },
              { step: "05", title: "Resume Building", description: "Professional resume crafting and optimization" },
              { step: "06", title: "Mock Interviews", description: "Practice sessions with industry professionals" },
              { step: "07", title: "Job Placement", description: "Dedicated support until you land your dream job" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </motion.div>
            ))}
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
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-white/90">
              Choose the course that aligns with your career goals. Our expert counselors are here 
              to help you make the right decision for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                Talk to Counselor
              </Button>
              <Button className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary">
                Download Course Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;