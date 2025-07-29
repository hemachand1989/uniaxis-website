# SEO & Google Search Console Setup Guide

This document outlines the SEO optimizations implemented and steps to get your site indexed by Google.

## ✅ What's Already Implemented

### 1. Google Tag Manager (GTM)
- GTM container ID: `GTM-5ND6LZHC`
- Installed in both `<head>` and `<body>` sections
- Ready for tracking page views, events, and conversions

### 2. SEO Meta Tags
- Comprehensive title and description
- Keywords targeting your services
- Open Graph tags for social media sharing
- Twitter Card metadata
- Canonical URL
- Proper robots directive

### 3. Structured Data (JSON-LD)
- Organization schema markup
- Contact information
- Services listed
- Enhanced search result appearance

### 4. Technical SEO
- Sitemap.xml at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Semantic HTML structure
- Accessibility improvements

## 🚀 Next Steps for Google Search Console

### Step 1: Verify Your Domain
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `uniaxis.com.au`
3. Choose verification method:
   - **Recommended**: Add this meta tag to your `<head>`:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   - Or upload HTML file to your domain root
   - Or use DNS verification

### Step 2: Submit Your Sitemap
1. In Search Console, go to "Sitemaps"
2. Submit: `https://uniaxis.com.au/sitemap.xml`

### Step 3: Monitor & Optimize
- Check "Coverage" for indexing issues
- Monitor "Performance" for search queries
- Review "Core Web Vitals" for page experience

## 📈 Additional SEO Recommendations

### Content Optimization
- Add a blog section for regular content updates
- Create service-specific landing pages
- Add client testimonials and case studies
- Include location-based content for local SEO

### Technical Improvements
- Ensure fast loading times (Core Web Vitals)
- Add proper alt tags to images
- Implement lazy loading for images
- Add breadcrumb navigation

### Off-Page SEO
- Build quality backlinks
- Create Google My Business profile
- Get listed in relevant directories
- Engage on social media platforms

## 🔍 Keywords Targeting
Primary keywords implemented:
- "Technology consulting Australia"
- "LTI integrations"
- "Full stack development"
- "Enterprise software solutions"
- "Microservices architecture"
- "Educational technology"

## 📊 GTM Setup for Analytics

### Recommended Tags in GTM:
1. **Google Analytics 4** - Track page views and user behavior
2. **Conversion Tracking** - Track contact form submissions
3. **Scroll Tracking** - Monitor engagement depth
4. **Click Tracking** - Track button clicks and external links

### Events to Track:
- Contact email clicks
- Service button clicks
- Portfolio project views
- External link clicks

## 🎯 Expected Timeline
- **Week 1-2**: Google discovers and starts crawling your site
- **Week 2-4**: Initial indexing of main pages
- **Month 1-3**: Ranking improvements for targeted keywords
- **Month 3+**: Steady organic traffic growth

Remember to regularly update your sitemap when adding new content!
