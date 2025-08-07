import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import AnimatedCounter from '@/components/common/AnimatedCounter';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To bridge the gap between talent and opportunity by providing industry-relevant IT training and comprehensive placement support, empowering individuals to achieve their career aspirations."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Our Vision",
      description: "To become India's leading IT training and placement institute, recognized for excellence in education, innovation in teaching methodologies, and successful career transformations."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Our Values",
      description: "Excellence in education, integrity in practice, innovation in approach, and commitment to student success. We believe in practical learning and industry-aligned curriculum."
    }
  ];

  const methodology = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Theory",
      description: "Strong theoretical foundation with industry insider trainers providing comprehensive introduction to all IT concepts for progressive learning."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Practicals",
      description: "Emphasis on practical work with hands-on labs, real-time problem solving using latest tools and technologies relevant to current IT industry."
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Assignments",
      description: "Real-world challenge assignments that extend analytical thinking skills and build confidence to apply knowledge in practical scenarios."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Certification",
      description: "Industry certification preparation with intensive training, practice tests, and qualifications that support your next career steps."
    }
  ];

  const achievements = [
    { number: 2293, label: "Students Successfully Placed", suffix: "+" },
    { number: 10, label: "Years of Excellence", suffix: "+" },
    { number: 50, label: "Industry Partners", suffix: "+" },
    { number: 15, label: "Expert Trainers", suffix: "+" }
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
              About <span className="text-yellow-300">IAT Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your trusted partner in IT career transformation since our inception. 
              We've been shaping successful IT professionals through quality education and dedicated placement support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
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
                subtitle="Our Story"
                title="Educate, Innovate, Empower India"
                description="IAT Technologies has rapidly established itself as a high-performing organization in the IT Training and Placement sector."
                centered={false}
              />
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At the center of our success are the dedicated coordinators at IAT, who carefully monitor 
                  several academic activities like subject planning, delivering lectures, and problem-solving 
                  sessions. Their proactive approach makes sure that each student is provided with individualized 
                  attention and unstinting guidance throughout the learning process.
                </p>
                <p>
                  With a good placement history in the best IT companies, IAT Technologies keeps providing 
                  students with technical knowledge as well as career ability. Whether you are a fresher or 
                  wish to improve your skills, IAT Technologies is your best choice for comprehensive IT 
                  Training & Placement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="IAT Technologies campus"
                className="rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Achievements"
            title="Numbers That Speak Our Success"
            description="Over the years, we've built a legacy of excellence in IT training and placement"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={achievement.number} suffix={achievement.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Foundation"
            title="Mission, Vision & Values"
            description="The core principles that drive our commitment to excellence in IT education"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="feature-card h-full text-center">
                  <CardContent className="p-8">
                    <div className="text-primary mb-6 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="section-padding bg-feature-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Approach"
            title="Comprehensive Training Methodology"
            description="Our structured approach ensures practical learning and industry readiness for all our students"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {methodology.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="feature-card h-full text-center group">
                  <CardContent className="p-6">
                    <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IAT */}
      <section className="section-padding">
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
                alt="Students in training session"
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
              <SectionHeader
                subtitle="Why IAT Technologies"
                title="India's Trusted Destination for IT Job Skills Training"
                description="We are dedicated to empowering individuals and organizations with the skills required to excel in today's digital landscape."
                centered={false}
              />
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Real-Time Case Studies and Corporate Style Training</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Industry-Aligned Syllabus and Placement Oriented Courses</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Self-Curated Study Materials and Flexible Learning Schedules</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Dedicated Placement Support and Career Guidance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Ready to Start Your IT Career Journey?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of successful professionals who have transformed their careers with IAT Technologies. 
              Let's discuss your goals and create a personalized learning path for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero bg-white text-primary hover:bg-white/90">
                Schedule a Consultation
              </button>
              <button className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary">
                Visit Our Campus
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;