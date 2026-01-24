import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  showProjectType?: boolean;
  showServices?: boolean;
}

const ContactForm = ({ showProjectType = false, showServices = false }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    projectType: '',
    services: [] as string[],
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name *"
          className="form-input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          className="form-input"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="form-input"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          className="form-input"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      {showProjectType && (
        <div className="space-y-3">
          <p className="font-medium text-foreground">Type of Project</p>
          <div className="flex flex-wrap gap-4">
            {['Digital Marketing', 'Web Development', 'Other'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  checked={formData.projectType === type}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-muted-foreground">{type}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {showServices && (
        <div className="space-y-3">
          <p className="font-medium text-foreground">What do you need?</p>
          <div className="flex flex-wrap gap-4">
            {['SEO', 'SMO', 'Paid Ads', 'CRO', 'Content', 'Web Design'].map((service) => (
              <label key={service} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="w-4 h-4 accent-accent rounded"
                />
                <span className="text-muted-foreground">{service}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <textarea
        placeholder="Your Message *"
        rows={5}
        className="form-input resize-none"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <button type="submit" className="btn-orange flex items-center gap-2">
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
