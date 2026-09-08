export interface BlogPost {
  slug: string;
  title: string;
  category: string;
}

const slugify = (title: string) =>
title.
toLowerCase().
replace(/[^a-z0-9\s-]/g, '').
trim().
replace(/\s+/g, '-');

const entries: Array<[string, string]> = [
['Panchakarma Treatment in Nashik: Complete Guide', 'Panchakarma'],
['What Is Panchakarma and How Does It Work?', 'Panchakarma'],
['Panchakarma Therapy: What to Expect During Your Journey', 'Panchakarma'],
['How Much Does Panchakarma Cost in Nashik?', 'Panchakarma'],
['How to Choose a Panchakarma Centre in Nashik', 'Panchakarma'],
['Ayurvedic Rejuvenation Therapy in Nashik', 'Rejuvenation'],
['Abhyanga Massage: Traditional Ayurvedic Oil Therapy', 'Therapies'],
['What Is Shirodhara?', 'Therapies'],
['Shirodhara Therapy in Ayurveda: What to Expect', 'Therapies'],
['Ayurvedic Therapies for Modern Lifestyle Wellness', 'Lifestyle'],
['Panchakarma Preparation: What Should You Know?', 'Panchakarma'],
['What to Eat During an Ayurvedic Wellness Program', 'Diet'],
['Panchakarma Aftercare: Supporting Your Wellness Routine', 'Panchakarma'],
['Ayurvedic Daily Routine: Understanding Dinacharya', 'Lifestyle'],
['Ayurveda and Seasonal Wellness', 'Lifestyle'],
['Traditional Ayurvedic Rejuvenation Practices', 'Rejuvenation'],
['Panchakarma vs Ayurvedic Massage: Understanding the Difference', 'Panchakarma'],
['7-Day Ayurvedic Wellness Program: What Does It Include?', 'Programs'],
['14-Day Panchakarma Program: What to Expect', 'Programs'],
['Frequently Asked Questions About Panchakarma', 'Panchakarma']];


export const blogPosts: BlogPost[] = entries.map(([title, category]) => ({
  slug: slugify(title),
  title,
  category
}));