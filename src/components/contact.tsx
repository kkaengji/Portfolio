"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">연락하기</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                새로운 프로젝트나 기회에 대해 이야기하고 싶으신가요? 아래의
                방법으로 연락해 주세요!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground mb-1">이메일</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    nkj960425@naver.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground mb-1">전화</p>
                  <a
                    href="tel:+821012345678"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    +82 10-2244-0610
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground mb-1">위치</p>
                  <p className="text-foreground/70">서울, 대한민국</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
                placeholder="홍길동"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent text-foreground resize-none"
                placeholder="메시지를 입력해 주세요..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              메시지 보내기 <Send size={18} />
            </button>

            {submitted && (
              <div className="p-4 bg-accent/10 border border-accent rounded-lg text-accent text-center">
                메시지가 전송되었습니다!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
