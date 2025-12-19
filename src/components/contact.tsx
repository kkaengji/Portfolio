"use client";

import type React from "react";

import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">연락하기</h2>
        <div className="space-y-8">
          <div>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              새로운 프로젝트나 기회에 대해 이야기하고 싶으신가요? 아래의 방법으로 연락해 주세요!
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
                <a href="tel:+821012345678" className="text-foreground/70 hover:text-accent transition-colors">
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
      </div>
    </section>
  );
}
