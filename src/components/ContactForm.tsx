import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const pub_key = import.meta.env.VITE_PUBLIC_KEY;
const service_key = import.meta.env.VITE_SERVICE_KEY;

const ContactForm = () => {
  const { toast } = useToast();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Replace with your public key from EmailJS
    emailjs.init(pub_key);

    // Send the contact form message
    emailjs.sendForm(service_key, "contact_form", event.target).then(
      () => {
        toast({
          description: "Contact form message sent successfully!",
        });

        // Send the auto-reply email
        emailjs
          .send(
            service_key,
            "template_rov4ao8",
            {
              user_name: event.target["user_name"].value,
              user_email: event.target["user_email"].value,
            },
            pub_key
          )
          .then(
            () => {
              //console.log("Auto-reply email sent successfully!", result.text);
              // toast({
              //   description: "sent succesfully!",
              // });
              event.target.reset(); // Reset form after successful submission
            },
            (error) => {
              console.error("Failed to send auto-reply email:", error.text);
              // toast({
              //   description: "Contact form message sent successfully!",
              // });
            }
          );
      },
      (error) => {
        console.error("Failed to send contact form message:", error);
        toast({
          description: "Failed to send contact form message!",
        });
      }
    );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-20"
    >
      <div className="absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="relative container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
        <p className="text-lg mb-8">
          Interested in working together? Let's connect!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Enter Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
