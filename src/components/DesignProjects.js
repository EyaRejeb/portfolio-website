import React from 'react';

// Example imports for your new images (adjust filenames as needed)
import fashionSet1 from '../assets/fashion-set-1.png';
import fashionSet2 from '../assets/fashion-set-2.png';
import fashionSet3 from '../assets/fashion-set-3.png';
import businessStartSteps from '../assets/business-start-steps.png';
import businessCarousel from '../assets/business-carousel.png';
import upcyclingCarousel from '../assets/upcycling-carousel.png';
import upcyclingCarouselPreview from '../assets/upcycling-carousel-preview.png';

// Imports for previously added images
import instaDesign from '../assets/instagram-onmywaytoparis.png';
import pinDesign from '../assets/pinterest-onmywaytoparis.png';
import fbDesign from '../assets/facebook-onmywaytoparis.png';
import healthSeries1 from '../assets/health-series-1.png';
import healthSeries2 from '../assets/health-series-2.png';
import healthSeriesIG1 from '../assets/instagram-health-1.png';
import healthSeriesIG2 from '../assets/instagram-health-2.png';
import parisSeries from '../assets/paris-series.png';
import cosmicSeries1 from '../assets/cosmic-series-1.png';
import cosmicSeries2 from '../assets/cosmic-series-2.png';

import '../DesignProjects.css';

function DesignProjects() {
  const designImages = [
    // Existing items
    {
      id: 1,
      src: instaDesign,
      alt: 'Instagram Designs (Paris)',
      title: 'Instagram Campaign (Paris)',
      description: 'A collection of Instagram posts showcasing brand identity for a travel-themed campaign.',
    },
    {
      id: 2,
      src: pinDesign,
      alt: 'Pinterest Designs (Paris)',
      title: 'Pinterest Boards (Paris)',
      description: 'Visually appealing Pinterest boards highlighting artistic and cultural aspects.',
    },
    {
      id: 3,
      src: fbDesign,
      alt: 'Facebook Designs (Paris)',
      title: 'Facebook Covers & Ads (Paris)',
      description: 'Engaging Facebook covers and ad creatives for social media marketing.',
    },
    {
      id: 4,
      src: healthSeries1,
      alt: 'Health Series Part 1',
      title: 'Healthy Living Series',
      description: 'Educational posts about healthy foods, pre-workout meals, and lifestyle tips.',
    },
    {
      id: 5,
      src: healthSeries2,
      alt: 'Health Series Part 2',
      title: 'Healthy Living Series (Continued)',
      description: 'In-depth posts on grocery shopping tips, meal formulas, and body wellness.',
    },
    {
      id: 6,
      src: cosmicSeries2,
      alt: 'Instagram Health Series 1',
      title: 'Instagram Health Campaign (Set 1)',
      description: 'Visual storytelling focusing on healthy habits and motivational workout posts.',
    },
    {
      id: 7,
      src: healthSeriesIG2,
      alt: 'Instagram Health Series 2',
      title: 'Instagram Health Campaign (Set 2)',
      description: 'Additional designs showcasing healthy snack swaps and lifestyle tips.',
    },
    {
      id: 8,
      src: healthSeriesIG1,
      alt: 'Paris Series Collage',
      title: 'Paris Highlights',
      description: 'Eye-catching visuals of Paris adventures, from couples to nightlife experiences.',
    },
    {
      id: 9,
      src: cosmicSeries1,
      alt: 'Cosmic Series Part 1',
      title: 'Cosmic Inspiration (Set 1)',
      description: 'Inspirational posts on peace, love, and mindfulness with cosmic visuals.',
    },
    {
      id: 10,
      src: fashionSet3,
      alt: 'Cosmic Series Part 2',
      title: 'Cosmic Inspiration (Set 2)',
      description: 'Extended cosmic-themed posts focusing on self-mastery and spiritual reflections.',
    },
    // New Fashion & Business items
    {
      id: 11,
      src: fashionSet1,
      alt: 'Fashion Series 1',
      title: 'Fashion & Streetwear',
      description: 'Modern, bold designs showcasing new arrivals, street style, and special offers.',
    },
    {
      id: 12,
      src: fashionSet2,
      alt: 'Fashion Series 2',
      title: 'Fashion Campaign Collage',
      description: 'An overview of multiple posts for an urban fashion campaign, highlighting brand identity.',
    },
    {
      id: 13,
      src: parisSeries,
      alt: 'Fashion Series 3',
      title: 'Woman Fashion & Menswear',
      description: 'Targeted social media ads for women’s fashion lines and men’s sweater promotions.',
    },
    {
      id: 14,
      src: businessStartSteps,
      alt: 'Steps to Start Your Business',
      title: 'Business Tips (Single Image)',
      description: 'Quick infographic on key steps to launching a successful business venture.',
    },
    {
      id: 15,
      src: businessCarousel,
      alt: 'Business Carousel',
      title: 'Instagram Business Carousel',
      description: 'Multi-slide carousel illustrating a roadmap for market research and planning.',
    },
    {
      id: 16,
      src: upcyclingCarouselPreview,
      alt: 'Upcycling Carousel',
      title: 'Upcycling Carousel (Full)',
      description: 'A five-slide Instagram carousel guiding users through creative upcycling ideas.',
    },
    {
      id: 17,
      src: upcyclingCarousel,
      alt: 'Upcycling Carousel Preview',
      title: 'Upcycling Carousel (Preview)',
      description: 'A preview image of the upcycling carousel highlighting daily routine tips.',
    },
  ];

  return (
    <div className="design-gallery">
      <h2 className="design-gallery-title">Design Projects</h2>
      <p className="design-gallery-subtitle">
        A curated selection of my design work, focusing on modern aesthetics and branding.
      </p>
      
      <div className="gallery-grid">
        {designImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-item-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignProjects;
