import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';

const Blog = () => {
  const posts = [
    {
      title: 'Top 10 SEO Trends for 2024',
      excerpt: 'Stay ahead of the curve with these essential SEO strategies that will dominate the digital landscape.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?w=400&h=250&fit=crop',
      author: 'John Smith',
      date: 'Jan 15, 2024',
      category: 'SEO',
    },
    {
      title: 'How to Build a Social Media Strategy',
      excerpt: 'A comprehensive guide to creating an effective social media presence for your brand.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
      author: 'Sarah Johnson',
      date: 'Jan 10, 2024',
      category: 'Social Media',
    },
    {
      title: 'The Ultimate Guide to Content Marketing',
      excerpt: 'Learn how to create content that attracts, engages, and converts your target audience.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop',
      author: 'Mike Williams',
      date: 'Jan 5, 2024',
      category: 'Content',
    },
    {
      title: 'PPC Advertising Best Practices',
      excerpt: 'Maximize your ROI with these proven pay-per-click advertising strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      author: 'Emily Chen',
      date: 'Dec 28, 2023',
      category: 'Paid Ads',
    },
    {
      title: 'Web Design Trends to Watch',
      excerpt: 'Discover the latest web design trends that will shape the digital experience.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      author: 'David Brown',
      date: 'Dec 20, 2023',
      category: 'Design',
    },
    {
      title: 'Conversion Rate Optimization Tips',
      excerpt: 'Simple yet effective techniques to improve your website conversion rates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      author: 'Lisa Martinez',
      date: 'Dec 15, 2023',
      category: 'CRO',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Digital Marketing <span className="text-accent">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and strategies to help you succeed in the digital world
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-orange inline-flex items-center gap-2">
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Blog;
