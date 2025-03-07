import Image1 from "../assets/tabs/1.png";
import Image2 from "../assets/tabs/2.png";
import Image3 from "../assets/tabs/3.png";
import Image4 from "../assets/tabs/4.png";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Blogs",
    link: "#blogs",
  },
  {
    id: 4,
    title: "Gallery",
    link: "#gallery",
  },
  {
    id: 5,
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    id: 5,
    title: "Pricing",
    link: "#pricing",
  },
];

export const ProductsData = [
  {
    id: 1,
    category: "Yoga",
    image: Image1,
    info: "info",
    price: "price",
  },
  {
    id: 2,
    category: "Fitness",
    image: Image2,
    title: "Dumbells",
    info: "info",
    price: "$100",
  },
  {
    id: 3,
    category: "Yoga",
    image: Image3,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 4,
    category: "Fitness",
    image: Image4,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 5,
    category: "Muscles",
    image: Image1,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 6,
    category: "Muscles",
    image: Image2,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 7,
    category: "Yoga",
    image: Image3,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
];


export const TestimonialsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "The trainers at this gym are incredibly knowledgeable and supportive. I've seen amazing results in just a few months!",
    delay: 0.2,
    stars: "★ ★ ★ ★ ★"
  },
  {
    id: 2,
    name: "Priya Singh",
    text: "I love the variety of classes offered here. There's something for everyone, and the community is very welcoming.",
    delay: 0.5,
    stars: "★ ★ ★ ★ ★"
  },
  {
    id: 3,
    name: "Amit Patel",
    text: "The facilities are top-notch and always clean. The staff is friendly and always ready to help with any questions.",
    delay: 0.8,
    stars: "★ ★ ★  ★"
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    text: "Joining this gym was the best decision I made for my health. The personalized training programs are fantastic!",
    delay: 1.1,
    stars: "★ ★ ★ ★ ★"
  },
  {
    id: 5,
    name: "Vikram Mehta",
    text: "The equipment here is state-of-the-art and well-maintained. I always have a great workout session.",
    delay: 1.4,
    stars: "★ ★ ★ ★ ★"
  },
  {
    id: 6,
    name: "Anjali Verma",
    text: "The group classes are so much fun and motivating. I've made many friends here and enjoy every session.",
    delay: 1.7,
    stars: "★ ★ ★ ★ "
  },
  {
    id: 7,
    name: "Rohit Gupta",
    text: "The gym's environment is very positive and encouraging. The trainers push you to achieve your best.",
    delay: 2.0,
    stars: "★ ★ ★ ★ ★"
  },
  {
    id: 8,
    name: "Neha Joshi",
    text: "I appreciate the personalized attention and customized workout plans. It has really helped me stay on track.",
    delay: 2.3,
    stars: "★ ★ ★ ★ ★"
  },
];


export const stats = [
  { id: 1, name: 'Active Members', value: '500+' },
  { id: 3, name: 'Personal Trainers', value: '25+' },
  { id: 5, name: 'Years in Business', value: '10' },
];


export const tiers = [
  {
    name: 'Basic Package',
    id: 'tier-basic',
    href: '#contact',
    priceMonthly: '₹1350',
    duration: '1 month',
    description: "Ideal for beginners who are just starting their fitness journey.",
    features: ['Access to gym equipment', '1 personal training session per month', 'Locker facility', 'Group classes'],
    featured: false,
  },
  {
    name: 'Standard Package',
    id: 'tier-standard',
    href: '#contact',
    priceMonthly: '₹2999',
    duration: '1 month',
    description: "Perfect for regular gym-goers who want a bit more.",
    features: ['Access to gym equipment', '3 personal training sessions per month', 'Locker facility', 'Group classes', 'Diet consultation'],
    featured: true,
  },
  {
    name: 'Ultimate Package',
    id: 'tier-ultimate',
    href: '#contact',
    priceMonthly: '₹8999',
    duration: '1 month',
    description: "For those who want the ultimate gym experience.",
    features: ['Access to gym equipment', 'Unlimited personal training sessions', 'Locker facility', 'Group classes', 'Diet consultation', 'Priority support', 'Custom workout plans'],
    featured: true,
  },
  {
    name: 'Premium Package',
    id: 'tier-premium',
    href: '#contact',
    priceMonthly: '₹5549',
    duration: '1 month',
    description: "A premium plan for dedicated fitness enthusiasts.",
    features: ['Access to gym equipment', '5 personal training sessions per month', 'Locker facility', 'Group classes', 'Diet consultation', 'Priority support'],
    featured: false,
  },
];

export const faqData = [
  {
    question: "1. What are the gym's operating hours?",
    answer: "-> Our gym is open from 5 AM to 11 PM from Monday to Saturday, and from 6 AM to 9 PM on Sundays.",
  },
  {
    question: "2. Do you offer personal training sessions?",
    answer: "-> Yes, we offer personal training sessions with certified trainers. You can book sessions as per your convenience.",
  },
  {
    question: "3. What types of memberships do you offer?",
    answer: "-> We offer various membership plans including monthly, quarterly, and annual memberships. Each plan comes with different benefits.",
  },
  {
    question: "4. Are group classes included in the membership?",
    answer: "-> Yes, group classes are included in most of our membership plans. Please check the specific plan details for more information.",
  },
  {
    question: "5. Is there a trial period available?",
    answer: "-> Yes, we offer a one-week trial period for new members to experience our facilities and services.",
  },
];


export const posts = [
  {
    id: 1,
    title: 'Cardio vs. Strength Training: Which One Benefits Heart Health More?',
    href: 'https://www.anytimefitness.co.in/cardio-vs-strength-training-which-one-benefits-heart-health/',
    description:
      'Heart health is the foundation of overall well-being, playing a very important role in maintaining energy, strength, and longevity. Being physically active is essential when it comes to heart health, even for the overall lifestyle...',
    date: 'Mar 05, 2025',
    category: { title: 'Fitness | Cardio | Heart' },
    author: {
      name: 'By - Anytime Fitness',
      imageUrl:
        'https://www.anytimefitness.co.in/wp-content/uploads/2025/02/Cardio-vs.-Strength-Training-Which-One-Benefits-Heart-Health-More.jpg',
    },
  },

  {
    id: 2,
    title: 'Exercises and Their Benefits for Stress Management and Mental Health ',
    href: 'https://www.anytimefitness.co.in/exercises-benefits-for-stress-management-mental-health/',
    description:
      'Nowadays, what we all have in common is stress, it can become a part of our lives. Feeling stressed in challenging situations such as job interviews, unrealistic workloads, school exams, an insecure job, or conflict with family, friends or colleagues is natural, however, one should know how to manage the stress...',
    date: 'January 27, 2025',
    category: { title: 'Yoga | Meditation' },
    author: {
      name: 'By - Anytime Fitness',
      imageUrl:
        'https://www.anytimefitness.co.in/wp-content/uploads/2025/01/Exercises-and-Their-Benefits-for-Stress-Management-and-Mental-Health.jpg',
    },
  },

  {
    id: 3,
    title: 'The Growing Obesity Crisis in India: How Joining a Gym Can Be Your Best Solution',
    href: 'https://www.anytimefitness.co.in/the-growing-obesity-crisis-in-india-how-joining-a-gym-can-be-your-best-solution/',
    description:
      'Growing obesity is one of the major health concerns in India, it seems to be accelerating rapidly. Once considered a problem of the West, obesity now has broadened its sphere, affecting both urban and rural populations...',
    date: 'Mar 05, 2025',
    category: { title: 'Obesity | Health | BMI' },
    author: {
      name: 'By - Anytime Fitness',
      imageUrl:
        'https://www.anytimefitness.co.in/wp-content/uploads/2025/02/The-Growing-Obesity-Crisis-in-India.jpg',
    },
  },
  // More posts...
]


export const certificateImages = [
  {
    alt: "Transistor",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    width: 158,
    height: 48,
  },
  {
    alt: "Reform",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    width: 158,
    height: 48,
  },
  {
    alt: "Tuple",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    width: 158,
    height: 48,
  },
  {
    alt: "SavvyCal",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    width: 158,
    height: 48,
  },
  {
    alt: "Statamic",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    width: 158,
    height: 48,
  },
];

export const galleryImages = [
  {
    src: "https://i.pinimg.com/736x/61/8d/c5/618dc5ef569b62d13a9e8e2be37bbcb4.jpg",
    alt: "gallery-photo-1",
  }, {
    src: "https://i.pinimg.com/736x/7f/17/41/7f17416bfaf2c4e8602e917920e5dcac.jpg",
    alt: "gallery-photo-1",
  }, {
    src: "https://i.pinimg.com/736x/e8/b5/9c/e8b59c65b35b1cdc5837492d6a17c715.jpg",
    alt: "gallery-photo-1",
  }, {
    src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    alt: "gallery-photo-1",
  }, {
    src: "https://i.pinimg.com/736x/a2/99/6b/a2996be8a34c9e9baf6b34470a8818a7.jpg",
    alt: "gallery-photo-1",
  }, {
    src: "https://i.pinimg.com/736x/11/02/bd/1102bd2545a3da036a7fcfe130233d26.jpg",
    alt: "gallery-photo-1",
  }, {
    src: "https://i.pinimg.com/736x/ec/41/93/ec41935156d27c338017cf2d907fa848.jpg",
    alt: "gallery-photo-1",
  }, {
    src: "https://i.pinimg.com/736x/09/90/f1/0990f130cdfc6541b71c9be69d1deabf.jpg",
    alt: "gallery-photo-1",
  },

];


export const trainersData = [
  {
    name: "Arjun Mehta",
    role: "Head Trainer",
    description: "Specializes in strength training and bodybuilding.",
    image: "https://i.pinimg.com/736x/a2/fb/13/a2fb13560cae8b99da7ab04497737746.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    description: "Expert in yoga and flexibility training.",
    image: "https://i.pinimg.com/736x/37/c2/18/37c2187b2b8f014bc9d3b16256d1a47a.jpg",
  },
  {
    name: "Rohan Iyer",
    role: "Cardio Specialist",
    description: "Focuses on cardiovascular health and endurance.",
    image: "https://i.pinimg.com/736x/67/7c/51/677c51d80ba826e13b02f52880a06277.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "Nutritionist",
    description: "Provides dietary plans and nutrition advice.",
    image: "https://i.pinimg.com/736x/61/75/05/6175055a98b055384d26c112dcffdc8b.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Personal Trainer",
    description: "Offers personalized training programs.",
    image: "https://i.pinimg.com/736x/55/42/f3/5542f378f21820596125e8bba4ee56f2.jpg",
  },
  {
    name: "Ananya Pillai",
    role: "Fitness Coach",
    description: "Helps clients achieve their fitness goals.",
    image: "https://i.pinimg.com/736x/eb/9a/db/eb9adb309db2f4875b491b83f4fef59e.jpg",
  },
];
