import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

interface ContactInfo {
  title: string;
  content: string;
  action: string;
  icon: React.ComponentType<any>;
}

interface ContactUsProps {
  contactInfo?: ContactInfo[];
  formTitle?: string;
  heading?: string;
  description?: string;
}

export default function ContactUs({
  contactInfo = [
    {
      title: "Visit Us",
      content: "Oyarifa",
      action: "Get Directions",
      icon: MapPin
    },
    {
      title: "Call us",
      content: "0209 393 991 / 0244 937 048",
      action: "Call Now",
      icon: Phone
    },
    {
      title: "Email Us",
      content: "nukooconstructions@gmail.com",
      action: "Send Email",
      icon: Mail
    },
    {
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: 10:00 AM - 4:00 PM",
      action: "",
      icon: Clock
    }
  ],
  formTitle = "Send us message!",
  heading = "We'd Love to Hear From You",
  description = "Fill out the form below and our team will get back to you within 24 hours."
}: ContactUsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-500 mb-4">
                  <Icon className="h-6 w-6 text-blue-500" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-3 whitespace-pre-line">
                  {info.content}
                </p>
                
                {/* Action Link */}
                {info.action && (
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {info.action}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
           <div className=" h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 ">
              {heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {formTitle}
            </h3>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.5 3h-9A2.5 2.5 0 005 5.5v13A2.5 2.5 0 007.5 21h9a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0016.5 3zM5 6l7 4.5L19 6"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    placeholder="+233 (0) 54 967 5834"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
