import {
  Building2,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center mb-6">
          <Building2 className="h-12 w-12 text-primary mb-4" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Timepower Partners
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empowering businesses through expert training and consulting services
        </p>
      </header>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>P.O. Box 187 Hohoe, Volta Region, Ghana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:growomen@yahoo.com"
                    className="hover:text-primary"
                  >
                    growomen@yahoo.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:0201573336" className="hover:text-primary">
                    0201573336
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Contact Person</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Joyce Bulla
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    Lead Trainer
                  </span>
                </p>
              </div>
            </div>

            <div>
              <Button className="w-full mb-4">Schedule a Consultation</Button>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Business meeting"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Training Services */}
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Training</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Entrepreneurship Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Business Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Total Quality Management</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Artisanal Skill Development</span>
              </li>
            </ul>
          </Card>

          {/* Consulting Services */}
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Consulting</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Project Management</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Monitoring and Extraction</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Timepower Partners. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
