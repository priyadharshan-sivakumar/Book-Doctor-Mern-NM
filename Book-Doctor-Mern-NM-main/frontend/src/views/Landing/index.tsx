import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  AppBar,
  Toolbar,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from 'framer-motion';
import {
  MdBloodtype,
  MdChildCare,
  MdFavorite,
  MdPsychology,
  MdLocalHospital,
  MdExpandMore,
} from "react-icons/md";
import { 
  FaHeartbeat, 
  FaHandHoldingHeart, 
  FaUserMd, 
  FaStethoscope, 
  FaCalendarAlt,
  FaQuestionCircle
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HealthcareLandingPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { icon: <FaHeartbeat />, title: "Login", path: "/login" }, // Added path
    { icon: <FaHandHoldingHeart />, title: "Signup", path: "/signup" } // Added path
  ];

  const medicalServices = [
    { 
      icon: <MdBloodtype size={50} />, 
      title: "Cancer Care", 
      description: "Comprehensive cancer treatment with cutting-edge technology and compassionate care.",
    },
    { 
      icon: <MdChildCare size={50} />, 
      title: "Labor & Delivery", 
      description: "Advanced maternal and newborn care in a supportive, state-of-the-art environment.",
    },
    { 
      icon: <MdFavorite size={50} />, 
      title: "Heart & Vascular", 
      description: "Advanced cardiovascular diagnostics and treatment with personalized patient care.",
    },
    { 
      icon: <MdPsychology size={50} />, 
      title: "Mental Health", 
      description: "Comprehensive mental health services addressing psychological well-being.",
    },
    { 
      icon: <MdLocalHospital size={50} />, 
      title: "Burn Treatment", 
      description: "Specialized burn care with advanced reconstructive and rehabilitation techniques.",
    }
  ];

  const faqData = [
    {
      icon: <FaQuestionCircle />,
      question: "How do I book an appointment?",
      answer: "You can schedule an appointment through our online platform or by calling our dedicated helpline."
    },
    {
      icon: <FaQuestionCircle />,
      question: "What services do you offer?",
      answer: "We provide comprehensive medical services including cancer care, labor & delivery, heart care, mental health support, and specialized burn treatment."
    },
    {
      icon: <FaQuestionCircle />,
      question: "Are your doctors experienced?",
      answer: "Our physicians are board-certified experts with extensive experience and ongoing training in their specialized fields."
    },
    {
      icon: <FaQuestionCircle />,
      question: "Do you accept insurance?",
      answer: "We accept most major insurance providers. Our billing department can assist with specific coverage details."
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "MD Clinic provided exceptional care during my critical treatment. Their expertise and compassion are unmatched."
    },
    {
      name: "Jane Smith",
      feedback: "The medical professionals here are not just skilled, but genuinely caring. I felt supported throughout my entire journey."
    },
    {
      name: "Emily Johnson",
      feedback: "A transformative healthcare experience. The facilities are world-class, and the staff is incredibly professional."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#eaf3f8' }}>
      {/* Navbar */}
      <AppBar 
        position="sticky" 
        sx={{ 
          background: scrolled ? '#ffffff' : 'transparent', 
          transition: 'background 0.3s ease', 
          boxShadow: scrolled ? 2 : 'none',
          py: 1,
          borderRadius: 2
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FaHeartbeat size={40} color="#2c3e50" />
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
              MD Clinic
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item, index) => (
              <Button 
                key={index} 
                variant="outlined"
                onClick={() => navigate(item.path)} // Navigate on click
                sx={{ 
                  color: '#2c3e50', 
                  borderColor: '#2c3e50',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  borderRadius: 2
                }}
              >
                {item.icon}
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6, px: 2 }}>
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    color: '#2c3e50',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  Advanced Healthcare Solutions
                </Typography>
              </motion.div>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: '#34495e',
                  lineHeight: 1.6
                }}
              >
                At MD Clinic, we're dedicated to delivering exceptional medical care 
                through advanced treatments, personalized approach, and unwavering 
                commitment to patient well-being. Our multidisciplinary team works 
                tirelessly to provide innovative healthcare solutions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/login")} // Navigate to login on click
                  sx={{ 
                    background: 'linear-gradient(45deg, #2c3e50 0%, #34495e 100%)', 
                    color: 'white',
                    py: 1.5,
                    px: 3,
                    borderRadius: 2
                  }}
                >
                  Book an Appointment
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[ 
                  { icon: <FaUserMd size={40} />, title: "Find a Doctor" },
                  { icon: <FaStethoscope size={40} />, title: "Find a Location" },
                  { icon: <FaCalendarAlt size={40} />, title: "Book an Appointment" }
                ].map((service, index) => (
                  <Paper 
                    key={index}
                    elevation={3} 
                    sx={{ 
                      p: 2, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2, 
                      borderRadius: 2,
                      backgroundColor: '#ffffff',
                      boxShadow: 3,
                    }}
                  >
                    {service.icon}
                    <Typography variant="h6" sx={{ fontWeight: 600 }} onClick={() => navigate("/login")}> {/* Navigate to login on click */}
                      {service.title}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Medical Services Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: '#2c3e50' }}>
            Our Medical Services
          </Typography>
          <Grid container spacing={4}>
            {medicalServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card sx={{ padding: 3, textAlign: 'center', height: '100%' }}>
                    {service.icon}
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>{service.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#34495e' }}>{service.description}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQs Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: '#2c3e50' }}>
            Frequently Asked Questions
          </Typography>
          {faqData.map((faq, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `panel${index}`} 
              onChange={handleChange(`panel${index}`)}
              sx={{ 
                mb: 1, 
                backgroundColor: '#ffffff', 
                boxShadow: 2, 
                borderRadius: 2 
              }}
            >
              <AccordionSummary expandIcon={<MdExpandMore />} sx={{ backgroundColor: '#f7f9fc' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {faq.icon}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: '#34495e' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: '#2c3e50' }}>
            Patient Testimonials
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ padding: 3, textAlign: 'center', height: '100%' }}>
                  <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', color: '#34495e' }}>
                    "{testimonial.feedback}"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                    - {testimonial.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ py: 4, backgroundColor: '#2c3e50', color: '#ffffff', width: '100%' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} MD Clinic. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HealthcareLandingPage;
