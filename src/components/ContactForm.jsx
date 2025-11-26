import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/Button.jsx";
import { Input } from "./ui/Input.jsx";
import { Textarea } from "./ui/Textarea.jsx";
import { useToast } from "../hooks/use-toast.js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form.jsx";
import karan from '../assets/Karan.png'
import karan2 from '../assets/karan2.png'
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    // EmailJS Configuration
    const serviceId = "service_zolzw3j"; // Replace with your Service ID
    const templateId = "template_y6z7reh"; // Replace with your Template ID
    const publicKey = "vAe88U5ThBa5yFL_a"; // Replace with your Public Key

    // Prepare the data to match your EmailJS template variables
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      message: values.message,
      to_name: "Karan", // Your name
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent Successfully!",
        description: "I'll get back to you within 24 hours.",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast({
        title: "Something went wrong.",
        description: "Please try again later or email me directly.",
        variant: "destructive", // Requires destructive variant in your toast component
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss
            your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Column */}
          <div className="space-y-8 animate-slide-up">
            {/* --- FIRST CARD WITH IMAGE --- */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              {/* Flex container to put Image side-by-side with Details */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Contact Details Section */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Get In Touch
                  </h3>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:karansays0001@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        karansays0001@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a
                        href="tel:+918595343877"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 8595343877
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Studio Location</div>
                      <div className="text-muted-foreground">
                        Noida,Delhi(NCR),India
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- IMAGE SECTION --- */}
                <div className="w-full md:w-1/3 flex-wrap flex md:flex-col center justify-around md:justify-end">
                  <div className="relative w-32 h-32 md:w-30 md:h-30 rounded-full overflow-hidden border-4 md:mb-4 md:ml-5 border-primary/20 shadow-lg">
                    <img
                      src= {karan}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                   <div className="relative w-32 h-32 md:w-30 md:h-30 rounded-full overflow-hidden border-4 md:mt-4 md:ml-5 border-primary/20 shadow-lg">
                    <img
                      src= {karan2}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
              <h4 className="text-xl font-display font-bold mb-4">
                Why Choose KaranSai?
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>✨ Premium quality editing</li>
                <li>⚡ Fast turnaround time</li>
                <li>🎯 Attention to detail</li>
                <li>💯 100% client satisfaction</li>
              </ul>
            </div>
          </div>

          {/* Contact Form Column */}
          <div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Your Phone Number..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;