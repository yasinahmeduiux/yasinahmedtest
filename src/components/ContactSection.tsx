import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Inbox, Trash2, Calendar, RefreshCw } from "lucide-react";
import { ContactSubmission } from "../types";

interface ContactSectionProps {
  showInboxOnly?: boolean;
  prepopulatedMessage?: string;
}

export default function ContactSection({ showInboxOnly = false, prepopulatedMessage = "" }: ContactSectionProps) {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState(prepopulatedMessage || "");
  
  // Validation & Loading States
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Submitted Messages (For Inbox Viewer)
  const [inboxPage, setInboxPage] = useState(showInboxOnly);
  const [messages, setMessages] = useState<ContactSubmission[]>([]);
  const [fetchingMessages, setFetchingMessages] = useState(false);

  // Sync prepopulated message if it changes
  useEffect(() => {
    if (prepopulatedMessage) {
      setMessage(prepopulatedMessage);
      setInboxPage(false);
    }
  }, [prepopulatedMessage]);

  // Fetch submitted messages from Express API
  const fetchMessages = async () => {
    setFetchingMessages(true);
    try {
      const res = await fetch("/api/contact");
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    } finally {
      setFetchingMessages(false);
    }
  };

  // Fetch messages on mount or when inbox page opens
  useEffect(() => {
    fetchMessages();
  }, [inboxPage]);

  // Submit contact form via POST
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Simple Validations
    if (!name.trim()) return setError("Name is required.");
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return setError("Please enter a valid email address.");
    if (!message.trim()) return setError("Please enter your message.");

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      });

      const responseData = await res.json();

      if (res.ok) {
        setSuccess(true);
        // Clear Form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        // Refresh local messages list
        fetchMessages();
      } else {
        setError(responseData.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  // Delete message submission via DELETE
  const handleDeleteMessage = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      if (res.ok) {
        // Refresh list
        fetchMessages();
      } else {
        alert("Failed to delete message.");
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  return (
    <div id="contact-section-container" className="space-y-16 py-12">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h1 id="contact-page-title" className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          {inboxPage ? "Contact Inquiries Feed" : "Let's 👋 Talk"}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {inboxPage 
            ? "View and manage active form inquiries submitted to the portfolio database server." 
            : "Have a design challenge or course inquiry? Drop me a direct line below and let's start creating."
          }
        </p>
      </div>

      {/* Navigation tabs to toggle Form vs Inbox Viewer for testing */}
      <div className="flex items-center justify-center space-x-3 bg-[#0a0718] p-1.5 rounded-full border border-[#1b1540]/80 w-fit mx-auto">
        <button
          onClick={() => setInboxPage(false)}
          className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
            !inboxPage ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Send A Message
        </button>
        <button
          onClick={() => setInboxPage(true)}
          className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
            inboxPage ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Inbox size={14} />
          <span>Inbox Feed ({messages.length})</span>
        </button>
      </div>

      {!inboxPage ? (
        /* Contact Form Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details (lg:col-span-5) */}
          <div id="contact-details-panel" className="lg:col-span-5 space-y-8 bg-[#0a0718] border border-[#1d1645]/80 p-8 rounded-3xl shadow-xl">
            <div className="space-y-2">
              <h2 className="font-sans font-bold text-xl text-white">Yasin Ahmed</h2>
              <p className="text-gray-400 text-sm">Lead User Experience Designer & Project Manager</p>
            </div>

            <div className="space-y-6">
              {/* Email Block */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-white font-sans text-sm font-semibold">Direct Email</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5 select-all">yasinahmeduiux@gmail.com</p>
                </div>
              </div>

              {/* Call Block */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-white font-sans text-sm font-semibold">WhatsApp & Call</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5 select-all">+880 1712-XXXXXX</p>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white font-sans text-sm font-semibold">Location</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Dhaka, Bangladesh (Available Worldwide)</p>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="bg-[#100c2c]/50 p-4 rounded-xl border border-[#1b1540]/60 text-xs text-gray-400">
              ⚡ I typically reply to all serious design challenges and course inquiries within <strong className="text-violet-400">12 hours</strong>.
            </div>
          </div>

          {/* Right Column: Interactive Form (lg:col-span-7) */}
          <div id="contact-form-panel" className="lg:col-span-7 bg-[#0a0718] border border-[#1d1645]/80 p-8 sm:p-10 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Alert Blocks */}
              {error && (
                <div id="form-error-alert" className="flex items-center gap-3 p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-xs sm:text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div id="form-success-alert" className="flex items-center gap-3 p-4 rounded-xl bg-green-950/20 border border-green-500/30 text-green-400 text-xs sm:text-sm">
                  <CheckCircle size={18} className="shrink-0" />
                  <div>
                    <strong className="block font-semibold">Message Received Successfully!</strong>
                    <span className="text-xs text-green-400/80">Thank you! Your message was saved on the server. Click "Inbox Feed" above to inspect it in real-time.</span>
                  </div>
                </div>
              )}

              {/* Inputs row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="form-name-input" className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    id="form-name-input"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#110c2c] border border-[#1f194c]/80 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-email-input" className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Your Email *</label>
                  <input
                    type="email"
                    id="form-email-input"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#110c2c] border border-[#1f194c]/80 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5">
                <label htmlFor="form-subject-input" className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="form-subject-input"
                  placeholder="Design project, Consultation, Enrollment"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#110c2c] border border-[#1f194c]/80 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <label htmlFor="form-message-input" className="text-gray-300">Your Message *</label>
                  <span className="text-gray-500 font-mono">{message.length}/1000</span>
                </div>
                <textarea
                  id="form-message-input"
                  required
                  rows={5}
                  maxLength={1000}
                  placeholder="Describe your design challenges or inquiries in detail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#110c2c] border border-[#1f194c]/80 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="form-submit-btn"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2.5 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-sans text-sm font-bold hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      ) : (
        /* Inbox Feed Page (For Live Submission Verification) */
        <div id="inbox-messages-panel" className="bg-[#0a0718] border border-[#1d1645]/80 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-[#1b1540]/60">
            <div>
              <h2 className="font-sans font-bold text-xl text-white">Live Form Submissions</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Persisted in the local Express server (`submissions.json` file storage).</p>
            </div>
            
            <button
              onClick={fetchMessages}
              disabled={fetchingMessages}
              className="px-4 py-2 bg-[#110d2d] border border-[#211a4e]/80 text-xs text-gray-300 hover:text-white hover:border-violet-500 rounded-xl flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw size={12} className={fetchingMessages ? "animate-spin" : ""} />
              <span>Refresh List</span>
            </button>
          </div>

          {fetchingMessages && messages.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-sm">
              Loading active database inquiries...
            </div>
          ) : messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  id={`inbox-item-${msg.id}`}
                  className="bg-[#110e2f]/50 border border-[#1f194d]/50 p-5 rounded-2xl hover:border-violet-500/30 transition-all duration-200 relative group flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-violet-600/10 text-violet-400 font-mono text-[10px] border border-violet-500/10 font-bold">
                        ID: {msg.id}
                      </span>
                      <strong className="text-white text-sm">{msg.name}</strong>
                      <span className="text-gray-500 text-xs">({msg.email})</span>
                    </div>
                    
                    <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider">Subject: {msg.subject}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                    
                    <span className="text-gray-500 text-[10px] block font-mono">
                      Received: {new Date(msg.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDeleteMessage(msg.id)}
                    className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all shrink-0 cursor-pointer"
                    title="Delete inquiry"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#110e2f]/50 flex items-center justify-center text-violet-400 mx-auto border border-[#211a4e]/60">
                <Inbox size={20} />
              </div>
              <div className="space-y-1">
                <strong className="block text-white text-sm">No messages received yet</strong>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Go ahead and click the **"Send A Message"** tab, type a trial inquiry, and press submit to see it appear here immediately!
                </p>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
