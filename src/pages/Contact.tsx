import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Contact — Krishna Suresh";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "This is a placeholder — connect a backend to actually send messages.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Get in Touch</h1>
        <p className="text-muted-foreground mb-10 max-w-lg">
          I'm actively looking for PM roles. If you're hiring, want to collaborate, or just want to say hi — reach out.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-foreground hover:bg-secondary transition-colors"
          >
            <Mail size={16} /> hello@example.com
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-foreground hover:bg-secondary transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's on your mind?"
              required
              rows={5}
              className="mt-1.5"
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
